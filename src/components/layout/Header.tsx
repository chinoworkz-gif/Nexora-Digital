"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#07162c]/5 bg-[#fffaf7]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Ir al inicio de Nexora Digital"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6432] via-[#ff455f] to-[#f72585] shadow-lg shadow-[#f72585]/20"
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
            <p className="text-base font-extrabold leading-none text-[#07162c]">
              Nexora Digital
            </p>

            <p className="mt-1 text-[10px] font-medium tracking-wide text-[#687386]">
              Tecnología para hacer crecer tu negocio
            </p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-semibold transition-colors hover:text-[#f72585] ${
                index === 0 ? "text-[#f72585]" : "text-[#384456]"
              }`}
            >
              {item.label}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#ff6432] to-[#f72585]" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#f72585]/20 transition hover:-translate-y-0.5 hover:shadow-xl lg:flex"
        >
          Solicitar diagnóstico
          <ArrowRight size={17} />
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#07162c]/10 bg-white text-[#07162c] shadow-sm lg:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#07162c]/5 bg-[#fffaf7] px-6 pb-6 pt-4 lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-2"
            aria-label="Navegación móvil"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#384456] transition hover:bg-white hover:text-[#f72585]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-5 py-3 text-sm font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Solicitar diagnóstico
              <ArrowRight size={17} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}