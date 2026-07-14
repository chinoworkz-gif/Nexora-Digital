import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Headphones,
  LayoutDashboard,
  Monitor,
  Plug,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Sitios web",
    description:
      "Creamos experiencias digitales modernas para presentar tu negocio, generar confianza y convertir visitantes en clientes.",
    icon: Monitor,
    features: [
      "Landing pages y sitios corporativos",
      "Diseño adaptable a celulares",
      "Integración con formularios y WhatsApp",
    ],
    accent: "from-[#ff7438] to-[#ff4f61]",
    iconBackground: "from-[#fff0e8] to-[#ffe8eb]",
  },
  {
    title: "Sistemas personalizados",
    description:
      "Desarrollamos herramientas adaptadas a tu operación para organizar información y tener mayor control del negocio.",
    icon: LayoutDashboard,
    features: [
      "Paneles administrativos",
      "Control de ventas e inventarios",
      "Gestión de clientes y operaciones",
    ],
    accent: "from-[#f72585] to-[#b83dff]",
    iconBackground: "from-[#ffe8f2] to-[#f3e9ff]",
  },
  {
    title: "Automatización",
    description:
      "Transformamos tareas repetitivas en procesos automáticos para reducir errores y ahorrar tiempo.",
    icon: Workflow,
    features: [
      "Notificaciones automáticas",
      "Generación de reportes",
      "Seguimiento de clientes y solicitudes",
    ],
    accent: "from-[#ff8a24] to-[#f72585]",
    iconBackground: "from-[#fff1df] to-[#ffe8f2]",
  },
  {
    title: "Integraciones",
    description:
      "Conectamos las herramientas que ya utiliza tu negocio para que la información fluya sin duplicar trabajo.",
    icon: Plug,
    features: [
      "Conexión entre plataformas",
      "Sincronización de información",
      "Integración con servicios externos",
    ],
    accent: "from-[#7457f5] to-[#f72585]",
    iconBackground: "from-[#eeebff] to-[#ffe8f2]",
  },
  {
    title: "Analítica y reportes",
    description:
      "Convertimos tus datos en indicadores claros que te ayuden a entender lo que ocurre y tomar mejores decisiones.",
    icon: BarChart3,
    features: [
      "Indicadores de rendimiento",
      "Gráficas y reportes personalizados",
      "Información centralizada",
    ],
    accent: "from-[#ff5e49] to-[#ff9a32]",
    iconBackground: "from-[#ffebe7] to-[#fff1df]",
  },
  {
    title: "Consultoría y soporte",
    description:
      "Analizamos tus necesidades, proponemos soluciones y te acompañamos durante la implementación y mejora continua.",
    icon: Headphones,
    features: [
      "Diagnóstico tecnológico",
      "Capacitación y acompañamiento",
      "Mantenimiento y soporte",
    ],
    accent: "from-[#d83df5] to-[#ff5a45]",
    iconBackground: "from-[#f8e8ff] to-[#ffebe7]",
  },
] as const;

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ffb49a]/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -right-48 bottom-10 h-[420px] w-[420px] rounded-full bg-[#f72585]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a5f]/20 bg-[#fff8f5] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#ff4d61]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#ff6432] to-[#f72585]" />
            Nuestros servicios
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] text-[#07162c] sm:text-5xl">
            Soluciones digitales para{" "}
            <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
              hacer avanzar tu negocio
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#647084]">
            Combinamos estrategia, diseño y desarrollo para resolver problemas
            reales, mejorar procesos y crear nuevas oportunidades de
            crecimiento.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#07162c]/8 bg-white p-7 shadow-[0_18px_60px_rgba(7,22,44,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(7,22,44,0.13)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.iconBackground}`}
                >
                  <Icon
                    size={26}
                    strokeWidth={2}
                    className="text-[#f72585]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#07162c]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-[#667285]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-medium text-[#394558]"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#ff5a45]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f72585] transition-all group-hover:gap-3"
                  aria-label={`Consultar servicio de ${service.title}`}
                >
                  Consultar este servicio
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] bg-[#07162c] px-7 py-9 shadow-[0_25px_80px_rgba(7,22,44,0.22)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff9a64]">
              ¿No encuentras exactamente lo que necesitas?
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Cada negocio tiene necesidades diferentes.
            </h3>

            <p className="mt-3 leading-7 text-white/65">
              Analizamos tu situación y diseñamos una solución tecnológica
              adaptada a tus procesos, objetivos y posibilidades.
            </p>
          </div>

          <a
            href="#contacto"
            className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-xl lg:mt-0"
          >
            Cuéntanos tu proyecto
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}