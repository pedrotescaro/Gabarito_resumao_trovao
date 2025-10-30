
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Flashcard } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, RotateCwIcon } from './Icons';
import { Trash2Icon } from './Icons'; // Assuming you'll add this icon

const MASTERY_THRESHOLD = 3;
const PROGRESS_STORAGE_KEY = 'flashcardProgress';

type CardStatus = 'new' | 'learning' | 'mastered';

type CardProgress = {
  viewCount: number;
  status: CardStatus;
};

type ProgressData = Record<number, CardProgress>;

const getStatus = (viewCount: number): CardStatus => {
  if (viewCount >= MASTERY_THRESHOLD) return 'mastered';
  if (viewCount > 0) return 'learning';
  return 'new';
};

const StatusBadge: React.FC<{ status: CardStatus }> = ({ status }) => {
    const styles: Record<CardStatus, { text: string; bg: string; textColor: string }> = {
        new: { text: 'Novo', bg: 'bg-gray-200 dark:bg-gray-700', textColor: 'text-gray-600 dark:text-gray-300' },
        learning: { text: 'Aprendendo', bg: 'bg-blue-100 dark:bg-blue-900', textColor: 'text-blue-600 dark:text-blue-300' },
        mastered: { text: 'Dominado', bg: 'bg-green-100 dark:bg-green-900', textColor: 'text-green-600 dark:text-green-300' },
    };
    const currentStyle = styles[status];
    if (!currentStyle) return null;

    return (
        <div className={`absolute top-3 right-3 text-xs font-bold py-1 px-2.5 rounded-full ${currentStyle.bg} ${currentStyle.textColor}`}>
            {currentStyle.text}
        </div>
    );
};

const ProgressBar: React.FC<{ progress: ProgressData }> = ({ progress }) => {
    const total = Object.keys(progress).length;
    if (total === 0) return null;

    const counts = useMemo(() => {
        return Object.values(progress).reduce((acc, p) => {
            acc[p.status]++;
            return acc;
        }, { new: 0, learning: 0, mastered: 0 });
    }, [progress]);

    const masteredPercent = (counts.mastered / total) * 100;
    const learningPercent = (counts.learning / total) * 100;

    return (
        <div className="w-full mb-4">
            <div className="flex text-xs text-muted-foreground mb-1">
                <span className="flex-1 text-left">Progresso do Tópico</span>
                <span>{counts.mastered} / {total} Dominados</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5 flex overflow-hidden">
                <div className="bg-green-500 h-2.5 transition-all duration-300" style={{ width: `${masteredPercent}%` }} title={`${counts.mastered} Dominados`}></div>
                <div className="bg-blue-500 h-2.5 transition-all duration-300" style={{ width: `${learningPercent}%` }} title={`${counts.learning} Aprendendo`}></div>
            </div>
        </div>
    );
};

export const FlashcardPlayer: React.FC<{ flashcards: Flashcard[] }> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [progress, setProgress] = useState<ProgressData>({});

  const loadAllProgress = useCallback((): ProgressData => {
    try {
      const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
      return savedProgress ? JSON.parse(savedProgress) : {};
    } catch (error) {
      console.error("Failed to load progress from localStorage:", error);
      return {};
    }
  }, []);

  useEffect(() => {
    const allProgress = loadAllProgress();
    const initialProgress = flashcards.reduce((acc, card) => {
      acc[card.id] = allProgress[card.id] || { viewCount: 0, status: 'new' };
      return acc;
    }, {} as ProgressData);

    setProgress(initialProgress);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsNavigating(false);
    setAnimationClass('');
  }, [flashcards, loadAllProgress]);

  const updateProgress = useCallback((cardId: number) => {
    const allProgress = loadAllProgress();
    const cardProgress = allProgress[cardId] || { viewCount: 0 };
    
    const newViewCount = cardProgress.viewCount + 1;
    const newStatus = getStatus(newViewCount);
    
    const updatedCardProgress = { viewCount: newViewCount, status: newStatus };

    const updatedAllProgress = {
      ...allProgress,
      [cardId]: updatedCardProgress
    };
    
    try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(updatedAllProgress));
    } catch (error) {
        console.error("Failed to save progress to localStorage:", error);
    }
    
    setProgress(prev => ({
      ...prev,
      [cardId]: updatedCardProgress
    }));
  }, [loadAllProgress]);

  const handleFlip = () => {
    if (isNavigating) return;
    if (!isFlipped && currentFlashcard) {
      updateProgress(currentFlashcard.id);
    }
    setIsFlipped(!isFlipped);
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (isNavigating || flashcards.length < 2) return;
    
    setIsNavigating(true);

    const animationDuration = 300;
    
    const outClass = direction === 'next' ? 'animate-flip-out-next' : 'animate-flip-out-prev';
    const inClass = direction === 'next' ? 'animate-flip-in-next' : 'animate-flip-in-prev';
    
    setAnimationClass(outClass);

    setTimeout(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = direction === 'next' 
                ? (prevIndex + 1) % flashcards.length
                : (prevIndex - 1 + flashcards.length) % flashcards.length;
            setIsFlipped(false);
            return newIndex;
        });
        setAnimationClass(inClass);

        setTimeout(() => {
            setAnimationClass('');
            setIsNavigating(false);
        }, animationDuration);
    }, animationDuration);
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleResetProgress = () => {
      if (!window.confirm("Tem certeza que deseja apagar seu progresso para este tópico? Esta ação não pode ser desfeita.")) {
          return;
      }
      const allProgress = loadAllProgress();
      const topicCardIds = flashcards.map(f => f.id);

      topicCardIds.forEach(id => {
          delete allProgress[id];
      });

      try {
          localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(allProgress));
      } catch (error) {
          console.error("Failed to save progress to localStorage:", error);
      }

      const resetProgressForTopic = flashcards.reduce((acc, card) => {
          acc[card.id] = { viewCount: 0, status: 'new' };
          return acc;
      }, {} as ProgressData);

      setProgress(resetProgressForTopic);
      handleRestart();
  };

  if (flashcards.length === 0) {
    return (
      <div className="text-center py-10 bg-secondary rounded-lg">
        <p className="text-muted-foreground">Nenhum flashcard encontrado para este tópico.</p>
      </div>
    );
  }

  if (currentIndex >= flashcards.length) {
    return null;
  }

  const currentFlashcard = flashcards[currentIndex];
  const currentStatus = progress[currentFlashcard.id]?.status || 'new';

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <ProgressBar progress={progress} />
      </div>
      <div className="w-full max-w-2xl" style={{ perspective: '1000px' }}>
        <div 
          className={`relative w-full h-80 rounded-lg shadow-lg transition-transform duration-500 cursor-pointer ${animationClass}`}
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          onClick={handleFlip}
          aria-live="polite"
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-card border border-border rounded-lg flex items-center justify-center p-6 text-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
            <StatusBadge status={currentStatus} />
            <p className="text-2xl font-semibold">{currentFlashcard.question}</p>
          </div>
          {/* Back */}
          <div className="absolute w-full h-full bg-secondary border border-border rounded-lg flex items-center justify-center p-6 text-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <p className="text-xl">{currentFlashcard.answer}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-muted-foreground">
        Card {currentIndex + 1} de {flashcards.length}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <button onClick={() => handleNavigation('prev')} disabled={isNavigating || flashcards.length < 2} className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors disabled:opacity-50" aria-label="Card anterior">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button onClick={handleRestart} disabled={isNavigating} className="py-2 px-4 rounded-md bg-secondary hover:bg-accent transition-colors flex items-center gap-2 disabled:opacity-50 text-sm">
          <RotateCwIcon className="h-4 w-4" />
          <span>Reiniciar</span>
        </button>
        <button onClick={() => handleNavigation('next')} disabled={isNavigating || flashcards.length < 2} className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors disabled:opacity-50" aria-label="Próximo card">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-4">
        <button onClick={handleResetProgress} disabled={isNavigating} className="py-2 px-4 rounded-md text-red-600 hover:bg-red-500/10 transition-colors flex items-center gap-2 disabled:opacity-50 text-xs">
            <Trash2Icon className="h-3.5 w-3.5" />
            <span>Resetar Progresso</span>
        </button>
      </div>
    </div>
  );
};
      