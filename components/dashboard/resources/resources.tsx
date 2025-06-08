"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideSearch, Sparkles, BarChart2, CheckCircle, Clock } from "lucide-react"
import type { ReactElement } from "react"

// Add this type for status
type FeatureStatus = "available" | "in-progress" | "future"

const features: {
	title: string
	description: string
	icon: ReactElement
	status: FeatureStatus
	link?: string
}[] = [
	{
		title: "Análise de Vagas",
		description: "Compare seu currículo com descrições de vagas para maximizar suas chances.",
		icon: <LucideSearch className="h-6 w-6 text-violet-500" />,
		status: "available",
		link: "/analise-vagas",
	},
	{
		title: "Otimização com IA",
		description: "Use inteligência artificial para melhorar seu currículo automaticamente.",
		icon: <Sparkles className="h-6 w-6 text-amber-500" />,
		status: "in-progress",
	},
	{
		title: "Estatísticas Detalhadas",
		description: "Acompanhe o desempenho do seu currículo com métricas avançadas.",
		icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
		status: "future",
	},
]

const statusLabels: Record<FeatureStatus, { label: string; color: string; icon: ReactElement | null }> = {
	"available": { label: "Disponível", color: "success", icon: <CheckCircle className="h-4 w-4 text-green-500 mr-1" /> },
	"in-progress": { label: "Em desenvolvimento", color: "warning", icon: <Clock className="h-4 w-4 text-yellow-500 mr-1" /> },
	"future": { label: "Em breve", color: "secondary", icon: null },
}

export function Resources() {
	return (
		<section className="mt-10">
			<h2 className="text-xl font-semibold mb-4">Tecnologias & Ferramentas</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{features.map((feature, index) => (
					<Card key={index} className="group relative border-muted bg-muted/30 hover:bg-muted/40 transition-all duration-300 h-full min-h-[220px] flex flex-col">
						<CardHeader className="pb-2">
							<div className="flex justify-between items-start">
								<CardTitle className="text-base font-semibold text-foreground">
									{feature.title}
								</CardTitle>
								{/* Tag de status */}
								<Badge variant="outline" className="text-xs flex items-center gap-1">
									{statusLabels[feature.status].icon}
									{statusLabels[feature.status].label}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="pt-0 flex-1 flex flex-col justify-between">
							<p className="text-sm text-muted-foreground">{feature.description}</p>
							<div className="flex items-center justify-center mt-6">
								<div className="rounded-full bg-background p-3 border shadow-inner transition-transform group-hover:scale-105">
									{feature.icon}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
