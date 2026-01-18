import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  age: number;
  city: string;
  course: string;
  testimonial: string;
  image: string;
  type: "student" | "parent";
}

export const TestimonialCard = ({
  name,
  age,
  city,
  course,
  testimonial,
  image,
  type,
}: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-lg card-hover relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {age} anos • {city}
          </p>
          <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
            type === "student" 
              ? "bg-secondary/20 text-secondary" 
              : "bg-primary/20 text-primary"
          }`}>
            {type === "student" ? "Aluno(a)" : "Mãe/Pai"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-accent" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
        "{testimonial}"
      </p>
      <p className="text-xs text-primary font-medium">
        Curso: {course}
      </p>
    </div>
  );
};
