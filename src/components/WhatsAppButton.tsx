import { MessageCircle } from "lucide-react";
import type { MouseEventHandler, ReactNode } from "react";
import { useCity } from "@/hooks/useCity";
import { useProgramName } from "@/hooks/useProgramName";
import { useWhatsAppNumber, sanitizeWhatsAppNumber } from "@/hooks/useWhatsAppNumber";
import { trackMetaLead } from "@/lib/metaPixel";

interface WhatsAppButtonProps {
  variant?: "fixed" | "inline" | "hero";
  text?: string;
  className?: string;
  whatsappNumber?: string;
  message?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const WhatsAppButton = ({ 
  variant = "inline", 
  text = "Falar no WhatsApp",
  className = "",
  whatsappNumber,
  message,
  onClick,
}: WhatsAppButtonProps) => {
  const { cityName } = useCity();
  const { programName } = useProgramName();
  const { whatsappNumber: urlWhatsAppNumber } = useWhatsAppNumber();

  const selectedNumber = whatsappNumber
    ? sanitizeWhatsAppNumber(whatsappNumber)
    : urlWhatsAppNumber;

  const defaultMessage = `Olá! Vi o anúncio do ${programName} em ${cityName} e gostaria de saber mais sobre as bolsas disponíveis.`;
  const encodedMessage = encodeURIComponent(message ?? defaultMessage);
  const whatsappUrl = `https://wa.me/${selectedNumber}?text=${encodedMessage}`;
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackMetaLead();
    onClick?.(event);
  };

  if (variant === "fixed") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
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
        onClick={handleClick}
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
      onClick={handleClick}
      className={`inline-flex items-center gap-2 whatsapp-btn text-whatsapp-foreground px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all ${className}`}
    >
      <MessageCircle className="w-5 h-5" fill="currentColor" />
      {text}
    </a>
  );
};

type WhatsAppButtonRowProps = WhatsAppButtonProps & {
  contact: ReactNode;
  containerClassName?: string;
};

export const WhatsAppButtonRow = ({
  contact,
  containerClassName = "",
  ...buttonProps
}: WhatsAppButtonRowProps) => (
  <div className={`flex items-center gap-3 ${containerClassName}`}>
    {contact}
    <WhatsAppButton {...buttonProps} />
  </div>
);
