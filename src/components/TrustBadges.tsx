import { Award, Users, Building2, ShieldCheck } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Certificado MEC",
      description: "Reconhecido nacionalmente",
    },
    {
      icon: Users,
      title: "+112 mil alunos",
      description: "Formados no Brasil",
    },
    {
      icon: Building2,
      title: "+14 países",
      description: "Alcance internacional",
    },
    {
      icon: Award,
      title: "Garantia 7 dias",
      description: "Satisfação ou reembolso",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border shadow-sm card-hover"
        >
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <badge.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-foreground text-center text-sm">
            {badge.title}
          </span>
          <span className="text-xs text-muted-foreground text-center">
            {badge.description}
          </span>
        </div>
      ))}
    </div>
  );
};
