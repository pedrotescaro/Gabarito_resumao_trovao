import React, { useState, useEffect, useCallback } from 'react';
import type { View, Discipline, DisciplineName } from './types';
import { DISCIPLINES, TOPICS, FLASHCARDS, EXAM_QUESTIONS } from './constants';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DisciplineCard } from './components/DisciplineCard';
import { HowItWorks } from './components/HowItWorks';
import { StudyView } from './components/StudyView';
import { CheatsheetView } from './components/CheatsheetView';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  const [view, setView] = useState<View>('home');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleNavigate = useCallback((newView: View, discipline: Discipline | null = null) => {
    setView(newView);
    setSelectedDiscipline(discipline);
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    if (view === 'home') {
      return (
        <>
          <HeroSection onNavigate={() => handleNavigate('summaries', DISCIPLINES[0])} />
          <section id="disciplinas" className="container mx-auto px-4 py-12 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Explore as Disciplinas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DISCIPLINES.map((d) => (
                <DisciplineCard key={d.name} discipline={d} onNavigate={handleNavigate} />
              ))}
            </div>
          </section>
          <HowItWorks />
        </>
      );
    }

    if (view === 'cheatsheet') {
      return <CheatsheetView />;
    }

    return (
      <StudyView
        initialView={view}
        initialDiscipline={selectedDiscipline}
        disciplines={DISCIPLINES}
        topics={TOPICS}
        flashcards={FLASHCARDS}
        examQuestions={EXAM_QUESTIONS}
        onNavigateHome={() => handleNavigate('home')}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        currentView={view}
        onNavigate={(v) => handleNavigate(v)}
      />
      <main>
        {renderContent()}
      </main>
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Estudo Exatas Gabarito. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}