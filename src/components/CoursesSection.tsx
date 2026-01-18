import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";

const COURSES_API_URL = "https://cursos.jovemempreendedor.org/api/cursos";
const PAGE_SIZE = 6;

type ApiCourse = {
  title: string;
  slug?: string | null;
  summary?: string | null;
  description?: string | null;
  cover_image_path?: string | null;
  promo_video_url?: string | null;
  status?: string | null;
  duration_minutes?: number | null;
};

type CoursesApiResponse = {
  data?: ApiCourse[];
};

const formatDuration = (minutes?: number | null) => {
  if (!minutes || minutes <= 0) {
    return "Carga horária flexível";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0 && remainingMinutes > 0) {
    return `${hours}h ${remainingMinutes}min`;
  }

  if (hours > 0) {
    return `${hours} ${hours === 1 ? "hora" : "horas"}`;
  }

  return `${minutes} min`;
};

const formatSummary = (course: ApiCourse) => {
  const raw = course.summary ?? course.description ?? "";
  const cleaned = raw.replace(/\s+/g, " ").trim();
  return cleaned || "Conteúdo disponível em breve.";
};

export const CoursesSection = () => {
  const [courses, setCourses] = useState<ApiCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const controller = new AbortController();

    const loadCourses = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(COURSES_API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Erro ao buscar cursos (${response.status})`);
        }

        const payload = (await response.json()) as CoursesApiResponse;
        const data = Array.isArray(payload?.data) ? payload.data : [];
        const publishedCourses = data.filter(
          (course) => course.status === "published" || !course.status,
        );

        setCourses(publishedCourses);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
        console.error(err);
        setError("Não foi possível carregar os cursos agora. Tente novamente em instantes.");
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();

    return () => controller.abort();
  }, []);

  const hasCourses = courses.length > 0;
  const visibleCourses = courses.slice(0, visibleCount);
  const canLoadMore = visibleCount < courses.length;

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
            Cursos práticos e atualizados para você entrar no mercado de trabalho com confiança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading && (
            <p className="col-span-full text-center text-muted-foreground">
              Carregando cursos...
            </p>
          )}
          {!isLoading && error && (
            <p className="col-span-full text-center text-destructive">{error}</p>
          )}
          {!isLoading && !error && !hasCourses && (
            <p className="col-span-full text-center text-muted-foreground">
              Nenhum curso disponível no momento.
            </p>
          )}
          {!isLoading &&
            !error &&
            visibleCourses.map((course, index) => {
              const title = course.title?.trim() || "Curso";
              const description = formatSummary(course);
              const duration = formatDuration(course.duration_minutes);
              const image = course.cover_image_path || "/placeholder.svg";

              return (
                <div
                  key={course.slug ?? title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard
                    title={title}
                    description={description}
                    duration={duration}
                    category="geral"
                    image={image}
                  />
                </div>
              );
            })}
        </div>

        {!isLoading && !error && hasCourses && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Novos cursos são adicionados regularmente.
            </p>
            {canLoadMore ? (
              <button
                type="button"
                onClick={() =>
                  setVisibleCount((current) => Math.min(current + PAGE_SIZE, courses.length))
                }
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Ver catálogo completo -&gt;
              </button>
            ) : (
              <p className="text-muted-foreground">Todos os cursos carregados.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
