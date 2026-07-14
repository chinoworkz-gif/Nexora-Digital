"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/config/site";


const contactMethods = [
  {
    title: "WhatsApp",
    description: "Conversemos directamente sobre tu proyecto.",
    value: siteConfig.contact.whatsappDisplay,
    icon: MessageCircle,
    href: siteConfig.contact.whatsappUrl,
  },
  {
    title: "Correo electrónico",
    description: "Envíanos la información de tu proyecto.",
    value: siteConfig.contact.email,
    icon: Mail,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    title: "Área de atención",
    description: "Podemos trabajar contigo de manera remota.",
    value: siteConfig.contact.serviceArea,
    icon: MapPin,
    href: null,
  },
] as const;

const projectServices = [
  "Sitio web o landing page",
  "Sistema personalizado",
  "Automatización de procesos",
  "Integración de herramientas",
  "Analítica y reportes",
  "Consultoría tecnológica",
  "Soporte o mantenimiento",
  "Todavía no estoy seguro",
] as const;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          privacy: formData.get("privacy") === "on",

          // Campo trampa para bots. Debe llegar vacío.
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "No fue posible enviar la solicitud.",
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        result.message ?? "Tu solicitud fue enviada correctamente.",
      );

      form.reset();
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado al enviar la solicitud.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffaf7] py-24 lg:py-32"
    >
      <div
        className="absolute -left-48 top-10 h-[460px] w-[460px] rounded-full bg-[#ffad83]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-56 bottom-0 h-[520px] w-[520px] rounded-full bg-[#f72585]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff4d61] shadow-sm">
            <MessageCircle size={15} />
            Hablemos de tu proyecto
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
            Cuéntanos qué necesita tu negocio y encontremos una{" "}
            <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
              solución adecuada
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647084]">
            No necesitas tener definida la solución técnica. Explícanos el
            problema, el proceso que quieres mejorar o la idea que deseas
            desarrollar.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.25rem] border border-[#07162c]/8 bg-white shadow-[0_35px_100px_rgba(7,22,44,0.13)]">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-[#07162c] p-8 text-white sm:p-10 lg:p-12">
              <div
                className="absolute -left-32 -top-28 h-80 w-80 rounded-full bg-[#ff6432]/25 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-36 -right-24 h-96 w-96 rounded-full bg-[#f72585]/25 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff9a64]">
                  Contacto directo
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl">
                  El primer paso es entender tu situación.
                </h3>

                <p className="mt-5 max-w-md leading-7 text-white/60">
                  Revisaremos tu necesidad para determinar qué tipo de solución
                  puede ayudarte y cuáles serían los siguientes pasos.
                </p>

                <div className="mt-10 space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;

                    const content = (
                      <>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#ff9a64]">
                          <Icon size={22} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">
                            {method.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-white/45">
                            {method.description}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-white/80">
                            {method.value}
                          </p>
                        </div>
                      </>
                    );

                    if (method.href) {
                      return (
                        <a
                          key={method.title}
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={method.title}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Clock3
                      size={19}
                      className="mt-0.5 shrink-0 text-[#ff9a64]"
                    />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Atención personalizada
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        Revisamos cada solicitud de manera individual.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-[#ff9a64]"
                    />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Información protegida
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        Tus datos se utilizarán únicamente para contactarte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#f72585]">
                  Solicita una orientación inicial
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-[#07162c] sm:text-3xl">
                  Cuéntanos sobre tu proyecto
                </h3>

                <p className="mt-3 leading-7 text-[#647084]">
                  Completa la información que conozcas. Los campos marcados con
                  un asterisco son obligatorios.
                </p>
              </div>

              <form className="mt-9" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-[#07162c]"
                    >
                      Nombre completo *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Escribe tu nombre"
                      className="mt-2.5 w-full rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm text-[#07162c] outline-none transition placeholder:text-[#9aa3b1] focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-bold text-[#07162c]"
                    >
                      Negocio o empresa
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Nombre de tu negocio"
                      className="mt-2.5 w-full rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm text-[#07162c] outline-none transition placeholder:text-[#9aa3b1] focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-[#07162c]"
                    >
                      Correo electrónico *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="nombre@correo.com"
                      className="mt-2.5 w-full rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm text-[#07162c] outline-none transition placeholder:text-[#9aa3b1] focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-[#07162c]"
                    >
                      Teléfono
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+52 000 000 0000"
                      className="mt-2.5 w-full rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm text-[#07162c] outline-none transition placeholder:text-[#9aa3b1] focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-[#07162c]"
                  >
                    ¿En qué podemos ayudarte? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-2.5 w-full rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm text-[#07162c] outline-none transition focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    {projectServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-[#07162c]"
                  >
                    Cuéntanos sobre tu necesidad *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={20}
                    rows={6}
                    placeholder="Describe brevemente el problema que quieres resolver, el proceso que deseas mejorar o la idea que quieres desarrollar."
                    className="mt-2.5 w-full resize-none rounded-xl border border-[#07162c]/10 bg-[#fffdfb] px-4 py-3.5 text-sm leading-7 text-[#07162c] outline-none transition placeholder:text-[#9aa3b1] focus:border-[#f72585]/50 focus:bg-white focus:ring-4 focus:ring-[#f72585]/10"
                  />
                </div>

                <label className="mt-6 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#f72585]"
                  />

                  <span className="text-xs leading-6 text-[#697487]">
                    Acepto que Nexora utilice mis datos para responder esta
                    solicitud. *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Enviando solicitud..." : "Enviar solicitud"}
                  <Send size={18} />
                </button>

                {submitStatus !== "idle" && (
                  <div
                    className={`mt-5 flex items-start gap-3 rounded-xl border p-4 ${
                      submitStatus === "success"
                        ? "border-green-500/20 bg-green-50 text-green-800"
                        : "border-red-500/20 bg-red-50 text-red-800"
                    }`}
                    role={submitStatus === "success" ? "status" : "alert"}
                  >
                    <CheckCircle2
                      size={19}
                      className={`mt-0.5 shrink-0 ${
                        submitStatus === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />

                    <p className="text-sm leading-6">{submitMessage}</p>
                  </div>
                )}

                <p className="mt-4 text-center text-xs leading-5 text-[#8b95a4]">
                  Tus datos no se compartirán con terceros ni se utilizarán
                  para enviar publicidad no solicitada.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-[#07162c]/8 bg-white px-7 py-8 shadow-[0_20px_60px_rgba(7,22,44,0.07)] sm:px-10 lg:flex-row">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f72585]">
              ¿Prefieres una conversación rápida?
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-[#07162c]">
              Escríbenos directamente por WhatsApp.
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#647084]">
              Explícanos brevemente qué necesitas y continuamos la conversación
              desde ahí.
            </p>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#25d366]/20 transition hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl"
          >
            <MessageCircle size={19} />
            Abrir WhatsApp
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}