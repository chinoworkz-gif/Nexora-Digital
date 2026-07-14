import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock3,
  MessageCircle,
  MousePointerClick,
  ShoppingBag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const metrics = [
  {
    label: "Ventas del mes",
    value: "$128,540",
    variation: "+18%",
    icon: TrendingUp,
  },
  {
    label: "Nuevos clientes",
    value: "245",
    variation: "+12%",
    icon: Users,
  },
  {
    label: "Pedidos",
    value: "1,320",
    variation: "+15%",
    icon: ShoppingBag,
  },
] as const;

const activity = [
  {
    label: "Nuevo pedido",
    detail: "#1548",
    time: "Hace 2 min",
  },
  {
    label: "Pago recibido",
    detail: "$3,250",
    time: "Hace 12 min",
  },
  {
    label: "Nuevo cliente",
    detail: "TecnoLogix",
    time: "Hace 28 min",
  },
] as const;

const capabilities = [
  {
    title: "Paneles",
    description: "Datos en tiempo real",
    icon: BarChart3,
  },
  {
    title: "Automatización",
    description: "Procesos eficientes",
    icon: Zap,
  },
  {
    title: "Seguimiento",
    description: "Clientes y ventas",
    icon: MousePointerClick,
  },
] as const;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#fffaf7] pb-20 pt-12 lg:pb-24 lg:pt-16 xl:pb-28 xl:pt-20"
    >
      <div
        className="absolute -right-40 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-[#ffb6c5]/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -left-48 bottom-0 -z-10 h-[480px] w-[480px] rounded-full bg-[#ffd2ad]/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:px-8 xl:grid-cols-[0.94fr_1.06fr] xl:gap-16">
        <div>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#ff5a5f]/25 bg-white/80 px-4 py-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#ff4b5f] shadow-sm backdrop-blur">
            <Zap size={14} fill="currentColor" />
            Soluciones digitales para negocios y empresas
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] text-[#07162c] sm:text-5xl lg:text-6xl xl:text-[4.4rem]">
            Modernizamos tu negocio con tecnología{" "}
            <span className="bg-gradient-to-r from-[#f72585] via-[#ff4b47] to-[#ff8524] bg-clip-text text-transparent">
              que genera resultados
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#586476]">
            Diseñamos sitios web, sistemas y automatizaciones a la medida para
            mejorar tus procesos, fortalecer tu presencia digital y crear nuevas
            oportunidades de crecimiento.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Solicitar diagnóstico
              <ArrowRight size={18} />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dce1e8] bg-white px-7 py-4 text-sm font-bold text-[#07162c] shadow-sm transition hover:-translate-y-1 hover:border-[#25d366] hover:text-[#128c4a]"
            >
              <MessageCircle size={19} className="text-[#25d366]" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[#07162c]/8 pt-7 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#ff5a45]"
              />

              <div>
                <p className="text-sm font-bold text-[#07162c]">
                  A la medida
                </p>

                <p className="mt-1 text-xs leading-5 text-[#697487]">
                  Soluciones adaptadas a tu negocio.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp
                size={20}
                className="mt-0.5 shrink-0 text-[#ff5a45]"
              />

              <div>
                <p className="text-sm font-bold text-[#07162c]">
                  Resultados reales
                </p>

                <p className="mt-1 text-xs leading-5 text-[#697487]">
                  Tecnología con objetivos claros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3
                size={20}
                className="mt-0.5 shrink-0 text-[#ff5a45]"
              />

              <div>
                <p className="text-sm font-bold text-[#07162c]">
                  Acompañamiento
                </p>

                <p className="mt-1 text-xs leading-5 text-[#697487]">
                  Soporte durante cada etapa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl xl:max-w-2xl">
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-[#ff9759]/25 via-[#ff4f82]/15 to-[#8d4cff]/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_35px_90px_rgba(7,22,44,0.18)] backdrop-blur-xl sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#07162c]/8 bg-[#fbfcff]">
              <div className="flex items-center justify-between border-b border-[#07162c]/8 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold text-[#8992a1]">
                    Panel administrativo
                  </p>

                  <h2 className="mt-1 font-bold text-[#07162c]">
                    Resumen de tu negocio
                  </h2>
                </div>

                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5c5c]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
                </div>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-[#07162c]/6 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-[#7a8595]">
                          {metric.label}
                        </p>

                        <Icon size={15} className="text-[#ff5a45]" />
                      </div>

                      <p className="mt-3 text-xl font-extrabold text-[#07162c]">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-[11px] font-bold text-[#18a86b]">
                        {metric.variation} este mes
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 px-4 pb-4 md:grid-cols-[1.35fr_0.65fr]">
                <div className="rounded-2xl border border-[#07162c]/6 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-[#07162c]">Ventas</p>

                      <p className="mt-1 text-xs text-[#8992a1]">
                        Rendimiento de los últimos meses
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#eafaf2] px-3 py-1 text-[10px] font-bold text-[#18a86b]">
                      +18.4%
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 360 150"
                    className="mt-5 h-40 w-full"
                    role="img"
                    aria-label="Gráfica ascendente de ventas mensuales"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8b5cf6"
                          stopOpacity="0.28"
                        />

                        <stop
                          offset="100%"
                          stopColor="#8b5cf6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {[25, 55, 85, 115].map((y) => (
                      <line
                        key={y}
                        x1="15"
                        y1={y}
                        x2="345"
                        y2={y}
                        stroke="#e9edf3"
                        strokeWidth="1"
                      />
                    ))}

                    <path
                      d="M20 115 L75 88 L130 100 L185 62 L240 76 L295 42 L340 24 L340 135 L20 135 Z"
                      fill="url(#chartGradient)"
                    />

                    <path
                      d="M20 115 L75 88 L130 100 L185 62 L240 76 L295 42 L340 24"
                      fill="none"
                      stroke="#7457f5"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {[20, 75, 130, 185, 240, 295, 340].map((x, index) => {
                      const points = [115, 88, 100, 62, 76, 42, 24];

                      return (
                        <circle
                          key={x}
                          cx={x}
                          cy={points[index]}
                          r="5"
                          fill="white"
                          stroke="#7457f5"
                          strokeWidth="3"
                        />
                      );
                    })}
                  </svg>

                  <div className="flex justify-between px-1 text-[10px] font-semibold text-[#98a1af]">
                    <span>Ene</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Abr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#07162c]/6 bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#07162c]">
                    Canales de venta
                  </p>

                  <p className="mt-1 text-xs text-[#8992a1]">
                    Distribución de clientes
                  </p>

                  <div className="mt-6 flex justify-center">
                    <div
                      className="relative flex h-32 w-32 items-center justify-center rounded-full"
                      style={{
                        background:
                          "conic-gradient(#7457f5 0deg 234deg, #14b8a6 234deg 300deg, #ff725e 300deg 335deg, #f2b84b 335deg 360deg)",
                      }}
                    >
                      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
                        <span className="text-2xl font-extrabold text-[#07162c]">
                          65%
                        </span>

                        <span className="text-[9px] font-semibold text-[#98a1af]">
                          Sitio web
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 text-[10px] font-semibold text-[#697487]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#7457f5]" />
                        Sitio web
                      </span>

                      <span>65%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                        WhatsApp
                      </span>

                      <span>18%</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff725e]" />
                        Redes
                      </span>

                      <span>12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div
                    key={capability.title}
                    className="flex items-center gap-3 rounded-2xl border border-[#07162c]/6 bg-white p-3 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff0eb] to-[#ffe8f1] text-[#f72585]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-[#07162c]">
                        {capability.title}
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#8992a1]">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute top-24 hidden w-52 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur 2xl:-right-20 2xl:block">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-[#07162c]">
                Actividad reciente
              </p>

              <span className="h-2 w-2 rounded-full bg-[#18a86b]" />
            </div>

            <div className="mt-4 space-y-4">
              {activity.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff0eb]">
                    <Check size={13} className="text-[#ff5a45]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-bold text-[#07162c]">
                      {item.label}
                    </p>

                    <p className="text-[9px] text-[#18a86b]">
                      {item.detail}
                    </p>
                  </div>

                  <p className="text-[8px] text-[#9ba4b2]">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}