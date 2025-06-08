import { Sparkles } from "lucide-react"

export function GenerateCompatibility() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Compatibilidade com a Vaga</h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Compatibilidade geral</span>
          <span className="text-sm font-bold">85%</span>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
        </div>
        <div className="pt-2 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Habilidades técnicas</span>
            <span className="text-xs font-medium">90%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Experiência relevante</span>
            <span className="text-xs font-medium">80%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Palavras-chave</span>
            <span className="text-xs font-medium">85%</span>
          </div>
        </div>
      </div>
    </>
  )
}
