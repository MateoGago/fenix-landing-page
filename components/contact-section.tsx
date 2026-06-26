"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const contactEmail = "info@fenixcomercioexterior.com.ar";

const serviceOptions = [
  "Cotización general",
  "Importaciones",
  "Exportaciones",
  "Despacho aduanero",
  "Consultoría",
  "Logística internacional",
  "Asesoramiento documental",
  "Seguimiento de operaciones",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: serviceOptions[0],
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    service?: string;
    message?: string;
  }>({});

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    const newErrors: {
      name?: string;
      email?: string;
      service?: string;
      message?: string;
    } = {};

    if (!name) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!email) {
      newErrors.email = "El email es obligatorio.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Ingresá un email válido.";
    }

    if (!serviceOptions.includes(formData.service)) {
      newErrors.service = "Seleccioná un servicio válido.";
    }

    if (!message) {
      newErrors.message = "El mensaje es obligatorio.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showToast("error", "Revisá los campos marcados antes de enviar.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        message?: string;
        errors?: typeof newErrors;
      };

      if (!response.ok) {
        setErrors(result.errors ?? {});
        showToast(
          "error",
          result.message ?? "No se pudo enviar la consulta. Intentá nuevamente.",
        );
        return;
      }

      showToast(
        "success",
        "Tu solicitud fue enviada correctamente. Te contactaremos pronto.",
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        service: serviceOptions[0],
        message: "",
        website: "",
      });

      setErrors({});
    } catch {
      showToast(
        "error",
        "No se pudo enviar la consulta. Revisá tu conexión e intentá nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast("success", `${label} copiado correctamente.`);
    } catch {
      showToast("error", "No se pudo copiar la información.");
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      {toast && (
        <div
          className={`fixed right-6 top-24 z-50 max-w-sm rounded-lg border px-5 py-4 shadow-lg ${
            toast.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
          aria-live="polite"
        >
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Contacto
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Hablemos de tu proyecto
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Estamos listos para ayudarte a expandir tu negocio a nivel
              internacional. Contactanos y recibí asesoría personalizada.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      "Puerto Madryn, Chubut, Argentina",
                      "Dirección",
                    )
                  }
                  className="flex items-start gap-4 text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/15">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      Dirección
                    </h4>

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Puerto Madryn, Chubut, Argentina
                    </p>

                    <span className="mt-1 block text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Click para copiar
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard("+54 9 280 460-5206", "Teléfono")
                  }
                  className="flex items-start gap-4 text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/15">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      Teléfono
                    </h4>

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      +54 9 280 460-5206
                    </p>

                    <span className="mt-1 block text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Click para copiar
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() => copyToClipboard(contactEmail, "Email")}
                  className="flex items-start gap-4 text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/15">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      Email
                    </h4>

                    <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
                      {contactEmail}
                    </p>

                    <span className="mt-1 block text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Click para copiar
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10 rounded-lg border border-border shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nombre completo <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 text-foreground ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-input focus:ring-ring"
                  }`}
                  placeholder="Tu nombre"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 text-foreground ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-input focus:ring-ring"
                  }`}
                  placeholder="tu@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />

                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Empresa
                </label>

                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Servicio a cotizar <span className="text-red-500">*</span>
                </label>

                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    setErrors({ ...errors, service: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 text-foreground ${
                    errors.service
                      ? "border-red-500 focus:ring-red-200"
                      : "border-input focus:ring-ring"
                  }`}
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={
                    errors.service ? "service-error" : undefined
                  }
                >
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {errors.service && (
                  <p id="service-error" className="mt-2 text-sm text-red-600">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensaje <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 text-foreground resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-200"
                      : "border-input focus:ring-ring"
                  }`}
                  placeholder="Contanos sobre tu proyecto..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar cotización"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
