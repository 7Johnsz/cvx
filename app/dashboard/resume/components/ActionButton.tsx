import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ActionButtonProps {
  disabled?: boolean;
}

export function ActionButton({ disabled = false }: ActionButtonProps) {
  return (
    <div className="mt-10 text-center">
      <Button
        size="lg"
        className="px-8 py-6 text-base font-medium group relative overflow-hidden"
        asChild
        disabled={disabled}
      >
        <Link href="/dashboard/resume/target" className="flex items-center gap-2">
          <span>Avançar</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary-foreground/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-20"></span>
        </Link>
      </Button>

      <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
        Você pode pular etapas e gerar com dados mínimos, mas o resultado pode ser menos eficaz.
      </p>
    </div>
  );
}
