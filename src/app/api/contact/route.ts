import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const allowedServices = [
  "Sitio web o landing page",
  "Sistema personalizado",
  "Automatización de procesos",
  "Integración de herramientas",
  "Analítica y reportes",
  "Consultoría tecnológica",
  "Soporte o mantenimiento",
  "Todavía no estoy seguro",
] as const;

type ContactRequest = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  privacy?: unknown;

  // Campo trampa opcional para bots.
  website?: unknown;
};

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function textWithLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "La información enviada no tiene un formato válido.",
      },
      { status: 400 },
    );
  }

  const name = getString(body.name);
  const company = getString(body.company);
  const email = getString(body.email).toLowerCase();
  const phone = getString(body.phone);
  const service = getString(body.service);
  const message = getString(body.message);
  const website = getString(body.website);
  const privacyAccepted = body.privacy === true;

  /*
   * Honeypot:
   * una persona real nunca debería completar este campo.
   * Si un bot lo llena, respondemos como si todo hubiera salido bien,
   * pero no enviamos ningún correo.
   */
  if (website) {
    return NextResponse.json({
      ok: true,
      message: "Solicitud recibida correctamente.",
    });
  }

  const errors: Record<string, string> = {};

  if (name.length < 2 || name.length > 100) {
    errors.name = "El nombre debe tener entre 2 y 100 caracteres.";
  }

  if (company.length > 120) {
    errors.company =
      "El nombre del negocio no puede superar los 120 caracteres.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email) || email.length > 254) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (phone.length > 30) {
    errors.phone = "El teléfono no puede superar los 30 caracteres.";
  }

  if (!(allowedServices as readonly string[]).includes(service)) {
    errors.service = "Selecciona un servicio válido.";
  }

  if (message.length < 20 || message.length > 3000) {
    errors.message =
      "El mensaje debe tener entre 20 y 3000 caracteres.";
  }

  if (!privacyAccepted) {
    errors.privacy =
      "Debes aceptar el uso de tus datos para enviar la solicitud.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Revisa los campos del formulario.",
        errors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !contactToEmail || !contactFromEmail) {
    console.error(
      "Faltan RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL.",
    );

    return NextResponse.json(
      {
        ok: false,
        message:
          "El servicio de contacto todavía no está configurado correctamente.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const safeName = escapeHtml(name);
  const safeCompany = company ? escapeHtml(company) : "No especificado";
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "No especificado";
  const safeService = escapeHtml(service);
  const safeMessage = textWithLineBreaks(message);

  const submittedAt = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  }).format(new Date());

  try {
    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],

      /*
       * Al presionar "Responder" en tu correo,
       * la respuesta será dirigida al cliente.
       */
      replyTo: email,

      subject: `Nueva solicitud de ${name} — ${service}`,

      text: `
Nueva solicitud desde Nexora Digital

Nombre: ${name}
Negocio o empresa: ${company || "No especificado"}
Correo: ${email}
Teléfono: ${phone || "No especificado"}
Servicio: ${service}
Fecha: ${submittedAt}

Mensaje:
${message}
      `.trim(),

      html: `
        <!doctype html>
        <html lang="es">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Nueva solicitud de contacto</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 24px;
              background: #f6f7f9;
              color: #07162c;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                overflow: hidden;
                background: #ffffff;
                border: 1px solid #e8ebef;
                border-radius: 22px;
                box-shadow: 0 18px 50px rgba(7, 22, 44, 0.08);
              "
            >
              <div
                style="
                  padding: 30px;
                  background: linear-gradient(
                    135deg,
                    #07162c 0%,
                    #162844 100%
                  );
                  color: #ffffff;
                "
              >
                <p
                  style="
                    margin: 0 0 10px;
                    color: #ff9a64;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                  "
                >
                  Nexora Digital
                </p>

                <h1
                  style="
                    margin: 0;
                    font-size: 28px;
                    line-height: 1.25;
                  "
                >
                  Nueva solicitud de contacto
                </h1>

                <p
                  style="
                    margin: 12px 0 0;
                    color: rgba(255,255,255,0.65);
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  Un visitante completó el formulario de la landing page.
                </p>
              </div>

              <div style="padding: 30px;">
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    border-collapse: collapse;
                    font-size: 14px;
                    line-height: 1.6;
                  "
                >
                  <tr>
                    <td
                      style="
                        width: 180px;
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Nombre
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #07162c;
                      "
                    >
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Negocio o empresa
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                      "
                    >
                      ${safeCompany}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Correo
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                      "
                    >
                      <a
                        href="mailto:${safeEmail}"
                        style="color: #f72585;"
                      >
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Teléfono
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                      "
                    >
                      ${safePhone}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Servicio
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #eceff3;
                      "
                    >
                      ${safeService}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        color: #697487;
                        font-weight: 700;
                      "
                    >
                      Fecha
                    </td>

                    <td style="padding: 12px;">
                      ${escapeHtml(submittedAt)}
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    margin-top: 24px;
                    padding: 22px;
                    background: #fffaf7;
                    border: 1px solid #ffe1d7;
                    border-radius: 16px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 10px;
                      color: #f72585;
                      font-size: 12px;
                      font-weight: 700;
                      letter-spacing: 1px;
                      text-transform: uppercase;
                    "
                  >
                    Mensaje
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #394558;
                      font-size: 14px;
                      line-height: 1.75;
                    "
                  >
                    ${safeMessage}
                  </p>
                </div>

                <p
                  style="
                    margin: 24px 0 0;
                    color: #8b95a4;
                    font-size: 12px;
                    line-height: 1.6;
                  "
                >
                  Puedes responder directamente este correo para contactar
                  a ${safeName}.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        {
          ok: false,
          message:
            "No fue posible enviar la solicitud. Intenta nuevamente.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Tu solicitud fue enviada correctamente. Nos pondremos en contacto contigo.",
        emailId: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error inesperado al enviar el correo:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Ocurrió un error inesperado al enviar la solicitud.",
      },
      { status: 500 },
    );
  }
}