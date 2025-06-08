"use client"

import { DynamicSidebar } from "@/components/sidebar"
import { sidebarData } from "@/data/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TipsCarousel } from "@/components/dashboard/tips-carousel"
import { Resources } from "@/components/dashboard/resources/resources"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <DynamicSidebar data={sidebarData} />

        <main className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">Bem-vindo de volta, John! 👋</h1>
              <p className="text-muted-foreground mt-1">
                Obrigado por usar o <span className="font-semibold">CVx</span> — sua plataforma inteligente de criação de currículos.
              </p>
            </div>

            <hr />

            <TipsCarousel />

            <Card>
              <CardHeader>
                <CardTitle className="mb-4">🚀 Mal começamos...</CardTitle>
                <CardDescription className="space-y-2">
                  <p>
                    O CVx é o seu copiloto na jornada profissional. Hoje, você já pode criar currículos com tecnologia de ponta — mas estamos apenas no início.
                  </p>
                  <p>
                    Em breve, você terá acesso a ferramentas inteligentes para comparar currículos, analisar descrições de vagas, identificar lacunas de habilidades e receber recomendações personalizadas com base no seu perfil.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Acompanhe de perto — estamos desenvolvendo uma plataforma feita para quem quer se destacar de verdade no mercado de trabalho.
                </p>
              </CardFooter>
            </Card>

            <Resources />
            
          </div>
        </main>
      </SidebarProvider>
    </div>
  )
}
