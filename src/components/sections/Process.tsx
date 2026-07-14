import {
  ArrowRight,
  Code2,
  Headphones,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Conocemos tu negocio, tus procesos, los problemas actuales y los objetivos que quieres alcanzar.",
    icon: Search,
    accent: "from-[#ff8a24] to-[#ff5a45]",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos una solución clara, viable y adaptada a las necesidades reales de tu operación.",
    icon: Lightbulb,
    accent: "from-[#ff5a45] to-[#f72585]",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Diseñamos y construimos la solución, cuidando su funcionamiento, apariencia y facilidad de uso.",
    icon: Code2,
    accent: "from-[#f72585] to-[#b83dff]",
  },
  {
    number: "04",
    title: "Implementación",
    description:
      "Probamos, configuramos y ponemos en funcionamiento la solución dentro de tu negocio.",
    icon: Rocket,
    accent: "from-[#b83dff] to-[#7457f5]",
  },
  {
    number: "05",
    title: "Acompañamiento",
    description:
      "Capacitamos a tu equipo y brindamos soporte para mantener y mejorar la solución con el tiempo.",
    icon: Headphones,
    accent: "from-[#7457f5] to-[#f72585]",
  },
] as const;

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 overflow-hidden bg-[#07162c] py-24 lg:py-32"
    >
      <div
        className="absolute -left-56 top-0 h-[500px] w-[500px] rounded-full bg-[#ff6432]/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-56 bottom-0 h-[520px] w-[520px] rounded-full bg-[#f72585]/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7457f5]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff9a64] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff8a24] to-[#f72585]" />
            Cómo trabajamos
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            De una necesidad a una solución{" "}
            <span className="bg-gradient-to-r from-[#ff9a64] via-[#ff5a74] to-[#d978ff] bg-clip-text text-transparent">
              clara y funcional
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Te acompañamos durante todo el proyecto mediante un proceso
            organizado, transparente y enfocado en los objetivos de tu negocio.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-[8%] right-[8%] top-9 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent xl:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.09]"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} shadow-lg`}
                    >
                      <Icon size={29} className="text-white" strokeWidth={2} />
                    </div>

                    <span className="text-4xl font-black text-white/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>

                  <div className="mt-auto pt-7">
                    <div
                      className={`h-1 w-14 rounded-full bg-gradient-to-r ${step.accent} transition-all duration-300 group-hover:w-24`}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff9a64]">
              Comunicación durante todo el proyecto
            </p>

            <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
              Siempre sabrás qué estamos haciendo y cuál es el siguiente paso.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-white/60">
              Cada etapa se revisa contigo antes de avanzar. Así podemos tomar
              decisiones a tiempo, evitar sorpresas y mantener el proyecto
              alineado con tus necesidades.
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-2xl lg:mt-0"
          >
            Comenzar un proyecto
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}