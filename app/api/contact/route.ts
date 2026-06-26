import { NextResponse } from "next/server";

const recipientEmail = "info@fenixcomercioexterior.com.ar";

const serviceOptions = new Set([
  "Cotización general",
  "Importaciones",
  "Exportaciones",
  "Despacho aduanero",
  "Consultoría",
  "Logística internacional",
  "Asesoramiento documental",
  "Seguimiento de operaciones",
]);

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
}

function getField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "La solicitud no tiene un formato válido." },
      { status: 400 },
    );
  }

  const website = getField(payload.website, 200);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const name = getField(payload.name, 120);
  const email = getField(payload.email, 160);
  const company = getField(payload.company, 120);
  const service = getField(payload.service, 80) || "Cotización general";
  const message = getField(payload.message, 3000);

  const errors: Record<string, string> = {};

  if (!name) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!email) {
    errors.email = "El email es obligatorio.";
  } else if (!isValidEmail(email)) {
    errors.email = "Ingresá un email válido.";
  }

  if (!serviceOptions.has(service)) {
    errors.service = "Seleccioná un servicio válido.";
  }

  if (!message) {
    errors.message = "El mensaje es obligatorio.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { message: "Revisá los campos marcados antes de enviar.", errors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ??
    "Fenix Comercio Exterior <info@fenixcomercioexterior.com.ar>";

  if (!apiKey) {
    return NextResponse.json(
      { message: "El envío de emails no está configurado." },
      { status: 500 },
    );
  }

  const text = [
    `Servicio: ${service}`,
    `Nombre: ${name}`,
    `Email: ${email}`,
    company ? `Empresa: ${company}` : null,
    "",
    "Mensaje:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>Nueva solicitud de cotización</h2>
    <p><strong>Servicio:</strong> ${escapeHtml(service)}</p>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${
      company
        ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>`
        : ""
    }
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: `Solicitud de cotización - ${service}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    console.error("Resend email failed", await response.text());

    return NextResponse.json(
      { message: "No se pudo enviar la consulta. Intentá nuevamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
