import { CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { CountdownTimer } from "./CountdownTimer";

export const FinalCTASection = () => {
  const guarantees = [
    { icon: Shield, text: "Garantia de 7 dias" },
    { icon: Clock, text: "Acesso imediato" },
    { icon: Award, text: "Certificado MEC" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Não Deixe Essa Oportunidade Passar!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            As vagas com <strong>bolsa parcial</strong> são limitadas e podem acabar a qualquer momento.
          </p>

          {/* Countdown */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <CountdownTimer />
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {guarantees.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="mb-8">
            <WhatsAppButton 
              variant="hero" 
              text="GARANTIR MINHA VAGA AGORA"
              className="text-xl px-10 py-5"
            />
          </div>

          {/* Risk reversal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-left opacity-90">
                <strong>Risco ZERO:</strong> Se em 7 dias você não ficar satisfeito por 
                qualquer motivo, devolvemos 100% do seu investimento. Sem perguntas, 
                sem burocracia. A única coisa que você arrisca perder é a oportunidade 
                de mudar sua vida!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
