import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${siteConfig.name}.`,
};

export default function PrivacyNoticePage() {
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
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f72585]">
              {siteConfig.name}
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#07162c] sm:text-5xl">
              Aviso de privacidad
            </h1>

            <p className="mt-5 leading-8 text-[#586476]">
              En {siteConfig.name}, respetamos la privacidad de las personas que
              visitan nuestro sitio web y se comunican con nosotros a través de
              nuestros formularios, correo electrónico, WhatsApp u otros medios
              de contacto.
            </p>

            <div className="mt-10 space-y-9">
              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  1. Responsable de los datos personales
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  {siteConfig.name} es responsable del tratamiento de los datos
                  personales proporcionados por los usuarios a través de este
                  sitio web y sus canales de contacto.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  2. Datos personales que podemos recopilar
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Podemos recopilar datos como nombre, nombre de empresa o
                  negocio, correo electrónico, número telefónico, servicio de
                  interés y cualquier información adicional que el usuario
                  decida compartir en el mensaje enviado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  3. Finalidad del uso de los datos
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Los datos proporcionados serán utilizados para responder
                  solicitudes de información, dar seguimiento a mensajes,
                  preparar propuestas de servicio, establecer comunicación con
                  el usuario y brindar atención relacionada con los servicios de
                  {` ${siteConfig.name}`}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  4. Medios de contacto
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Al proporcionar sus datos, el usuario acepta que podamos
                  contactarle por correo electrónico, teléfono, WhatsApp u otro
                  medio relacionado con la solicitud enviada.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  5. Protección de la información
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Implementamos medidas razonables para proteger la información
                  recibida y evitar su uso no autorizado, pérdida, alteración o
                  divulgación indebida.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  6. Transferencia de datos
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  No vendemos, alquilamos ni compartimos los datos personales
                  con terceros para fines comerciales. La información podrá ser
                  utilizada únicamente para atender la solicitud enviada por el
                  usuario o cuando sea necesario para operar nuestros canales de
                  comunicación y servicios tecnológicos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  7. Derechos del usuario
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  El usuario puede solicitar el acceso, corrección,
                  actualización o eliminación de sus datos personales enviando
                  una solicitud al correo de contacto indicado en este aviso.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  8. Cambios al aviso de privacidad
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Este aviso de privacidad puede actualizarse en cualquier
                  momento. Las modificaciones estarán disponibles en esta misma
                  página.
                </p>
              </section>

              <section className="rounded-2xl border border-[#07162c]/8 bg-[#fffaf7] p-5">
                <h2 className="text-xl font-extrabold text-[#07162c]">
                  Contacto
                </h2>

                <p className="mt-3 leading-8 text-[#586476]">
                  Para cualquier duda relacionada con este aviso de privacidad,
                  puedes escribirnos a:
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
              Última actualización: 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}