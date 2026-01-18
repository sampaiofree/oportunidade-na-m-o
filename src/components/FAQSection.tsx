import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso ter computador para fazer o curso?",
      answer: "Não! Você só precisa de um celular com acesso à internet. Nossos cursos são 100% otimizados para mobile, permitindo que você estude de qualquer lugar, a qualquer hora.",
    },
    {
      question: "O certificado é reconhecido pelo MEC?",
      answer: "Sim! Nossos certificados são autorizados pelo MEC e têm validade em todo território nacional. São aceitos em processos seletivos de empresas como Nestlé, Coca-Cola, Ambev e muitas outras.",
    },
    {
      question: "Qual a idade mínima para participar?",
      answer: "A idade mínima é 14 anos e não há idade máxima! Basta saber ler e ter um celular com internet. Temos alunos de todas as idades conquistando seu espaço no mercado.",
    },
    {
      question: "E se eu não gostar do curso?",
      answer: "Sem problemas! Oferecemos garantia de 7 dias. Se não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro, sem burocracia e sem perguntas.",
    },
    {
      question: "As vagas são limitadas?",
      answer: "Sim! O valor promocional com bolsa é limitado e as inscrições podem ser encerradas a qualquer momento. Por isso, recomendamos que garanta sua vaga o quanto antes para não perder essa oportunidade.",
    },
    {
      question: "Quanto tempo dura cada curso?",
      answer: "Os cursos variam de 40 a 160 horas, dependendo da área. Você estuda no seu ritmo e pode concluir mais rápido se tiver mais disponibilidade. O importante é que você aprenda de verdade!",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber antes de começar sua jornada de qualificação profissional
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
