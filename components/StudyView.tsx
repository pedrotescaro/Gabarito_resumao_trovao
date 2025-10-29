import React, { useState, useMemo } from 'react';
import type { View, Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from '../types';
import { SummaryContent } from './SummaryContent';
import { FlashcardPlayer } from './FlashcardPlayer';
import { QuestionViewer } from './QuestionViewer';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface StudyViewProps {
  initialView: View;
  initialDiscipline: Discipline | null;
  disciplines: Discipline[];
  topics: Topic[];
  flashcards: Flashcard[];
  examQuestions: ExamQuestion[];
  onNavigateHome: () => void;
}

export const StudyView: React.FC<StudyViewProps> = ({
  initialView,
  initialDiscipline,
  disciplines,
  topics,
  flashcards,
  examQuestions,
  onNavigateHome,
}) => {
  const [currentView, setCurrentView] = useState<View>(initialView);
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(() => initialDiscipline || disciplines[0]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(() => {
    const discipline = initialDiscipline || disciplines[0];
    if (discipline) {
      return topics.find(t => t.discipline === discipline.name) || null;
    }
    return null;
  });

  const filteredTopics = useMemo(() => {
    if (!selectedDiscipline) return [];
    return topics.filter(t => t.discipline === selectedDiscipline.name);
  }, [selectedDiscipline, topics]);

  const currentTopicIndex = useMemo(() => {
    if (!selectedTopic || filteredTopics.length === 0) return -1;
    return filteredTopics.findIndex(t => t.id === selectedTopic.id);
  }, [selectedTopic, filteredTopics]);

  const filteredFlashcards = useMemo(() => {
    if (!selectedTopic) return [];
    return flashcards.filter(f => f.topicId === selectedTopic.id);
  }, [selectedTopic, flashcards]);

  const filteredQuestions = useMemo(() => {
    if (!selectedTopic) return [];
    return examQuestions.filter(q => q.topicId === selectedTopic.id);
  }, [selectedTopic, examQuestions]);

  const handleDisciplineChange = (disciplineName: DisciplineName) => {
    const discipline = disciplines.find(d => d.name === disciplineName) || null;
    setSelectedDiscipline(discipline);
    // Auto-select the first topic of the new discipline
    const firstTopic = topics.find(t => t.discipline === disciplineName) || null;
    setSelectedTopic(firstTopic);
  };
  
  const handleTopicChange = (topicId: string) => {
    const topic = topics.find(t => t.id === topicId) || null;
    setSelectedTopic(topic);
  };

  const handlePreviousTopic = () => {
    if (currentTopicIndex > 0) {
      setSelectedTopic(filteredTopics[currentTopicIndex - 1]);
    }
  };

  const handleNextTopic = () => {
    if (currentTopicIndex < filteredTopics.length - 1) {
      setSelectedTopic(filteredTopics[currentTopicIndex + 1]);
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'summaries': return 'Resumos Trovão';
      case 'flashcards': return 'Flashcards Interativos';
      case 'questions': return 'Questões de Provas';
      default: return 'Estudar';
    }
  };
  
  const viewOptions = [
    { value: 'summaries', label: 'Resumos' },
    { value: 'flashcards', label: 'Flashcards' },
    { value: 'questions', label: 'Questões' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">{getTitle()}</h1>
        <p className="mt-2 text-lg text-muted-foreground">Selecione uma disciplina e um tópico para começar.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
        <div className="flex flex-col gap-6">
            <div>
                <label className="text-sm font-medium text-muted-foreground">Funcionalidade</label>
                <div className="mt-1 flex items-center p-1 bg-muted rounded-lg">
                    {viewOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => setCurrentView(option.value as View)}
                            className={`w-full px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            currentView === option.value
                                ? 'bg-background text-primary shadow-sm'
                                : 'text-muted-foreground hover:text-foreground/80'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Discipline Selector */}
                <div>
                    <label htmlFor="discipline-select" className="text-sm font-medium text-muted-foreground">Disciplina</label>
                    <select
                    id="discipline-select"
                    value={selectedDiscipline?.name || ''}
                    onChange={(e) => handleDisciplineChange(e.target.value as DisciplineName)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-border bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring rounded-md"
                    >
                    <option value="" disabled>Selecione...</option>
                    {disciplines.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                    </select>
                </div>
                
                {/* Topic Selector */}
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="topic-select" className="text-sm font-medium text-muted-foreground">Tópico</label>
                        {selectedDiscipline && (
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handlePreviousTopic}
                                    disabled={currentTopicIndex <= 0}
                                    className="p-1 rounded-md bg-secondary hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Tópico anterior"
                                >
                                    <ChevronLeftIcon className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={handleNextTopic}
                                    disabled={currentTopicIndex >= filteredTopics.length - 1 || currentTopicIndex === -1}
                                    className="p-1 rounded-md bg-secondary hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    aria-label="Próximo tópico"
                                >
                                    <ChevronRightIcon className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>
                    <select
                    id="topic-select"
                    value={selectedTopic?.id || ''}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    disabled={!selectedDiscipline}
                    className="block w-full pl-3 pr-10 py-2 text-base border-border bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring rounded-md disabled:opacity-50"
                    >
                    <option value="" disabled>Selecione...</option>
                    {filteredTopics.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {!selectedTopic && (
          <div className="text-center py-10 bg-secondary rounded-lg">
            <p className="text-muted-foreground">Por favor, selecione uma disciplina e um tópico para ver o conteúdo.</p>
          </div>
        )}
        
        {selectedTopic && currentView === 'summaries' && <SummaryContent topic={selectedTopic} />}
        {selectedTopic && currentView === 'flashcards' && <FlashcardPlayer flashcards={filteredFlashcards} />}
        {selectedTopic && currentView === 'questions' && <QuestionViewer questions={filteredQuestions} />}
      </div>
    </div>
  );
};