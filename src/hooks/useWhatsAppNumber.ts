import { useSearchParams } from "react-router-dom";

const DEFAULT_WHATSAPP_NUMBER = "5511982672082";

export const sanitizeWhatsAppNumber = (raw?: string | null) => {
  const digits = raw?.replace(/\D/g, "") ?? "";
  return digits.length ? digits : DEFAULT_WHATSAPP_NUMBER;
};

export const useWhatsAppNumber = () => {
  const [searchParams] = useSearchParams();
  const raw = searchParams.get("whatsapp");
  const whatsappNumber = sanitizeWhatsAppNumber(raw);
  return { whatsappNumber };
};

export const formatWhatsAppNumber = (number: string) => {
  if (!number) return "";
  if (number.length === 13) {
    return `+${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 9)}-${number.slice(9)}`;
  }
  if (number.length === 12) {
    return `+${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 8)}-${number.slice(8)}`;
  }
  if (number.length === 11) {
    return `+${number.slice(0, 2)} (${number.slice(2, 4)}) ${number.slice(4, 7)}-${number.slice(7)}`;
  }
  return `+${number}`;
};
