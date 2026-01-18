import { Clock, Star, TrendingUp } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { useCity } from "@/hooks/useCity";
import { useProgramName } from "@/hooks/useProgramName";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  category: "admin" | "beleza";
  image: string;
  highlight?: string;
}

export const CourseCard = ({
  title,
  description,
  duration,
  category,
  image,
  highlight,
}: CourseCardProps) => {
  const { cityName } = useCity();
  const { programName } = useProgramName();
  const categoryColors = {
    admin: "bg-white text-trust border-trust/20",
    beleza: "bg-pink-100 text-pink-600 border-pink-200",
  };

  const categoryLabels = {
    admin: "Administração",
    beleza: "Beleza",
  };

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg card-hover group">
      {highlight && (
        <div className="bg-accent text-accent-foreground px-4 py-2 text-sm font-bold text-center">
          🔥 {highlight}
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[category]}`}>
            {categoryLabels[category]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>4.9</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span>Alta demanda</span>
          </div>
        </div>
        <WhatsAppButton
          text="Quero Saber Mais"
          message={`Olá! Vi o anúncio do ${programName} em ${cityName} e gostaria de saber mais sobre o curso ${title}.`}
        />
      </div>
    </div>
  );
};
