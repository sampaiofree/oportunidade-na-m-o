import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Palmtree, PiggyBank, Stethoscope } from "lucide-react";
import React from "react";

const areas = [
  { name: "Gestão e Negócios", icon: <PiggyBank className="w-5 h-5 mr-2" /> },
  { name: "Saúde e Bem-estar", icon: <Stethoscope className="w-5 h-5 mr-2" /> },
  { name: "Turismo e Hospitalidade", icon: <Palmtree className="w-5 h-5 mr-2" /> },
];

interface MicroCompromiseProps {
  onAreaSelect: (area: string) => void;
  selectedArea: string | null;
}

export const MicroCompromise = ({ onAreaSelect, selectedArea }: MicroCompromiseProps) => {
  return (
    <section id="micro-compromise" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Qual área você mais se identifica?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Escolha uma das áreas abaixo para continuarmos pelo WhatsApp. Seu orientador irá te apresentar os melhores cursos para seu perfil.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {areas.map((area) => (
            <Button
              key={area.name}
              variant={selectedArea === area.name ? "default" : "outline"}
              size="lg"
              className="text-lg"
              onClick={() => onAreaSelect(area.name)}
            >
              {area.icon}
              {area.name}
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
            Passo <strong>1 de 2</strong> para garantir sua bolsa.
        </p>
      </div>
    </section>
  );
};
