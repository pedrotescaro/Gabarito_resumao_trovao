import React from 'react';
import type { View } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { LogoIcon } from './Icons';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, currentView, onNavigate }) => {
  const navItems: { view: View; label: string }[] = [
    { view: 'summaries', label: 'Resumos' },
    { view: 'flashcards', label: 'Flashcards' },
    { view: 'questions', label: 'Questões' },
    { view: 'cheatsheet', label: 'Gabarito Final' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <LogoIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">Gabarito</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(item => (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`transition-colors hover:text-primary ${currentView === item.view ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};