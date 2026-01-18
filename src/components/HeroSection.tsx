import { ArrowRight, CheckCircle2, Smartphone } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";
import { CountdownTimer } from "./CountdownTimer";
import { useCity } from "@/hooks/useCity";
import ShrinkToFit from "./ui/ShrinkToFit";
import { useProgramName } from "@/hooks/useProgramName";

type HeroSectionProps = {
  onCountdownEnd?: () => void;
};

export const HeroSection = ({ onCountdownEnd }: HeroSectionProps) => {
  const { cityName, cityParam } = useCity();
  const [searchParams] = useSearchParams();
  const { programName } = useProgramName();

  const scholarshipsNumber = (() => {
    const scholarshipsParam = searchParams.get("bolsas");
    const parsed = scholarshipsParam ? parseInt(scholarshipsParam, 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 120;
  })();

  const durationMinutes = (() => {
    const tempoParam = searchParams.get("tempo");
    const parsed = tempoParam ? parseInt(tempoParam, 10) : NaN;
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 5;
  })();

  const benefits = [
    "Estude pelo celular, sem precisar de computador",
    "Certificado reconhecido em todo o Brasil",
    "Acesso vitalício ao curso escolhido",
  ];

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-red-700 text-yellow-200 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex flex-col items-center gap-2 text-center font-semibold tracking-tight text-sm md:text-base uppercase">
          <div className="w-full">
            <span className="block w-full text-lg sm:text-xl md:text-2xl leading-tight">
              {programName}
            </span>
            <ShrinkToFit
              className="text-yellow-100 w-full whitespace-nowrap"
              maxFontSize={18}
              minFontSize={6}
            >
              {`Liberado para ${cityName}`}
            </ShrinkToFit>
          </div>
          <div className="w-full flex justify-center">
            <CountdownTimer 
              durationMinutes={durationMinutes}
              storageKey={`countdown-${cityParam ?? "default"}-${durationMinutes}`} 
              onExpire={onCountdownEnd}
            />
          </div>
        </div>
      </div>

      <section className="hero-gradient min-h-screen flex items-center py-12 md:py-20 pb-32 md:pb-36 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              {/* Main headline */}
              <h1 className="mb-4 space-y-1">
                <span className="block font-bold tracking-tight text-foreground">
                  Atenção
                </span>
                <ShrinkToFit
                  className="text-foreground font-extrabold tracking-tight w-full"
                  maxFontSize={35}
                  minFontSize={6}
                >
                  {cityName}
                </ShrinkToFit>
                
              </h1>

              <div className="inline-flex items-center gap-2 bg-yellow-300 text-red-950 rounded-full px-3 py-1 mb-4 text-xs sm:text-sm font-semibold">
                Liberadas {scholarshipsNumber.toLocaleString("pt-BR")} bolsas de estudo.
              </div>

              <div className="bg-card/80 border border-border rounded-2xl p-4 mb-4 max-w-2xl shadow-sm">
                <p className="text-sm sm:text-base text-muted-foreground">
                  O {programName} é de iniciativa privada, criado para ajudar jovens e adultos a se qualificarem e entrarem no mercado de trabalho.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#cursos"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Ver Opções de Cursos
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8">
                <p>Vagas 100% online para início imediato</p>
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <p>Verifique a disponibilidade no botão abaixo</p>
                <WhatsAppButton 
                  variant="hero" 
                  text="Resgatar minha Bolsa via WhatsApp" 
                />
              </div>

              {/* Mobile indicator */}
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>Não precisa de computador, estude 100% pelo celular.</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-float">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                
                {/* Main image container */}
                <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=600&fit=crop"
                    alt="Jovens estudando online"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">+112 mil alunos</p>
                        <p className="text-xs text-muted-foreground">já transformaram suas vidas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
