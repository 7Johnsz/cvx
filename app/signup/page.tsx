"use client"

import Link from "next/link"
import { AnimatedBackground } from "@/app/signup/components/AnimatedBackground"
import { SignupSidebar } from "@/app/signup/components/SignupSidebar"
import { SignupForm } from "@/app/signup/components/SignupForm"
import { OrDivider } from "@/app/signup/components/OrDivider"
import { SocialLogin } from "@/app/signup/components/SocialLogin"
import { TermsFooter } from "@/app/signup/components/TermsFooter"

export default function SignupPage() {
  return (
    <main className="bg-background min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="w-full max-w-5xl bg-card shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row z-10">
        <SignupSidebar />

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

          <SignupForm />
          <OrDivider />
          <SocialLogin />
          <TermsFooter />
        </div>
      </div>
    </main>
  )
}
