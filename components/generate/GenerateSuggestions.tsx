import { Lightbulb, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

type Suggestion = {
  id: string
  title: string
  description: string
  section: string
  applied?: boolean
}

type Props = {
  suggestions: Suggestion[]
}

export function GenerateSuggestions({ suggestions }: Props) {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-amber-500" />
        <h2 className="text-lg font-semibold">Sugestões de Melhoria</h2>
      </div>
      <div className="space-y-4">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm">{suggestion.title}</h3>
                <Badge variant="outline" className="text-xs">
                  {suggestion.section}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-0">{suggestion.description}</p>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
            <h3 className="font-medium">Todas as sugestões aplicadas!</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Seu currículo está otimizado e pronto para exportação.
            </p>
          </div>
        )}
      </div>
      <Card className="mt-6 p-4 bg-muted/50 border-muted">
        <h3 className="font-semibold text-base mb-2">Por que esse currículo é ideal?</h3>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Personalizado para a vaga desejada com base em análise de IA.</li>
          <li>Inclui palavras-chave relevantes para sistemas ATS.</li>
          <li>Destaca resultados e conquistas mensuráveis.</li>
          <li>Estrutura clara e moderna, facilitando a leitura por recrutadores.</li>
          <li>Pronto para exportação em múltiplos formatos.</li>
        </ul>
      </Card>
    </>
  )
}
