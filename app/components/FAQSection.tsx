import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto px-6">
        <h1 className="text-[19px] mb-5 text-center text-gray-500">Tirando suas dúvidas.</h1>
        <h1 className="text-4xl md:text-6xl mb-16 text-center font-[900] leading-tight tracking-tighter">
          Dúvidas frequentes
        </h1>
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1">
            <AccordionTrigger>O CVx edita ou cria um novo currículo?</AccordionTrigger>
            <AccordionContent>
              O CVx parte do seu currículo atual e gera uma versão otimizada para a vaga escolhida, com sugestões de melhorias e ajustes estratégicos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Preciso pagar para usar?</AccordionTrigger>
            <AccordionContent>
              Não! A versão atual do CVx é totalmente gratuita. Aproveite enquanto dura!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Funciona para qualquer profissão?</AccordionTrigger>
            <AccordionContent>
              Sim! Nosso modelo foi treinado para lidar com diversas áreas, desde tecnologia até áreas criativas e operacionais.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Meus dados estão seguros?</AccordionTrigger>
            <AccordionContent>
              Sim. Nenhum dado enviado é armazenado. Sua privacidade é prioridade.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
