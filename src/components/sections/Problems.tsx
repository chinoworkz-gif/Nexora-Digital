import {
  ArrowRight,
  BarChart3,
  Clock3,
  Files,
  Globe2,
  MessageSquare,
  Unplug,
} from "lucide-react";

const problems = [
  {
    title: "Procesos manuales",
    description:
      "Tareas repetitivas que consumen tiempo, aumentan los errores y limitan la productividad de tu equipo.",
    icon: Clock3,
    number: "01",
    accent: "from-[#ff7138] to-[#ff4d61]",
    background: "from-[#fff2e9] to-[#ffecef]",
  },
  {
    title: "Información dispersa",
    description:
      "Datos repartidos entre archivos, mensajes y diferentes plataformas que dificultan el control del negocio.",
    icon: Files,
    number: "02",
    accent: "from-[#f72585] to-[#b83dff]",
    background: "from-[#ffeaf3] to-[#f4ebff]",
  },
  {
    title: "Poca presencia digital",
    description:
      "Una imagen digital débil puede reducir la confianza y hacer que tus clientes elijan a la competencia.",
    icon: Globe2,
    number: "03",
    accent: "from-[#ff8a24] to-[#f72585]",
    background: "from-[#fff2df] to-[#ffe9f2]",
  },
  {
    title: "Falta de control",
    description:
      "No contar con indicadores claros dificulta conocer lo que ocurre y tomar decisiones con seguridad.",
    icon: BarChart3,
    number: "04",
    accent: "from-[#7457f5] to-[#f72585]",
    background: "from-[#eeebff] to-[#ffe9f2]",
  },
  {
    title: "Atención lenta",
    description:
      "Respuestas tardías y seguimientos incompletos pueden provocar la pérdida de clientes y oportunidades.",
    icon: MessageSquare,
    number: "05",
    accent: "from-[#ff5e49] to-[#ff9a32]",
    background: "from-[#ffebe7] to-[#fff1df]",
  },
  {
    title: "Herramientas desconectadas",
    description:
      "Utilizar sistemas que no comparten información obliga a duplicar trabajo y genera inconsistencias.",
    icon: Unplug,
    number: "06",
    accent: "from-[#d83df5] to-[#ff5a45]",
    background: "from-[#f8e8ff] to-[#ffebe7]",
  },
] as const;

export default function Problems() {
  return (
    <section
      id="problemas"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffaf7] py-24 lg:py-32"
    >
      <div
        className="absolute -left-44 top-28 h-[420px] w-[420px] rounded-full bg-[#ffb089]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-52 bottom-0 h-[460px] w-[460px] rounded-full bg-[#f72585]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff4d61] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6432] to-[#f72585]" />
              Problemas que resolvemos
            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
              La tecnología debe facilitar tu trabajo,{" "}
              <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
                no complicarlo
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-[#647084] lg:justify-self-end">
            Detectamos los obstáculos que frenan tu operación y diseñamos
            soluciones digitales que aportan orden, control y nuevas
            oportunidades de crecimiento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#07162c]/8 bg-white p-7 shadow-[0_18px_60px_rgba(7,22,44,0.06)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(7,22,44,0.12)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${problem.accent}`}
                  aria-hidden="true"
                />

                <span
                  className="absolute right-6 top-5 text-5xl font-black text-[#07162c]/5"
                  aria-hidden="true"
                >
                  {problem.number}
                </span>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.background}`}
                >
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-[#f72585]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#07162c]">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667285]">
                  {problem.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#f72585]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff6432]" />
                  Existe una forma más eficiente
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#07162c]/8 bg-white shadow-[0_25px_80px_rgba(7,22,44,0.09)] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative overflow-hidden bg-[#07162c] p-8 text-white sm:p-10 lg:p-12">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#f72585]/30 blur-3xl"
              aria-hidden="true"
            />

            <p className="relative text-sm font-bold uppercase tracking-[0.15em] text-[#ff9a64]">
              El primer paso
            </p>

            <h3 className="relative mt-4 text-3xl font-extrabold tracking-tight">
              Entender lo que realmente necesita tu negocio.
            </h3>

            <p className="relative mt-4 leading-7 text-white/65">
              Antes de proponer tecnología, analizamos tus procesos, objetivos
              y principales dificultades.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-7 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-extrabold text-[#07162c]">
                No necesitas saber qué sistema comprar.
              </h3>

              <p className="mt-3 leading-7 text-[#647084]">
                Cuéntanos qué problema estás enfrentando y te ayudaremos a
                encontrar una solución clara, viable y adaptada a tu situación.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Analizar mi situación
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}