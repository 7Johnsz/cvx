"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const curiosities = [
  {
    id: 1,
    content: "Recrutadores levam em média apenas 7 segundos para decidir se continuam lendo um currículo.",
  },
  {
    id: 2,
    content: "Adicionar resultados mensuráveis (ex: aumentei as vendas em 30%) aumenta as chances de contratação.",
  },
  {
    id: 3,
    content: "Currículos com menos de 2 páginas têm mais chances de serem lidos até o fim.",
  },
  {
    id: 4,
    content: "Palavras como 'liderança', 'proativo' e 'trabalho em equipe' são comuns demais — evite clichês.",
  },
  {
    id: 5,
    content: "60% dos candidatos são eliminados por erros de digitação ou gramática no currículo.",
  },
]

export function TipsCarousel() {
  const [currentTip, setCurrentTip] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextTip = () => {
    setDirection(1)
    setCurrentTip((prev) => (prev + 1) % curiosities.length)
  }

  const prevTip = () => {
    setDirection(-1)
    setCurrentTip((prev) =>
      prev === 0 ? curiosities.length - 1 : prev - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTip()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30 overflow-hidden">
      <CardContent>
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
            <Lightbulb className="h-4 w-4" />
          </div>

          <div className="flex-1 relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={curiosities[currentTip].id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
              >
                <h3 className="font-medium text-amber-800 dark:text-amber-300">
                  Curiosidade profissional
                </h3>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  {curiosities[currentTip].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-amber-700 hover:bg-amber-200 dark:text-amber-400 dark:hover:bg-amber-900"
            onClick={prevTip}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Anterior</span>
          </Button>
          <span className="text-xs text-amber-700 dark:text-amber-400">
            {currentTip + 1}/{curiosities.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-amber-700 hover:bg-amber-200 dark:text-amber-400 dark:hover:bg-amber-900"
            onClick={nextTip}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
