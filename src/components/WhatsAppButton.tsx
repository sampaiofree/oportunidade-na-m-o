import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "fixed" | "inline" | "hero";
  text?: string;
  className?: string;
}

export const WhatsAppButton = ({ 
  variant = "inline", 
  text = "Falar no WhatsApp",
  className = ""
}: WhatsAppButtonProps) => {
  const whatsappNumber = "5511999999999"; // Placeholder - substituir pelo número real
  const message = encodeURIComponent("Olá! Vim pela página de cursos e quero saber mais sobre as vagas disponíveis.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  if (variant === "fixed") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 whatsapp-btn text-whatsapp-foreground px-5 py-4 rounded-full font-semibold text-lg shadow-2xl animate-pulse-glow hover:scale-105 transition-transform ${className}`}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" fill="currentColor" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    );
  }

  if (variant === "hero") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 whatsapp-btn text-whatsapp-foreground px-8 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all ${className}`}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
        {text}
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 whatsapp-btn text-whatsapp-foreground px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all ${className}`}
    >
      <MessageCircle className="w-5 h-5" fill="currentColor" />
      {text}
    </a>
  );
};
