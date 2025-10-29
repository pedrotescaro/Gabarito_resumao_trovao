import React, { useState, useEffect } from 'react';
import type { Flashcard } from '../types';
import { ChevronLeftIcon, ChevronRightIcon, RotateCwIcon } from './Icons';

interface FlashcardPlayerProps {
  flashcards: Flashcard[];
}

export const FlashcardPlayer: React.FC<FlashcardPlayerProps> = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [flashcards]);
  
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        }
        setIsAnimating(false);
    }, 150); // a little less than transition duration
  };
  
  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  if (flashcards.length === 0) {
    return (
      <div className="text-center py-10 bg-secondary rounded-lg">
        <p className="text-muted-foreground">Nenhum flashcard encontrado para este tópico.</p>
      </div>
    );
  }

  // This check prevents a crash if the flashcards array shrinks and currentIndex becomes invalid.
  // The useEffect hook will then safely reset the index to 0 on the next render.
  if (currentIndex >= flashcards.length) {
    return null;
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl" style={{ perspective: '1000px' }}>
        <div 
          className={`relative w-full h-80 rounded-lg shadow-lg transition-transform duration-500 cursor-pointer ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          onClick={handleFlip}
        >
          {/* Front */}
          <div className="absolute w-full h-full bg-card border border-border rounded-lg flex items-center justify-center p-6 text-center" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
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
      
      <div className="mt-4 flex items-center justify-center gap-4">
        <button onClick={() => handleNavigation('prev')} className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button onClick={handleRestart} className="py-2 px-4 rounded-md bg-secondary hover:bg-accent transition-colors flex items-center gap-2">
          <RotateCwIcon className="h-4 w-4" />
          <span>Reiniciar</span>
        </button>
        <button onClick={() => handleNavigation('next')} className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};