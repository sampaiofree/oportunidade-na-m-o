import { TestimonialCard } from "./TestimonialCard";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Juliana Santos",
      age: 19,
      city: "São Paulo, SP",
      course: "Assistente Administrativo",
      testimonial: "Eu não tinha experiência nenhuma e achava que nunca ia conseguir emprego. Em 3 meses depois do certificado, fui contratada! Minha mãe não acreditou quando contei.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "Maria Aparecida",
      age: 45,
      city: "Goiânia, GO",
      course: "Mãe de aluno",
      testimonial: "Meu filho de 16 anos estava perdido, sem saber o que fazer. Hoje ele faz estágio em uma empresa grande e já ajuda nas contas de casa. Sou muito grata!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      type: "parent" as const,
    },
    {
      name: "Lucas Oliveira",
      age: 22,
      city: "Recife, PE",
      course: "Barbeiro Profissional",
      testimonial: "Saí do desemprego e hoje tenho minha própria barbearia! Comecei atendendo em casa e em 1 ano consegui alugar meu ponto. O curso mudou tudo pra mim.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "Ana Paula",
      age: 28,
      city: "Belo Horizonte, MG",
      course: "Manicure Profissional",
      testimonial: "Eu fazia por hobby e nem imaginava que poderia virar profissão. Hoje atendo em domicílio e ganho mais do que ganhava no meu emprego anterior!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      type: "student" as const,
    },
    {
      name: "José Carlos",
      age: 52,
      city: "Fortaleza, CE",
      course: "Pai de aluna",
      testimonial: "Minha filha tinha vergonha de dizer que não tinha curso. Depois do certificado, ela passou em 3 entrevistas e escolheu a melhor proposta. Como pai, não tenho palavras.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      type: "parent" as const,
    },
    {
      name: "Fernanda Lima",
      age: 17,
      city: "Salvador, BA",
      course: "Auxiliar de RH",
      testimonial: "Com 17 anos já consegui meu primeiro estágio! Meus amigos não acreditaram. O curso me ensinou coisas que eu nem sabia que existiam.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      type: "student" as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Histórias reais
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
            Agora que você viu como nossos alunos transformaram suas vidas...
          </p>
          <p className="text-xl text-primary font-bold">
            Está na hora de VOCÊ dar o próximo passo! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};
