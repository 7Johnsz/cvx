"use client"

import { useState } from "react"
import { DynamicSidebar } from "@/components/sidebar"
import { sidebarData } from "@/data/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, LinkIcon, Plus, Trash2, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

type JobLink = {
  id: string
  url: string
  title: string
  company?: string
  addedAt: Date
}

type JobDescription = {
  id: string
  title: string
  company?: string
  description: string
  addedAt: Date
}

export default function TargetJobPage() {
  const [activeTab, setActiveTab] = useState<string>("link")
  const [jobUrl, setJobUrl] = useState<string>("")
  const [jobTitle, setJobTitle] = useState<string>("")
  const [jobCompany, setJobCompany] = useState<string>("")
  const [jobDescription, setJobDescription] = useState<string>("")
  const [savedJobs, setSavedJobs] = useState<(JobLink | JobDescription)[]>([])
  const [isProcessing, setIsProcessing] = useState<boolean>(false)

  const handleAddJobLink = () => {
    if (!jobUrl) {
      toast.error("URL da vaga é obrigatória", {
        description: "Por favor, insira o link da vaga que deseja adicionar.",
      })
      return
    }

    // Validar URL
    try {
      new URL(jobUrl)
    } catch (e) {
      toast.error("URL inválida", {
        description: "Por favor, insira um link válido começando com http:// ou https://",
      })
      return
    }

    setIsProcessing(true)

    // Simular processamento do link
    setTimeout(() => {
      const newJob: JobLink = {
        id: Date.now().toString(),
        url: jobUrl,
        title: jobTitle || "Vaga sem título",
        company: jobCompany,
        addedAt: new Date(),
      }

      setSavedJobs((prev) => [...prev, newJob])
      toast.success("Link de vaga adicionado!", {
        description: "O link da vaga foi salvo com sucesso.",
      })

      // Limpar campos
      setJobUrl("")
      setJobTitle("")
      setJobCompany("")
      setIsProcessing(false)
    }, 1500)
  }

  const handleAddJobDescription = () => {
    if (!jobDescription) {
      toast.error("Descrição da vaga é obrigatória", {
        description: "Por favor, insira a descrição da vaga que deseja adicionar.",
      })
      return
    }

    setIsProcessing(true)

    // Simular processamento da descrição
    setTimeout(() => {
      const newJob: JobDescription = {
        id: Date.now().toString(),
        title: jobTitle || "Vaga sem título",
        company: jobCompany,
        description: jobDescription,
        addedAt: new Date(),
      }

      setSavedJobs((prev) => [...prev, newJob])
      toast.success("Descrição de vaga adicionada!", {
        description: "A descrição da vaga foi salva com sucesso.",
      })

      // Limpar campos
      setJobTitle("")
      setJobCompany("")
      setJobDescription("")
      setIsProcessing(false)
    }, 1500)
  }

  const handleRemoveJob = (id: string) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== id))
    toast.info("Vaga removida", {
      description: "A vaga foi removida da sua lista.",
    })
  }

  const isJobLink = (job: JobLink | JobDescription): job is JobLink => {
    return "url" in job
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />

        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild className="mb-6">
                <Link href="/dashboard/resume" className="flex items-center gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar</span>
                </Link>
              </Button>

              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Adicionar vaga-alvo</h1>
              <p className="text-muted-foreground">
                Forneça informações sobre a vaga para personalizar seu currículo com precisão.
              </p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Detalhes da vaga</CardTitle>
                <CardDescription>
                  Adicione um link para a vaga ou cole a descrição completa para melhor personalização.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="link" className="flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" />
                      <span>Link da vaga</span>
                    </TabsTrigger>
                    <TabsTrigger value="description" className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>Descrição da vaga</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="link" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="job-url" className="text-sm font-medium mb-1.5 block">
                          URL da vaga <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="job-url"
                          type="url"
                          placeholder="https://exemplo.com/vaga"
                          value={jobUrl}
                          onChange={(e) => setJobUrl(e.target.value)}
                          disabled={isProcessing}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Cole o link completo da vaga, incluindo https://
                        </p>
                      </div>

                      <div>
                        <label htmlFor="job-title" className="text-sm font-medium mb-1.5 block">
                          Título da vaga (opcional)
                        </label>
                        <Input
                          id="job-title"
                          placeholder="Ex: Desenvolvedor Frontend"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          disabled={isProcessing}
                        />
                      </div>

                      <div>
                        <label htmlFor="job-company" className="text-sm font-medium mb-1.5 block">
                          Empresa (opcional)
                        </label>
                        <Input
                          id="job-company"
                          placeholder="Ex: Empresa XYZ"
                          value={jobCompany}
                          onChange={(e) => setJobCompany(e.target.value)}
                          disabled={isProcessing}
                        />
                      </div>

                      <Button onClick={handleAddJobLink} className="w-full" disabled={!jobUrl || isProcessing}>
                        {isProcessing ? (
                          <>
                            <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                            <span>Processando...</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            <span>Adicionar link</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="description" className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="job-title-desc" className="text-sm font-medium mb-1.5 block">
                          Título da vaga (opcional)
                        </label>
                        <Input
                          id="job-title-desc"
                          placeholder="Ex: Desenvolvedor Frontend"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          disabled={isProcessing}
                        />
                      </div>

                      <div>
                        <label htmlFor="job-company-desc" className="text-sm font-medium mb-1.5 block">
                          Empresa (opcional)
                        </label>
                        <Input
                          id="job-company-desc"
                          placeholder="Ex: Empresa XYZ"
                          value={jobCompany}
                          onChange={(e) => setJobCompany(e.target.value)}
                          disabled={isProcessing}
                        />
                      </div>

                      <div>
                        <label htmlFor="job-description" className="text-sm font-medium mb-1.5 block">
                          Descrição da vaga <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="job-description"
                          placeholder="Cole aqui a descrição completa da vaga..."
                          className="min-h-[200px]"
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                          disabled={isProcessing}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Quanto mais detalhada a descrição, melhor será a personalização do seu currículo.
                        </p>
                      </div>

                      <Button
                        onClick={handleAddJobDescription}
                        className="w-full"
                        disabled={!jobDescription || isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                            <span>Processando...</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4 mr-2" />
                            <span>Adicionar descrição</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {savedJobs.length > 0 && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span>Vagas adicionadas ({savedJobs.length})</span>
                  </CardTitle>
                  <CardDescription>Vagas que serão consideradas na personalização do seu currículo.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="flex items-start justify-between rounded-md border p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{job.title}</h3>
                            {job.company && <span className="text-sm text-muted-foreground">• {job.company}</span>}
                          </div>
                          {isJobLink(job) ? (
                            <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400">
                              <LinkIcon className="h-3 w-3" />
                              <a
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="truncate max-w-[250px] hover:underline flex items-center gap-1"
                              >
                                {job.url.replace(/^https?:\/\//, "")}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {(job as JobDescription).description}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">
                            Adicionado em {job.addedAt.toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => handleRemoveJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remover vaga</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex items-end justify-end">
              <Button className="gap-2" asChild>
                <Link href="/dashboard/resume/generate">
                  <CheckCircle className="h-4 w-4" />
                  <span>Continuar</span>
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
