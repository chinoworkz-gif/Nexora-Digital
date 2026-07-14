import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";
import { siteConfig } from "@/config/site";

const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Problemas", href: "#problemas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Contacto", href: "#contacto" },
] as const;

const serviceLinks = [
  "Sitios web",
  "Sistemas personalizados",
  "Automatización",
  "Integraciones",
  "Analítica y reportes",
  "Consultoría tecnológica",
] as const;

const socialIcons: Record<string, IconType> = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#07162c] text-white">
      <div
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#ff6432]/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f72585]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6432] via-[#ff455f] to-[#f72585] shadow-lg shadow-[#f72585]/20"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-8 w-8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 34V14L24 34V14"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M24 34L38 14V34"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.82"
                  />
                </svg>
              </div>

              <div>
                <p className="text-lg font-extrabold leading-none">
                  {siteConfig.name}
                </p>

                <p className="mt-1 text-xs font-medium text-white/45">
                  {siteConfig.slogan}
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md leading-7 text-white/60">
              {siteConfig.description}
            </p>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Hablar por WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#ff9a64]">
              Navegación
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#ff9a64]">
              Servicios
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm font-medium text-white/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#ff9a64]">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#ff9a64]" />
                {siteConfig.contact.email}
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#ff9a64]"
                />
                {siteConfig.contact.whatsappDisplay}
              </a>

              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#ff9a64]"
                />
                {siteConfig.contact.serviceArea}
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.label];

                if (!Icon) {
                  return null;
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition hover:border-[#f72585]/40 hover:bg-white/[0.09] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/aviso-de-privacidad" className="transition hover:text-white">
              Aviso de privacidad
            </a>

            <a href="/terminos-y-condiciones" className="transition hover:text-white">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}