import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  HeroSection,AboutSection,
  FeaturesSection, FAQSection 
} from "./components";

export default function Home() {
  return (
    <main className="tracking-tight">
      <Header />
      
      <HeroSection />
      
      <hr />
      
      <AboutSection />
      
      <hr />
      
      <FeaturesSection />
      
      <FAQSection />
      
      <Footer />
    </main>
  );
}
