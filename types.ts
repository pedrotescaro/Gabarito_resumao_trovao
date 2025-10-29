// FIX: Import React to use React types like SVGProps and JSX.Element
import React from 'react';

export type DisciplineName = 'Matemática' | 'Física' | 'Química';

export type View = 'home' | 'summaries' | 'flashcards' | 'questions' | 'cheatsheet';

export interface Discipline {
  name: DisciplineName;
  // FIX: Changed return type from JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  description: string;
  color: string;
  bgColor: string;
}

export interface Topic {
  id: string;
  name: string;
  discipline: DisciplineName;
  summary: string;
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