import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { CompanyLogos } from "@/components/CompanyLogos";
import { CoursesSection } from "@/components/CoursesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

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

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton variant="fixed" />
    </main>
  );
};

export default Index;
