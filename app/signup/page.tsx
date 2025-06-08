"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, FileSymlink } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"

export default function SignupPage() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-2xl animate-pulse" />

      <div className="w-full max-w-5xl bg-card shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row z-10">

        <div className="hidden md:flex w-1/2 flex-col justify-between bg-muted p-8 relative">
          <Link href="/" className="text-foreground font-bold text-xl z-10">
            <FileSymlink className="h-6 w-6 inline mr-2" />
            CVx
          </Link>

          <div className="absolute inset-0 opacity-40 z-0">
            <img
              src="/martin.jpg"
              alt="Ilustração inspiradora"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-foreground text-sm z-10 mt-auto">
            <p className="mb-2 italic">"O tempo é sempre certo para fazer o que está certo."</p>
            <p className="text-muted-foreground">Martin Luther King Jr.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 space-y-6">
          
          <div className="flex justify-end text-sm text-muted-foreground">
            Já tem uma conta? <Link href="/login" className="ml-1 underline">Entrar</Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Crie sua conta</h2>
            <p className="text-sm text-muted-foreground">
              Preencha os campos abaixo para se cadastrar
            </p>
          </div>

          <form className="space-y-4">
            <Input type="text" placeholder="Seu nome" required />
            <Input type="email" placeholder="nome@exemplo.com" required />
            <Input type="password" placeholder="Crie uma senha" required />
            <Button type="submit" className="w-full">Cadastrar</Button>
          </form>

          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <div className="flex-grow border-t border-border" />
            <span>OU CONTINUE COM</span>
            <div className="flex-grow border-t border-border" />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github")}
          >
            <Github className="w-4 h-4 mr-2" />
            Entrar com GitHub
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao continuar, você concorda com nossos{" "}
            <Link href="/policy" className="underline">Termos de Uso</Link> e{" "}
            <Link href="/policy" className="underline">Política de Privacidade</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
