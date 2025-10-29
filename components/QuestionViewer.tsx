import React, { useState } from 'react';
import type { ExamQuestion } from '../types';

interface QuestionViewerProps {
  questions: ExamQuestion[];
}

export const QuestionViewer: React.FC<QuestionViewerProps> = ({ questions }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const toggleReveal = (id: number) => {
    const isCurrentlyRevealed = !!revealed[id];
    if (isCurrentlyRevealed) {
      // Hiding: reset both revealed and selected state for this question to allow a retry
      setRevealed(prev => ({ ...prev, [id]: false }));
      setSelectedAnswers(prev => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    } else {
      // Showing: just set revealed to true
      setRevealed(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    // Prevent changing answer after it's revealed
    if (revealed[questionId]) {
      return;
    }
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-10 bg-secondary rounded-lg">
        <p className="text-muted-foreground">Nenhuma questão encontrada para este tópico.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {questions.map((q, index) => {
        const isRevealed = !!revealed[q.id];
        const userSelection = selectedAnswers[q.id];

        return (
          <div key={q.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg">Questão {index + 1}</h3>
              <span className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded-md">{q.source}</span>
            </div>
            <p className="mb-4 whitespace-pre-line">{q.statement}</p>
            
            {q.image && (
              <div className="my-4 flex justify-center">
                <img 
                  src={q.image} 
                  alt={`Imagem para a questão ${index + 1}`} 
                  className="max-w-full h-auto max-h-80 rounded-md border border-border bg-muted p-2"
                />
              </div>
            )}

            <div className="space-y-2 mb-4">
              {q.options.map((option, i) => {
                const isCorrect = i === q.correctAnswerIndex;
                const isSelected = userSelection === i;
                
                let optionClasses = 'p-3 border rounded-md text-sm transition-colors';

                if (isRevealed) {
                  optionClasses += ' cursor-default';
                  if (isCorrect) {
                    optionClasses += ' bg-green-500/10 border-green-500 text-green-800 dark:text-green-300 font-semibold';
                  } else if (isSelected) {
                    optionClasses += ' bg-red-500/10 border-red-500 text-red-800 dark:text-red-300 line-through';
                  } else {
                    optionClasses += ' text-muted-foreground';
                  }
                } else {
                  optionClasses += ' cursor-pointer';
                  if (isSelected) {
                    optionClasses += ' bg-primary/10 border-primary';
                  } else {
                    optionClasses += ' hover:bg-accent';
                  }
                }

                return (
                  <div
                    key={i}
                    onClick={() => handleSelectAnswer(q.id, i)}
                    className={optionClasses}
                  >
                    {String.fromCharCode(65 + i)}) {option}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => toggleReveal(q.id)}
              className="text-sm font-semibold text-primary hover:underline disabled:text-muted-foreground disabled:no-underline disabled:cursor-not-allowed"
              disabled={userSelection === undefined}
            >
              {isRevealed ? 'Tentar Novamente' : 'Verificar Resposta'}
            </button>
            
            {isRevealed && (
              <div className="mt-4 p-4 bg-secondary rounded-md border-l-4 border-primary">
                {userSelection !== undefined && (() => {
                  const isCorrectSelection = userSelection === q.correctAnswerIndex;
                  const selectedOptionLetter = String.fromCharCode(65 + userSelection);
                  const resultText = isCorrectSelection ? 'Correta' : 'Incorreta';
                  const resultColor = isCorrectSelection ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
                  
                  return (
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="font-semibold text-sm">
                        Sua resposta: {selectedOptionLetter} (<span className={resultColor}>{resultText}</span>)
                      </p>
                    </div>
                  );
                })()}

                <h4 className="font-bold mb-2">Explicação Detalhada</h4>
                <p className="text-sm text-foreground/80 whitespace-pre-line">{q.explanation}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};