import { ShieldCheck, Mail, Phone } from "lucide-react";
import { useProgramName } from "@/hooks/useProgramName";
import { useWhatsAppNumber, formatWhatsAppNumber } from "@/hooks/useWhatsAppNumber";

export const Footer = () => {
  const { programName } = useProgramName();
  const { whatsappNumber } = useWhatsAppNumber();
  const formattedWhatsApp = formatWhatsAppNumber(whatsappNumber);
  const words = programName.split(" ");
  const highlighted = words.pop() ?? programName;
  const leading = words.join(" ");
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {leading && (
                <>
                  {leading}{" "}
                </>
              )}
              <span className="text-primary">{highlighted}</span>
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Programa Nacional de Qualificação Profissional. 
              Transformando vidas através da educação acessível desde 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#cursos" className="hover:text-primary transition-colors">Nossos Cursos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@qualificabrasil.com.br</span>
              </li>
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: {formattedWhatsApp || `+${whatsappNumber}`}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-background/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>Site Seguro SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>Autorizado pelo MEC</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-background/50">
          <p>
            © {new Date().getFullYear()} QualificaBrasil. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            CNPJ: 00.000.000/0001-00 | Cursos Livres conforme Lei nº 9.394/96 e Decreto Presidencial nº 5.154/04
          </p>
        </div>
      </div>
    </footer>
  );
};
