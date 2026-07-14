import {
  ArrowRight,
  Headphones,
  MessageCircleMore,
  Puzzle,
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Soluciones a la medida",
    description:
      "Diseñamos cada proyecto de acuerdo con tus procesos, objetivos y forma de trabajar, sin obligarte a adaptarte a una herramienta genérica.",
    icon: Puzzle,
    accent: "from-[#ff8a24] to-[#ff5a45]",
    background: "from-[#fff1df] to-[#ffeae5]",
    iconColor: "text-[#ff6432]",
  },
  {
    title: "Comunicación clara",
    description:
      "Explicamos cada decisión de manera sencilla y mantenemos una comunicación constante durante todas las etapas del proyecto.",
    icon: MessageCircleMore,
    accent: "from-[#ff5a45] to-[#f72585]",
    background: "from-[#ffece8] to-[#ffe8f2]",
    iconColor: "text-[#f72585]",
  },
  {
    title: "Tecnología escalable",
    description:
      "Construimos soluciones preparadas para evolucionar, agregar funciones y acompañar el crecimiento futuro de tu negocio.",
    icon: TrendingUp,
    accent: "from-[#f72585] to-[#b83dff]",
    background: "from-[#ffe8f2] to-[#f4eaff]",
    iconColor: "text-[#b83dff]",
  },
  {
    title: "Implementación responsable",
    description:
      "Antes de poner una solución en funcionamiento, revisamos su desempeño, facilidad de uso y adaptación a la operación real.",
    icon: ShieldCheck,
    accent: "from-[#7457f5] to-[#f72585]",
    background: "from-[#eeebff] to-[#ffe8f2]",
    iconColor: "text-[#7457f5]",
  },
  {
    title: "Inversión con propósito",
    description:
      "Priorizamos las funciones que realmente aportan valor para evitar costos innecesarios y soluciones más complejas de lo requerido.",
    icon: Scale,
    accent: "from-[#ff6a42] to-[#ff9a32]",
    background: "from-[#ffebe7] to-[#fff2df]",
    iconColor: "text-[#ff6942]",
  },
  {
    title: "Acompañamiento continuo",
    description:
      "Después de la implementación, podemos ayudarte con soporte, capacitación, mantenimiento y mejoras posteriores.",
    icon: Headphones,
    accent: "from-[#d83df5] to-[#ff5a45]",
    background: "from-[#f8e8ff] to-[#ffebe7]",
    iconColor: "text-[#d44be8]",
  },
] as const;

const commitments = [
  "Entendemos el problema antes de proponer tecnología.",
  "Trabajamos por etapas para mantener el proyecto bajo control.",
  "Diseñamos experiencias fáciles de utilizar.",
  "Documentamos las decisiones y elementos importantes.",
] as const;

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div
        className="absolute -left-52 top-20 h-[460px] w-[460px] rounded-full bg-[#ffad83]/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-56 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f72585]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/20 bg-[#fff8f5] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff4d61]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6432] to-[#f72585]" />
              Beneficios de trabajar con Nexora
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
              Tecnología pensada para aportar{" "}
              <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
                valor real a tu negocio
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#647084] lg:justify-self-end">
            No se trata solamente de implementar herramientas. Buscamos crear
            soluciones comprensibles, útiles y preparadas para acompañar la
            evolución de tu operación.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#07162c]/8 bg-white p-7 shadow-[0_18px_60px_rgba(7,22,44,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_85px_rgba(7,22,44,0.13)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${benefit.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.background}`}
                >
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className={benefit.iconColor}
                  />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#07162c]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667285]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#07162c] shadow-[0_30px_90px_rgba(7,22,44,0.22)]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div
                className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ff6432]/20 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-[#f72585]/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff9a64]">
                  Nuestro compromiso
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Una relación de trabajo clara, cercana y profesional.
                </h3>

                <p className="mt-5 max-w-2xl leading-7 text-white/60">
                  Queremos que comprendas la solución que estás adquiriendo,
                  por qué se está construyendo y cómo ayudará a mejorar tu
                  negocio.
                </p>

                <a
                  href="#contacto"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Hablar sobre mi proyecto
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.05] p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/45">
                Cómo cuidamos cada proyecto
              </p>

              <ul className="mt-7 space-y-5">
                {commitments.map((commitment, index) => (
                  <li
                    key={commitment}
                    className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.05] p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6432] to-[#f72585] text-xs font-extrabold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="pt-1 text-sm font-semibold leading-6 text-white/75">
                      {commitment}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}