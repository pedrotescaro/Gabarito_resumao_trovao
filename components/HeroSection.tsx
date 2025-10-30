
import React from 'react';

interface HeroSectionProps {
  onNavigate: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary dark:bg-card border-b border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-primary text-primary-foreground font-semibold py-1 px-3 rounded-full inline-block mb-4 text-sm">
          Foco Total em Exatas
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-primary">
          Gabarite Matemática, Física e Química
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          A plataforma definitiva para dominar os tópicos mais cobrados no ENEM, FUVEST e Provão Paulista com resumos, flashcards e questões.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={onNavigate}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
          >
            Começar a Estudar
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <StatCard value="3" label="Disciplinas" />
            <StatCard value="15" label="Tópicos Estratégicos" />
            <StatCard value="45" label="Flashcards" />
            <StatCard value="28" label="Questões Resolvidas" />
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-background/80 dark:bg-muted/50 p-4 rounded-lg border border-border">
        <p className="text-3xl font-bold text-primary">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
    </div>
);
