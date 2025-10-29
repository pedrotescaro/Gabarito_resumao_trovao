import React from 'react';
import type { Topic } from '../types';

interface SummaryContentProps {
  topic: Topic;
}

export const SummaryContent: React.FC<SummaryContentProps> = ({ topic }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 animate-fade-in summary-content">
      <h2 className="text-2xl font-bold mb-4">{topic.name}</h2>
      <div
        className="text-lg leading-relaxed text-foreground/80"
        dangerouslySetInnerHTML={{ __html: topic.summary }}
      />
    </div>
  );
};
