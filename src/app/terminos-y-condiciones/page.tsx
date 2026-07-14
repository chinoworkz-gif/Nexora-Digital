import type { Metadata } from "next";
import { ArrowLeft, FileText, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso y contratación de servicios de ${siteConfig.name}.`,
};

export default function TermsAndConditionsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#fffaf7] text-[#07162c]">
      <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
        <div
          className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#ffb6c5]/30 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#ffd2ad]/35 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl">
          <Link
  href="/"
  className="inline-flex items-center gap-2 rounded-full border border-[#07162c]/10 bg-white px-4 py-2 text-sm font-bold text-[#07162c] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f72585]/30 hover:text-[#f72585]"
>
  <ArrowLeft size={17} />
  Volver al inicio
</Link>

          <div className="mt-10 rounded-[2rem] border border-[#07162c]/8 bg-white/85 p-6 shadow-[0_30px_80px_rgba(7,22,44,0.10)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f72585]/15 bg-[#fffaf7] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#f72585]">
              <FileText size={15} />
              {siteConfig.name}
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
              Términos y condiciones
            </h1>

            <p className="mt-5 leading-8 text-[#586476]">
              Estos términos y condiciones regulan el uso de este sitio web y
              la solicitud, cotización y contratación de servicios ofrecidos por{" "}
              {siteConfig.name}. Al utilizar este sitio o enviar una solicitud
              de contacto, el usuario acepta las condiciones aquí descritas.
            </p>

            <div className="mt-10 space-y-9">
              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  1. Información general
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  {siteConfig.name} ofrece servicios relacionados con diseño y
                  desarrollo de sitios web, sistemas personalizados,
                  automatización de procesos, integraciones, consultoría
                  tecnológica, analítica, reportes y acompañamiento digital para
                  negocios y empresas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  2. Uso del sitio web
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El usuario se compromete a utilizar este sitio de forma
                  responsable, lícita y sin afectar su funcionamiento,
                  disponibilidad, seguridad o contenido. Queda prohibido utilizar
                  el sitio para enviar información falsa, ofensiva, fraudulenta,
                  automatizada o que afecte a terceros.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  3. Solicitudes de información
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El envío de un formulario, mensaje por WhatsApp, correo
                  electrónico u otro medio de contacto no implica la contratación
                  automática de un servicio. Toda solicitud será revisada para
                  determinar necesidades, alcance, viabilidad, tiempos y costos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  4. Cotizaciones y propuestas
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Las cotizaciones, propuestas o estimaciones enviadas por{" "}
                  {siteConfig.name} tendrán validez únicamente durante el periodo
                  indicado en cada documento o comunicación. En caso de no
                  especificarse un periodo, la cotización podrá estar sujeta a
                  cambios según disponibilidad, alcance o nuevos requerimientos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  5. Alcance del servicio
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Cada proyecto deberá contar con un alcance definido, ya sea
                  mediante propuesta, acuerdo, contrato, correo de confirmación o
                  documento equivalente. Cualquier funcionalidad, ajuste,
                  integración o entrega no incluida expresamente en el alcance
                  podrá cotizarse por separado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  6. Obligaciones del cliente
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El cliente deberá proporcionar información, accesos,
                  contenidos, materiales, aprobaciones y retroalimentación
                  necesarios para el desarrollo del proyecto. Los retrasos en la
                  entrega de estos elementos pueden modificar los tiempos de
                  ejecución originalmente estimados.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  7. Pagos
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Las condiciones de pago, anticipos, parcialidades, fechas de
                  liquidación y métodos de pago se establecerán en cada propuesta
                  o acuerdo particular. El inicio, avance o entrega final de un
                  proyecto puede estar sujeto a la confirmación de los pagos
                  correspondientes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  8. Cambios y ajustes
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Los cambios solicitados durante el proyecto serán evaluados
                  según su complejidad, impacto en tiempos y relación con el
                  alcance original. Los ajustes menores podrán incluirse cuando
                  formen parte del acuerdo inicial; los cambios adicionales o
                  nuevos requerimientos podrán generar costos y tiempos extra.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  9. Tiempos de entrega
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Los tiempos de entrega serán estimados de acuerdo con el
                  alcance del proyecto, disponibilidad de información,
                  revisiones, aprobaciones y complejidad técnica. Las fechas
                  podrán ajustarse si existen cambios de alcance, retrasos en
                  respuestas, causas técnicas o situaciones fuera del control de{" "}
                  {siteConfig.name}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  10. Propiedad intelectual
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Los materiales, textos, marcas, logotipos, imágenes,
                  credenciales, bases de datos o contenidos proporcionados por el
                  cliente seguirán siendo propiedad de su titular. Los
                  entregables desarrollados para el cliente se regirán por las
                  condiciones acordadas en cada proyecto, incluyendo pagos,
                  licencias, accesos y alcance de uso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  11. Herramientas, servicios de terceros y licencias
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Algunos proyectos pueden requerir servicios externos como
                  hosting, dominios, correos, APIs, pasarelas de pago,
                  plataformas de automatización, herramientas de analítica,
                  repositorios u otros proveedores. Los costos, limitaciones,
                  cambios, disponibilidad y políticas de dichos terceros son
                  responsabilidad de cada proveedor correspondiente.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  12. Soporte y mantenimiento
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El soporte, mantenimiento, actualizaciones, monitoreo o
                  mejoras posteriores a la entrega deberán acordarse de forma
                  específica. Si no existe un acuerdo de mantenimiento activo,
                  cualquier atención posterior podrá cotizarse como servicio
                  adicional.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  13. Limitación de responsabilidad
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  {siteConfig.name} procurará prestar sus servicios de manera
                  profesional y responsable. Sin embargo, no será responsable por
                  fallas causadas por servicios de terceros, mal uso de sistemas,
                  modificaciones no autorizadas, pérdida de accesos, errores en
                  información proporcionada por el cliente, problemas de
                  conectividad, ataques externos o situaciones ajenas a su
                  control razonable.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  14. Cancelación o suspensión de servicios
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Un proyecto podrá pausarse, reprogramarse o cancelarse cuando
                  exista falta de información, falta de pago, cambios sustanciales
                  de alcance, falta de comunicación, uso indebido del servicio o
                  incumplimiento de las condiciones acordadas entre las partes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  15. Privacidad
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El tratamiento de datos personales se realiza conforme al Aviso
                  de privacidad disponible en este sitio. Se recomienda al usuario
                  revisar dicho aviso antes de enviar información personal a
                  través de los formularios o medios de contacto.
                </p>

                <Link
  href="/aviso-de-privacidad"
  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f72585] transition hover:text-[#ff6432]"
>
  Ver aviso de privacidad
</Link>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  16. Modificaciones a estos términos
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  {siteConfig.name} podrá actualizar estos términos y
                  condiciones en cualquier momento. Las modificaciones estarán
                  disponibles en esta misma página y serán aplicables desde su
                  publicación.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  17. Contacto
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Para dudas relacionadas con estos términos y condiciones, el
                  usuario puede comunicarse a través del siguiente correo:
                </p>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6432] to-[#f72585] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#f72585]/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Mail size={17} />
                  {siteConfig.contact.email}
                </a>
              </section>
            </div>

            <p className="mt-10 border-t border-[#07162c]/8 pt-6 text-sm text-[#697487]">
              Última actualización: {currentYear}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}