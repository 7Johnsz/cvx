import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <div className="mb-10 text-center">
      <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
        <Sparkles className="mr-1 h-3.5 w-3.5" />
        <span>Potencialize sua carreira</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
        Vamos criar seu currículo!
        <span className="animate-pulse">✨</span>
      </h1>

      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Envie seu currículo atual e uma descrição de vaga para começar a geração inteligente com IA.
      </p>
    </div>
  );
}
