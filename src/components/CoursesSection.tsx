import { CourseCard } from "./CourseCard";

export const CoursesSection = () => {
  const courses = [
    {
      title: "Assistente Administrativo",
      description: "Conquiste seu primeiro emprego como Assistente Administrativo! Aprenda rotinas de escritório, atendimento ao cliente e organização empresarial.",
      duration: "80 horas",
      category: "admin" as const,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      highlight: "Mais procurado!",
    },
    {
      title: "Auxiliar de Contabilidade",
      description: "Domine números e conquiste um emprego sólido e bem remunerado! Aprenda lançamentos contábeis, folha de pagamento e obrigações fiscais.",
      duration: "120 horas",
      category: "admin" as const,
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
    },
    {
      title: "Auxiliar de RH",
      description: "Entre para uma das áreas mais valorizadas do mercado! Aprenda recrutamento, seleção, treinamento e gestão de benefícios.",
      duration: "60 horas",
      category: "admin" as const,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    },
    {
      title: "Manicure e Pedicure Profissional",
      description: "Transforme sua habilidade em uma fonte de renda! Aprenda técnicas profissionais de esmaltação, unhas decoradas e cuidados com as mãos.",
      duration: "60 horas",
      category: "beleza" as const,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      highlight: "Alta empregabilidade",
    },
    {
      title: "Barbeiro Profissional",
      description: "Transforme cortes em oportunidades! Domine técnicas de corte masculino, barba e tratamentos capilares para conquistar sua clientela.",
      duration: "80 horas",
      category: "beleza" as const,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop",
    },
    {
      title: "Design de Sobrancelhas",
      description: "Entre para o mercado da beleza com um dos serviços mais procurados! Aprenda técnicas de design, henna e micropigmentação básica.",
      duration: "40 horas",
      category: "beleza" as const,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="cursos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-4">
            Escolha seu futuro
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cursos com <span className="text-primary">Alta Empregabilidade</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os cursos mais procurados pelo mercado de trabalho nas áreas de 
            <strong> Administração</strong> e <strong>Beleza</strong>. Comece a estudar hoje!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            E mais de <strong className="text-primary">35 outros cursos</strong> em diversas áreas!
          </p>
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
};
