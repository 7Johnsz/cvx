import { Briefcase, FileText, Sparkles } from "lucide-react";

export function FeaturesList() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">Otimização inteligente com IA</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">Formatos profissionais personalizados</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">Adaptado para vagas específicas</p>
      </div>
    </div>
  );
}
