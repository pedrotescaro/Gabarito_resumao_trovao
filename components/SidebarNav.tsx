import React, { useState } from 'react';
import type { View, Discipline, Topic } from '../types';
import { LogoIcon, XIcon, ChevronRightIcon } from './Icons';

interface SidebarNavProps {
    disciplines: Discipline[];
    topics: Topic[];
    onNavigate: (view: View, discipline: Discipline | null, topic: Topic | null) => void;
    onClose: () => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ disciplines, topics, onNavigate, onClose }) => {
    const [expandedDisciplineId, setExpandedDisciplineId] = useState<string | null>(null);

    const handleDisciplineToggle = (disciplineId: string) => {
        setExpandedDisciplineId(prevId => (prevId === disciplineId ? null : disciplineId));
    };
    
    const handleTopicClick = (topic: Topic) => {
        const discipline = disciplines.find(d => d.name === topic.discipline);
        if (discipline) {
            onNavigate('summaries', discipline, topic); // Default to summaries view on click
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
                <div 
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => onNavigate('home', null, null)}
                >
                    <LogoIcon className="h-8 w-8 text-primary" />
                    <span className="font-bold text-lg">Gabarito</span>
                </div>
                <button onClick={onClose} className="p-2 -mr-2 rounded-md hover:bg-accent" aria-label="Fechar menu">
                    <XIcon className="h-6 w-6" />
                </button>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
                {disciplines.map(discipline => {
                    const disciplineTopics = topics.filter(t => t.discipline === discipline.name);
                    const isExpanded = expandedDisciplineId === discipline.id;
                    return (
                        <div key={discipline.id}>
                            <button
                                onClick={() => handleDisciplineToggle(discipline.id)}
                                className="w-full flex items-center justify-between p-2 text-base font-medium rounded-md hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                aria-expanded={isExpanded}
                            >
                                <div className="flex items-center gap-3">
                                  <discipline.icon className={`h-5 w-5 ${discipline.color}`} />
                                  <span>{discipline.name}</span>
                                </div>
                                <ChevronRightIcon className={`h-5 w-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                            </button>
                            {isExpanded && (
                                <div className="pl-6 mt-1 space-y-1">
                                    {disciplineTopics.map(topic => (
                                        <a
                                            key={topic.id}
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); handleTopicClick(topic); }}
                                            className="block p-2 text-sm rounded-md hover:bg-accent text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        >
                                            {topic.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>
        </div>
    );
};