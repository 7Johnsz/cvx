import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ComingSoonCard() {
  return (
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
  );
}
