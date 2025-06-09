import { Button } from "@/components/ui/button";
import { DoorOpen, FileUser, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-16 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/80 z-0" />

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
  );
}
