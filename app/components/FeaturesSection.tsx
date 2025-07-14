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
import features from "@/data/features.json";

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

export function FeaturesSection() {
  return (
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
  );
}
