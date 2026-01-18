import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CoursesSection } from "@/components/CoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MicroCompromise } from "@/components/MicroCompromise";

const Index = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.body.style.overflow = isExpired ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpired]);

  const whatsappNumber = (() => {
    const raw = searchParams.get("whatsapp");
    const digits = raw?.replace(/\D/g, "") ?? "";
    return digits.length ? digits : "5511982672082";
  })();

  // This handler now opens the WhatsApp link directly
  const handleAreaSelect = (area: string) => {
    setSelectedArea(area); // Still useful to visually track the selected button
    const message = `Olá! Vi o anúncio do Portal da Profissão e tenho interesse na bolsa para a área de ${area}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onCountdownEnd={() => setIsExpired(true)} />

      {/* Trust Badges */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <TrustBadges />
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Courses Section */}
      <CoursesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Micro-compromise Section */}
      <MicroCompromise 
        selectedArea={selectedArea}
        onAreaSelect={handleAreaSelect}
      />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton
        variant="fixed"
        whatsappNumber={whatsappNumber}
        className="bottom-24 sm:bottom-28"
      />

      {isExpired && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-card w-full max-w-md rounded-2xl p-8 text-center shadow-2xl border border-border space-y-5">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-muted-foreground uppercase tracking-wide">Inscrições encerradas</p>
              <h2 className="text-2xl font-extrabold text-foreground leading-tight">
                Clique no botão abaixo para entrar na lista de espera
              </h2>
            </div>
            <WhatsAppButton 
              variant="hero" 
              text="Entrar na lista de espera" 
              className="w-full justify-center"
              whatsappNumber={whatsappNumber}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
