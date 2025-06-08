"use client"

import { useState, useEffect } from "react"
import { DynamicSidebar } from "@/components/sidebar"
import { sidebarData } from "@/data/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Download,
  FileText,
  Edit2,
  Eye,
  Sparkles,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  CheckCircle,
  FileDown,
  Copy,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { GenerateResumeTabs } from "@/components/generate/GenerateResumeTabs"
import { GenerateSuggestions } from "@/components/generate/GenerateSuggestions"
import { GenerateCompatibility } from "@/components/generate/GenerateCompatibility"
import { GenerateExportFormats } from "@/components/generate/GenerateExportFormats"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

// Exemplo de currículo em markdown para simulação
const sampleResume = `# João Silva
**Desenvolvedor Full Stack** | São Paulo, SP | [joao@email.com](mailto:joao@email.com) | (11) 98765-4321 | [linkedin.com/in/joaosilva](https://linkedin.com/in/joaosilva)

## Resumo Profissional
Desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento web e mobile, especializado em React, Node.js e TypeScript. Apaixonado por criar soluções escaláveis e de alta performance com foco em experiência do usuário.

## Experiência Profissional

### Desenvolvedor Full Stack Senior | TechCorp | Jan 2021 - Presente
- Liderou o desenvolvimento de uma plataforma SaaS que aumentou a retenção de clientes em 35%
- Implementou CI/CD com GitHub Actions, reduzindo o tempo de deploy em 70%
- Otimizou o desempenho do frontend, melhorando o tempo de carregamento em 40%
- Mentoria de desenvolvedores júnior, conduzindo code reviews e pair programming

### Desenvolvedor Frontend | WebSolutions | Mar 2018 - Dez 2020
- Desenvolveu interfaces responsivas com React e TypeScript para mais de 10 projetos
- Colaborou com designers para implementar UI/UX seguindo princípios de design system
- Reduziu o tamanho dos bundles em 30% através de code splitting e lazy loading
- Implementou testes automatizados, atingindo 80% de cobertura de código

## Formação Acadêmica
**Bacharelado em Ciência da Computação** | Universidade de São Paulo | 2014 - 2018

## Habilidades Técnicas
- **Frontend**: React, TypeScript, Next.js, Tailwind CSS, Redux
- **Backend**: Node.js, Express, NestJS, GraphQL
- **Banco de Dados**: MongoDB, PostgreSQL, Redis
- **DevOps**: Docker, AWS, CI/CD, GitHub Actions
- **Ferramentas**: Git, Jira, Figma, Jest, Testing Library

## Idiomas
- Português (Nativo)
- Inglês (Fluente)
- Espanhol (Intermediário)

## Projetos Pessoais
- **TaskFlow**: Aplicativo de gerenciamento de tarefas com React Native e Firebase
- **CodeBlog**: Blog técnico desenvolvido com Next.js e MDX
`

// Sugestões de melhoria simuladas da IA
const aiSuggestions = [
  {
    id: "1",
    title: "Quantifique suas realizações",
    description:
      "Adicione métricas e resultados específicos para suas realizações profissionais. Por exemplo, 'Aumentou a conversão em 25%' em vez de 'Melhorou a conversão'.",
    section: "Experiência Profissional",
    applied: false,
  },
  {
    id: "2",
    title: "Adicione palavras-chave relevantes",
    description:
      "Inclua mais palavras-chave da descrição da vaga como 'desenvolvimento ágil', 'microserviços' e 'API RESTful' para melhorar a compatibilidade com sistemas ATS.",
    section: "Habilidades Técnicas",
    applied: false,
  },
  {
    id: "3",
    title: "Melhore seu resumo profissional",
    description:
      "Torne seu resumo mais impactante destacando sua especialização em desenvolvimento de aplicações escaláveis e sua experiência com arquiteturas modernas.",
    section: "Resumo Profissional",
    applied: false,
  },
  {
    id: "4",
    title: "Destaque certificações relevantes",
    description:
      "Adicione uma seção de certificações para destacar suas credenciais técnicas como AWS Certified Developer ou MongoDB Certified Developer.",
    section: "Formação Acadêmica",
    applied: false,
  },
]

export default function GenerateResumePage() {
  const [isGenerating, setIsGenerating] = useState(true)
  const [resumeContent, setResumeContent] = useState("")
  const [editableContent, setEditableContent] = useState("")
  const [activeTab, setActiveTab] = useState("preview")
  const [suggestions, setSuggestions] = useState(aiSuggestions)
  const [exportLoading, setExportLoading] = useState(false)

  // Simular geração de currículo
  useEffect(() => {
    const timer = setTimeout(() => {
      setResumeContent(sampleResume)
      setEditableContent(sampleResume)
      setIsGenerating(false)
      toast.success("Currículo gerado com sucesso!", {
        description: "Seu currículo foi personalizado com base nas informações fornecidas.",
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleApplySuggestion = (id: string) => {
    // Em uma implementação real, você aplicaria a sugestão ao conteúdo do currículo
    // Aqui estamos apenas marcando a sugestão como aplicada
    setSuggestions((prev) =>
      prev.map((suggestion) => (suggestion.id === id ? { ...suggestion, applied: true } : suggestion)),
    )
    toast.success("Sugestão aplicada!", {
      description: "A sugestão foi incorporada ao seu currículo.",
    })
  }

  const handleRejectSuggestion = (id: string) => {
    setSuggestions((prev) => prev.filter((suggestion) => suggestion.id !== id))
    toast.info("Sugestão ignorada")
  }

  const handleRegenerateResume = () => {
    setIsGenerating(true)
    // Simular regeneração
    setTimeout(() => {
      setIsGenerating(false)
      toast.success("Currículo regenerado!", {
        description: "Seu currículo foi atualizado com novas melhorias.",
      })
    }, 3000)
  }

  const handleExport = (format: string) => {
    setExportLoading(true)
    // Simular exportação
    setTimeout(() => {
      setExportLoading(false)
      toast.success(`Currículo exportado como ${format.toUpperCase()}!`, {
        description: "O arquivo foi baixado para o seu dispositivo.",
      })
    }, 1500)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(editableContent)
    toast.success("Conteúdo copiado para a área de transferência!")
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />

        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <Button variant="ghost" size="sm" asChild className="mb-2">
                  <Link href="/dashboard/resume" className="flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar</span>
                  </Link>
                </Button>

                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Seu Currículo Personalizado</h1>
                <p className="text-muted-foreground">Visualize, edite e exporte seu currículo otimizado com IA.</p>
              </div>

              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={handleRegenerateResume}
                      disabled={isGenerating}
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Regenerar</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    Em breve
                  </TooltipContent>
                </Tooltip>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="gap-1" disabled={isGenerating || exportLoading}>
                      {exportLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                      <span>Exportar</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleExport("pdf")} className="flex items-center gap-2">
                      <FileDown className="h-4 w-4" />
                      <span>PDF</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleExport("docx")} className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Word (DOCX)</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleExport("md")} className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Markdown</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleCopyToClipboard} className="flex items-center gap-2">
                      <Copy className="h-4 w-4" />
                      <span>Copiar texto</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {isGenerating ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="flex items-center justify-center rounded-full bg-primary/10 p-6 mb-4">
                  <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Gerando seu currículo personalizado...</h2>
                <p className="text-muted-foreground mb-6 text-center max-w-md">
                  Nossa IA está analisando suas informações e a descrição da vaga para criar um currículo otimizado.
                </p>
                <div className="w-full max-w-md h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-progress"></div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden">
                    <div className="border-b px-4 py-3 flex items-center justify-between bg-muted/50">
                      <GenerateResumeTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        editableContent={editableContent}
                        setEditableContent={setEditableContent}
                      />
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <GenerateSuggestions
                        suggestions={suggestions}
                        onApply={handleApplySuggestion}
                        onReject={handleRejectSuggestion}
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <GenerateCompatibility />
                    </CardContent>
                  </Card>
                  
                </div>
              </div>
            )}
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

// Função simples para converter markdown em HTML
function markdownToHtml(markdown: string) {
  // Esta é uma implementação muito básica. Em produção, use uma biblioteca como marked ou remark
  return markdown
    .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-2">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold mt-3 mb-1">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, "<br/><br/>")
}

// Adicione este CSS global para a animação de progresso
// Em globals.css
// @keyframes progress {
//   0% { width: 0%; }
//   50% { width: 70%; }
//   100% { width: 100%; }
// }
// .animate-progress {
//   animation: progress 3s ease-in-out forwards;
// }
