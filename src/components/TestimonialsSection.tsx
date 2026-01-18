import { TestimonialCard } from "./TestimonialCard";
import { useCity } from "@/hooks/useCity";

export const TestimonialsSection = () => {
  const { cityName } = useCity();

  const testimonials = [
    {
      name: "Juliana S.",
      age: 19,
      city: cityName,
      course: "Assistente Administrativo",
      testimonial: `Eu não tinha experiência nenhuma e achava que nunca ia conseguir um emprego aqui em ${cityName}. Em 3 meses depois do certificado, fui contratada!`,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "Maria A.",
      age: 45,
      city: cityName,
      course: "Mãe de aluno",
      testimonial: `Meu filho estava perdido. Hoje ele faz estágio em uma empresa grande aqui de ${cityName} e já ajuda nas contas de casa. Sou muito grata!`,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      type: "parent" as const,
    },
    {
      name: "Lucas O.",
      age: 22,
      city: cityName,
      course: "Barbeiro Profissional",
      testimonial: `Saí do desemprego e hoje tenho minha própria barbearia! Sou muito conhecido aqui em ${cityName} graças ao curso.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "Ana P.",
      age: 28,
      city: cityName,
      course: "Manicure Profissional",
      testimonial: "Hoje atendo em domicílio aqui em ${cityName} e ganho mais do que ganhava no meu emprego anterior! Foi a melhor decisão.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "José C.",
      age: 52,
      city: cityName,
      course: "Pai de aluna",
      testimonial: `Minha filha conseguiu uma vaga excelente aqui em ${cityName}. Como pai, não tenho palavras para agradecer a oportunidade.`,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      type: "parent" as const,
    },
    {
      name: "Fernanda L.",
      age: 17,
      city: cityName,
      course: "Auxiliar de RH",
      testimonial: "Com 17 anos já consegui meu primeiro estágio! O curso me ensinou coisas que eu nem imaginava que precisava saber.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      type: "student" as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Histórias reais de {cityName}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem Já <span className="text-primary">Transformou sua Vida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça histórias de alunos e pais que passaram pela mesma jornada e 
            conquistaram novas oportunidades. <strong>A próxima história pode ser a sua!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-medium mb-2">
            Agora que você viu como nossos alunos de {cityName} transformaram suas vidas...
          </p>
          <p className="text-xl text-primary font-bold">
            Está na hora de VOCÊ dar o próximo passo! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
