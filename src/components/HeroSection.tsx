import { ArrowRight, CheckCircle2, Smartphone, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { CountdownTimer } from "./CountdownTimer";

export const HeroSection = () => {
  const benefits = [
    "Estude pelo celular, sem precisar de computador",
    "Certificado reconhecido pelo MEC",
    "Bolsas disponíveis para baixa renda",
    "Garantia de 7 dias ou seu dinheiro de volta",
  ];

  return (
    <section className="hero-gradient min-h-screen flex items-center py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Programa Nacional de Qualificação
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-gradient">Mude de Vida</span> com 
              <br />Cursos Profissionalizantes
              <br />
              <span className="text-primary">Acessíveis para Você!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Bolsas parciais para cursos EAD em <strong>mais de 40 áreas</strong>. 
              Qualifique-se pelo celular e conquiste o emprego que vai transformar sua história.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Countdown */}
            <div className="mb-8">
              <CountdownTimer />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton 
                variant="hero" 
                text="Quero Minha Vaga AGORA" 
              />
              <a 
                href="#cursos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Ver Todos os Cursos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile indicator */}
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Smartphone className="w-4 h-4" />
              <span>87% dos nossos alunos estudam apenas pelo celular</span>
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
  );
};
