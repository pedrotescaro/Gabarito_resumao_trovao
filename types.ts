import React from 'react';

export type DisciplineName = 'Matemática' | 'Física' | 'Química';

export type View = 'home' | 'summaries' | 'flashcards' | 'questions' | 'cheatsheet';

export interface Discipline {
  id: string; // Added: 'id' property
  name: DisciplineName;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  description: string;
  color: string;
  bgColor: string; // Added: 'bgColor' property
}

export interface Topic {
  id: string;
  name: string;
  discipline: DisciplineName;
  summary: string;
  svg?: string; // Added: 'svg' property
}

export interface Flashcard {
  id: number;
  topicId: string;
  question: string;
  answer: string;
}

export interface ExamQuestion {
  id: number;
  topicId: string;
  source: string;
  statement: string;
  image?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}