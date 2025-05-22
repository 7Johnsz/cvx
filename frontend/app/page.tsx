import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Brain,
  DoorOpen,
  FileUser,
  Ghost,
  Mic,
  Navigation,
  Sparkles,
  SquareArrowOutUpRight,
  Timer,
} from "lucide-react";

const icons = {
  Brain,
  DoorOpen,
  FileUser,
  Ghost,
  Mic,
  Navigation,
  Sparkles,
  SquareArrowOutUpRight,
  Timer,
};

import features from "@/data/features.json";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="tracking-tight">
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center py-16 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvm650qqex8900haep5apv8q%2Ftask_01jvm650qqex8900haep5apv8q_genid_2d133770-d0ac-41c9-b579-dfd72e1a1db2_25_05_19_11_53_486989%2Fvideos%2F00000_692601408%2Fsource.mp4?st=2025-05-19T19%3A36%3A21Z&se=2025-05-25T20%3A36%3A21Z&sks=b&skt=2025-05-19T19%3A36%3A21Z&ske=2025-05-25T20%3A36%3A21Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=6w4un3Ke2sJL3gILUIj0aZOpD5waH04ttI%2BXTN7tuUM%3D&az=oaivgprodscus"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/95 z-0" />

        <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-[900] leading-tight tracking-tighter">
              Ajudando{" "}
              <FileUser size={40} className="inline align-middle text-blue-300" />
              {" "}currículos a{" "}
              <DoorOpen size={40} className="inline align-middle text-red-300" />
              {" "}saírem do modo fantasma.
            </h1>

            <Button asChild className="mt-6 w-full md:w-[250px] py-6 text-lg">
              <Link href="/login" className="text-accent font-bold">
                <Sparkles size={20} className="inline mr-2" />
                Criar meu currículo
              </Link>
            </Button>

            <p className="text-base md:text-lg text-gray-200 mt-6">
              Ajudando você a encontrar o {" "}
              <span className="underline font-semibold">seu próximo emprego.</span>
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center hover:scale-105 transition-transform duration-500">
            <img
              src="/jornals.webp"
              alt="Ilustração de currículo"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <hr />

      <section className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/mountain.webp"
              alt="Ilustração"
              className="w-full max-w-sm md:max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-[900] leading-tight tracking-tight">
              Praticidade <br className="hidden md:block" />
              <span className="text-2xl md:text-4xl block mt-2">
                e eficiência na utilização.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 mt-8 w-[80%]">
              O CVx é uma plataforma feita para quem está cansado de mandar currículo e cair no limbo do RH. <br/><br/>Combinando inteligência artificial e um toque de empatia, a ferramenta analisa o seu currículo, compara com a vaga dos seus sonhos e gera uma versão otimizada — pronta para encarar os temidos sistemas automatizados de seleção (os famigerados ATS).<br/><br/>
              Basta enviar seu currículo, colar a descrição da vaga e deixar a mágica acontecer. Em poucos segundos, você recebe um documento ajustado, com sugestões de melhorias, análise de aderência e até dicas estratégicas.
            </p>

            <Link
              href=""
              className="flex mt-8 font-semibold text-sm md:text-base hover:text-white/80 transition"
            >
              <SquareArrowOutUpRight className="mr-2 h-5 w-5" />
                Open-Source
            </Link>
          </div>
        </div>
      </section>

      <hr />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-[19px] mb-5 text-center text-gray-500">
            Sua arma secreta contra o ATS.
          </h1>
          <h1 className="text-4xl md:text-6xl mb-16 text-center font-[900] leading-tight tracking-tighter">
            Por que usar o CVx?
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = icons[feature.icon as keyof typeof icons];
              return (
                <div
                  key={index}
                  className={`col-span-1 ${feature.colSpan} border border-white/10 rounded-xl p-6 bg-black text-white hover:bg-white/5 transition flex flex-col`}
                >
                  <Icon className="w-6 h-6 mb-4" />
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-white/70 mt-2 flex-grow">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

      <Footer />
    </main>
  );
}
