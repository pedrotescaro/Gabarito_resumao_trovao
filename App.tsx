import React, { useState, useEffect, useCallback } from 'react';
import type { View, Discipline, Topic } from './types';
import { disciplines, topics, flashcards, examQuestions } from './constants';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DisciplineCard } from './components/DisciplineCard';
import { HowItWorks } from './components/HowItWorks';
import { StudyView } from './components/StudyView';
import { CheatsheetView } from './components/CheatsheetView';
import { Drawer } from './components/Drawer';
import { SidebarNav } from './components/SidebarNav';

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
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleNavigate = useCallback((newView: View, discipline: Discipline | null = null, topic: Topic | null = null) => {
    setView(newView);
    
    const finalDiscipline = discipline || (topic ? disciplines.find(d => d.name === topic.discipline) : null) || selectedDiscipline;
    
    let finalTopic = topic;
    if (discipline && !topic) {
        // If only a discipline is selected, find its first topic
        finalTopic = topics.find(t => t.discipline === discipline.name) || null;
    }

    setSelectedDiscipline(finalDiscipline);
    setSelectedTopic(finalTopic);

    setIsDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [selectedDiscipline]);

  const renderContent = () => {
    if (view === 'home') {
      return (
        <>
          <HeroSection onNavigate={handleNavigate} />
          <section id="disciplinas" className="container mx-auto px-4 py-12 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-primary">
              Explore as Disciplinas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {disciplines.map((d) => (
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
        currentView={view}
        selectedDiscipline={selectedDiscipline}
        selectedTopic={selectedTopic}
        disciplines={disciplines}
        topics={topics}
        flashcards={flashcards}
        examQuestions={examQuestions}
        onNavigate={handleNavigate}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <SidebarNav
          disciplines={disciplines}
          topics={topics}
          onNavigate={handleNavigate}
          onClose={() => setIsDrawerOpen(false)}
        />
      </Drawer>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        currentView={view}
        onNavigate={handleNavigate}
        onMenuClick={() => setIsDrawerOpen(true)}
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