import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
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
  );
}
