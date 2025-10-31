import React, { useState, useMemo, useEffect } from 'react';
import type { View, Discipline, Topic, Flashcard, ExamQuestion, DisciplineName } from '../types';
import { SummaryContent } from './SummaryContent';
import { FlashcardPlayer } from './FlashcardPlayer';
import { QuestionViewer } from './QuestionViewer';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from './Icons';

interface StudyViewProps {
  currentView: View;
  selectedDiscipline: Discipline | null;
  selectedTopic: Topic | null;
  disciplines: Discipline[];
  topics: Topic[];
  flashcards: Flashcard[];
  examQuestions: ExamQuestion[];
  onNavigate: (view: View, discipline: Discipline | null, topic: Topic | null) => void;
}

const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

export const StudyView: React.FC<StudyViewProps> = ({
  currentView,
  selectedDiscipline,
  selectedTopic,
  disciplines,
  topics,
  flashcards,
  examQuestions,
  onNavigate,
}) => {
  const [internalView, setInternalView] = useState<View>(currentView);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    setInternalView(currentView);
  }, [currentView]);

  const filteredTopics = useMemo(() => {
    if (!selectedDiscipline) return [];
    return topics.filter(t => t.discipline === selectedDiscipline.name);
  }, [selectedDiscipline, topics]);

  const searchResults = useMemo(() => {
    if (searchTerm.trim().length < 2) {
      return [];
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return topics.filter(topic =>
      topic.name.toLowerCase().includes(lowercasedTerm) ||
      stripHtml(topic.summary).toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm, topics]);

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
    onNavigate(internalView, discipline, null);
    setSearchTerm('');
  };
  
  const handleTopicChange = (topicId: string) => {
    const topic = topics.find(t => t.id === topicId) || null;
    onNavigate(internalView, selectedDiscipline, topic);
    setSearchTerm('');
  };

  const handlePreviousTopic = () => {
    if (currentTopicIndex > 0) {
      const prevTopic = filteredTopics[currentTopicIndex - 1];
      onNavigate(internalView, selectedDiscipline, prevTopic);
    }
  };

  const handleNextTopic = () => {
    if (currentTopicIndex < filteredTopics.length - 1) {
      const nextTopic = filteredTopics[currentTopicIndex + 1];
      onNavigate(internalView, selectedDiscipline, nextTopic);
    }
  };
  
  const handleSearchResultClick = (topic: Topic) => {
      const discipline = disciplines.find(d => d.name === topic.discipline);
      onNavigate(internalView, discipline, topic);
      setSearchTerm(''); 
  };

  useEffect(() => {
    // Clear search term if view changes away from summaries
    if (internalView !== 'summaries' && searchTerm) {
        setSearchTerm('');
    }
  }, [internalView, searchTerm]);

  const getTitle = () => {
    switch (internalView) {
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

  const SearchResultsDisplay = () => (
    <div className="bg-card border border-border rounded-lg p-4 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4 text-primary">
            {searchResults.length > 0 ? `Resultados da busca por "${searchTerm}"` : `Nenhum resultado para "${searchTerm}"`}
        </h3>
        {searchResults.length > 0 && (
            <ul className="space-y-2">
                {searchResults.map(topic => (
                    <li key={topic.id}>
                        <button
                            onClick={() => handleSearchResultClick(topic)}
                            className="w-full text-left p-3 rounded-md hover:bg-accent transition-colors"
                        >
                            <span className="font-semibold text-foreground">{topic.name}</span>
                            <span className="text-sm text-muted-foreground ml-2">({topic.discipline})</span>
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">{getTitle()}</h1>
        <p className="mt-2 text-lg text-muted-foreground">Selecione uma disciplina e um tópico para começar.</p>
      </div>

      {selectedDiscipline && (
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto mb-6">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <button onClick={() => onNavigate('home', null, null)} className="hover:text-primary transition-colors">
                Home
              </button>
            </li>
            <li>
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
            </li>
            <li>
              <button
                onClick={() => handleDisciplineChange(selectedDiscipline.name)}
                className={`hover:text-primary transition-colors ${!selectedTopic ? 'font-medium text-foreground' : ''}`}
                aria-current={!selectedTopic ? 'page' : undefined}
              >
                {selectedDiscipline.name}
              </button>
            </li>
            {selectedTopic && (
              <>
                <li>
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
                </li>
                <li>
                  <span className="font-medium text-foreground truncate" aria-current="page">
                    {selectedTopic.name}
                  </span>
                </li>
              </>
            )}
          </ol>
        </nav>
      )}

      <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
        <div className="flex flex-col gap-6">
            <div>
                <label className="text-sm font-medium text-muted-foreground">Funcionalidade</label>
                <div className="mt-1 flex items-center p-1 bg-muted rounded-lg">
                    {viewOptions.map(option => (
                        <button
                            key={option.value}
                            onClick={() => setInternalView(option.value as View)}
                            className={`w-full px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            internalView === option.value
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
            {internalView === 'summaries' && (
                <div className="mt-4 relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    <input
                        type="search"
                        placeholder="Pesquisar em todos os resumos..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-base border-border bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring rounded-md"
                        aria-label="Pesquisar nos resumos"
                    />
                </div>
            )}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {internalView === 'summaries' && searchTerm.trim().length >= 2 ? (
            <SearchResultsDisplay />
        ) : (
            <>
                {!selectedTopic && (
                <div className="text-center py-10 bg-secondary rounded-lg">
                    <p className="text-muted-foreground">Por favor, selecione uma disciplina e um tópico para ver o conteúdo.</p>
                </div>
                )}
                
                {selectedTopic && internalView === 'summaries' && <SummaryContent topic={selectedTopic} />}
                {selectedTopic && internalView === 'flashcards' && <FlashcardPlayer flashcards={filteredFlashcards} />}
                {selectedTopic && internalView === 'questions' && <QuestionViewer questions={filteredQuestions} />}
            </>
        )}

        {!(internalView === 'summaries' && searchTerm.trim().length >= 2) && selectedTopic && filteredTopics.length > 1 && (
            <div className="mt-8 flex justify-between items-center bg-card border border-border rounded-lg p-4 shadow-sm">
                <button
                    onClick={handlePreviousTopic}
                    disabled={currentTopicIndex <= 0}
                    className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                    aria-label="Tópico anterior"
                >
                    <ChevronLeftIcon className="h-4 w-4" />
                    Tópico Anterior
                </button>
                <span className="text-sm text-muted-foreground">
                    {currentTopicIndex + 1} / {filteredTopics.length}
                </span>
                <button
                    onClick={handleNextTopic}
                    disabled={currentTopicIndex >= filteredTopics.length - 1 || currentTopicIndex === -1}
                    className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                    aria-label="Próximo tópico"
                >
                    Próximo Tópico
                    <ChevronRightIcon className="h-4 w-4" />
                </button>
            </div>
        )}
      </div>
    </div>
  );
};