
import React from 'react';
import type { View, Discipline } from '../types';

interface DisciplineCardProps {
  discipline: Discipline;
  onNavigate: (view: View, discipline: Discipline) => void;
}

export const DisciplineCard: React.FC<DisciplineCardProps> = ({ discipline, onNavigate }) => {
  const { name, icon: Icon, description, color, bgColor } = discipline;

  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col items-start transition-transform transform hover:-translate-y-1">
      <div className={`p-3 rounded-md mb-4 ${bgColor}`}>
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        <button onClick={() => onNavigate('summaries', discipline)} className="w-full text-center bg-secondary hover:bg-accent py-2 px-3 rounded-md transition-colors">Resumos</button>
        <button onClick={() => onNavigate('flashcards', discipline)} className="w-full text-center bg-secondary hover:bg-accent py-2 px-3 rounded-md transition-colors">Flashcards</button>
        <button onClick={() => onNavigate('questions', discipline)} className="w-full text-center bg-secondary hover:bg-accent py-2 px-3 rounded-md transition-colors">Questões</button>
      </div>
    </div>
  );
};
