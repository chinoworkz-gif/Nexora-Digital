import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  LayoutDashboard,
  Rocket,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    title: "Presencia digital",
    subtitle: "Para comenzar o renovar tu imagen en internet",
    description:
      "Ideal para negocios que necesitan presentarse profesionalmente, generar confianza y facilitar que nuevos clientes los encuentren.",
    icon: Globe2,
    features: [
      "Landing page o sitio corporativo",
      "Diseño adaptable a celulares",
      "Formularios de contacto",
      "Integración con WhatsApp",
      "Configuración básica para buscadores",
    ],
    accent: "from-[#ff8a24] to-[#ff5a45]",
    iconBackground: "from-[#fff0df] to-[#ffe9e5]",
    iconColor: "text-[#ff6432]",
    buttonText: "Fortalecer mi presencia",
    featured: false,
  },
  {
    title: "Digitalización",
    subtitle: "Para organizar procesos e información",
    description:
      "Pensada para negocios que quieren abandonar procesos manuales, centralizar datos y tener mayor control de su operación.",
    icon: LayoutDashboard,
    features: [
      "Sistema administrativo personalizado",
      "Control de clientes y operaciones",
      "Gestión de ventas o inventarios",
      "Reportes e indicadores básicos",
      "Capacitación para el equipo",
    ],
    accent: "from-[#f72585] to-[#b83dff]",
    iconBackground: "from-[#ffe8f2] to-[#f2eaff]",
    iconColor: "text-[#f72585]",
    buttonText: "Digitalizar mi negocio",
    featured: true,
  },
  {
    title: "Crecimiento",
    subtitle: "Para automatizar, integrar y escalar",
    description:
      "Para negocios que ya utilizan herramientas digitales y necesitan conectarlas, automatizar procesos y prepararse para crecer.",
    icon: Rocket,
    features: [
      "Automatización de procesos",
      "Integraciones entre plataformas",
      "Paneles e indicadores personalizados",
      "Sistemas y módulos a la medida",
      "Soporte y mejora continua",
    ],
    accent: "from-[#7457f5] to-[#f72585]",
    iconBackground: "from-[#eeebff] to-[#ffe8f2]",
    iconColor: "text-[#7457f5]",
    buttonText: "Preparar mi crecimiento",
    featured: false,
  },
] as const;

export default function Solutions() {
  return (
    <section
      id="soluciones"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffaf7] py-24 lg:py-32"
    >
      <div
        className="absolute -left-48 top-28 h-[440px] w-[440px] rounded-full bg-[#ffae82]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#f72585]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff4d61] shadow-sm">
            <Sparkles size={15} />
            Soluciones para cada etapa
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
            Tecnología adaptada al momento{" "}
            <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
              actual de tu negocio
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647084]">
            No todos los negocios necesitan lo mismo. Identificamos tu punto de
            partida y construimos una solución alineada con tus necesidades,
            objetivos y posibilidades.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-7 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-2 sm:p-8 ${
                  solution.featured
                    ? "border-[#f72585]/25 bg-[#07162c] shadow-[0_30px_90px_rgba(7,22,44,0.22)]"
                    : "border-[#07162c]/8 bg-white shadow-[0_20px_65px_rgba(7,22,44,0.08)] hover:shadow-[0_28px_85px_rgba(7,22,44,0.14)]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${solution.accent}`}
                  aria-hidden="true"
                />

                {solution.featured && (
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-[#ff6432] to-[#f72585] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg">
                    Más solicitada
                  </div>
                )}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.iconBackground}`}
                >
                  <Icon
                    size={29}
                    strokeWidth={2}
                    className={solution.iconColor}
                  />
                </div>

                <p
                  className={`mt-7 text-xs font-bold uppercase tracking-[0.14em] ${
                    solution.featured
                      ? "text-[#ff9a64]"
                      : "text-[#f72585]"
                  }`}
                >
                  {solution.subtitle}
                </p>

                <h3
                  className={`mt-3 text-3xl font-extrabold tracking-tight ${
                    solution.featured ? "text-white" : "text-[#07162c]"
                  }`}
                >
                  {solution.title}
                </h3>

                <p
                  className={`mt-4 min-h-28 text-sm leading-7 ${
                    solution.featured ? "text-white/60" : "text-[#667285]"
                  }`}
                >
                  {solution.description}
                </p>

                <div
                  className={`my-7 h-px ${
                    solution.featured ? "bg-white/10" : "bg-[#07162c]/8"
                  }`}
                />

                <p
                  className={`text-sm font-extrabold ${
                    solution.featured ? "text-white" : "text-[#07162c]"
                  }`}
                >
                  Puede incluir:
                </p>

                <ul className="mt-5 space-y-4">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-sm font-medium ${
                        solution.featured
                          ? "text-white/70"
                          : "text-[#3d495c]"
                      }`}
                    >
                      <CheckCircle2
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          solution.featured
                            ? "text-[#ff7a55]"
                            : "text-[#ff5a45]"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div
                    className={`mb-5 rounded-xl px-4 py-3 text-center text-xs font-bold ${
                      solution.featured
                        ? "border border-white/10 bg-white/5 text-white/70"
                        : "border border-[#07162c]/8 bg-[#fffaf7] text-[#697487]"
                    }`}
                  >
                    Cotización personalizada
                  </div>

                  <a
                    href="#contacto"
                    className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition hover:-translate-y-1 ${
                      solution.featured
                        ? "bg-gradient-to-r from-[#ff6432] to-[#f72585] text-white shadow-xl shadow-[#f72585]/20"
                        : "border border-[#07162c]/10 bg-white text-[#07162c] shadow-sm hover:border-[#f72585]/40 hover:text-[#f72585] hover:shadow-lg"
                    }`}
                    aria-label={`${solution.buttonText}: ${solution.title}`}
                  >
                    {solution.buttonText}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#07162c]/8 bg-white shadow-[0_25px_80px_rgba(7,22,44,0.09)] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#f72585]">
              Una solución realmente personalizada
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-[#07162c]">
              Podemos combinar servicios de diferentes soluciones.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-[#647084]">
              Estas opciones funcionan como una guía. Después del diagnóstico,
              seleccionamos únicamente las herramientas que aporten valor a tu
              negocio, sin agregar funciones innecesarias.
            </p>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#ff6a32] via-[#ff4f62] to-[#f72585] p-8 text-white sm:p-10 lg:p-12">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl"
              aria-hidden="true"
            />

            <p className="relative text-sm font-bold uppercase tracking-[0.14em] text-white/70">
              ¿No sabes cuál elegir?
            </p>

            <h3 className="relative mt-3 text-2xl font-extrabold">
              Nosotros te ayudamos a definirla.
            </h3>

            <a
              href="#contacto"
              className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#f72585] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Solicitar orientación
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}