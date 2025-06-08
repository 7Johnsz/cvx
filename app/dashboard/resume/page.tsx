"use client"

import { useState } from "react"
import { DynamicSidebar } from "@/components/sidebar"
import { sidebarData } from "@/data/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { UploadCloud, FileText, Briefcase, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileInput } from "@/components/ui/file-input"
import { toast } from "sonner"

export default function ResumeStartPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleFileChange = (file: File | null) => {
    setResumeFile(file)
    setUploadComplete(false)

    if (file) {
      // Simular upload do arquivo
      setIsUploading(true)

      // Simulação de upload - em produção, substitua por uma chamada real à API
      setTimeout(() => {
        setIsUploading(false)
        setUploadComplete(true)
        toast.success("Arquivo enviado com sucesso!", {
          description: `${file.name} foi carregado e está pronto para análise.`,
          duration: 4000,
        })
      }, 1500)
    }
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />

        <main className="flex-1 overflow-auto bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-12">
            {/* Header Section with Animation */}
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

            {/* Cards Section */}
            <div className="gap-6 mb-12">
              <Card className="overflow-hidden border-2 border-muted hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardContent className="p-6 pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <UploadCloud className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Envie seu currículo</h2>
                      <p className="text-sm text-muted-foreground">Formato PDF ou Word</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Envie seu currículo atual para análise. Nossa IA identificará pontos fortes e oportunidades de
                    melhoria para destacar suas habilidades.
                  </p>

                  <div className="space-y-4">
                    <FileInput onFileChange={handleFileChange} disabled={isUploading} />

                    {uploadComplete && (
                      <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-500 mt-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Currículo enviado com sucesso!</span>
                      </div>
                    )}

                    {isUploading && (
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                        <span>Enviando arquivo...</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Section */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-4 text-sm text-muted-foreground">ou continue diretamente</span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button
                size="lg"
                className="px-8 py-6 text-base font-medium group relative overflow-hidden"
                asChild
                disabled={isUploading}
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

            {/* Features Section */}
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
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
