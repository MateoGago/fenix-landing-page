"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    const newErrors: {
      name?: string;
      email?: string;
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

    if (!message) {
      newErrors.message = "El mensaje es obligatorio.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setToast({
        type: "error",
        message: "Revisá los campos marcados antes de enviar.",
      });
      return;
    }

    setToast({
      type: "success",
      message:
        "Tu consulta fue enviada correctamente. Te contactaremos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setErrors({});

    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setToast({
        type: "success",
        message: `${label} copiado correctamente.`,
      });

      setTimeout(() => {
        setToast(null);
      }, 2500);
    } catch {
      setToast({
        type: "error",
        message: "No se pudo copiar la información.",
      });
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
        >
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
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
                  onClick={() =>
                    copyToClipboard(
                      "alegago@fenixcomercioexterior.com.ar",
                      "Email",
                    )
                  }
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
                      alegago@fenixcomercioexterior.com.ar
                    </p>

                    <span className="mt-1 block text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Click para copiar
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card p-8 lg:p-10 rounded-lg border border-border shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
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
                  type="text"
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
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
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
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Enviar mensaje
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
