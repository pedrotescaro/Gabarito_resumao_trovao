import React from 'react';

export const HowItWorks = () => {
  const features = [
    {
      title: "Resumos Trovão",
      description: "Vá direto ao ponto. Nossos resumos cobrem apenas o essencial dos tópicos que mais caem, otimizando seu tempo de revisão.",
    },
    {
      title: "Flashcards Interativos",
      description: "Memorize fórmulas e conceitos de forma ativa. Clique para virar o card, reforce o aprendizado e monitore seu progresso.",
    },
    {
      title: "Questões de Provas",
      description: "Treine com questões reais de provas anteriores. Cada uma vem com resposta e uma explicação detalhada para você não ter mais dúvidas.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary dark:bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="bg-background dark:bg-muted/50 p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">{index + 1}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};