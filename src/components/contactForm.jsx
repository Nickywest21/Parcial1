import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState("");

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });

    setErrores({
      ...errores,
      [name]: "",
    });

    setEnviado(false);
    setErrorEnvio("");
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo.trim())
    ) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (formulario.mensaje.trim().length < 15) {
      nuevosErrores.mensaje =
        "El mensaje debe tener al menos 15 caracteres.";
    }

    return nuevosErrores;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    setErrorEnvio("");
    setEnviando(true);

    emailjs
      .send(
        "service_t7k24nd",
        "template_wl4joxa",
        {
          nombre: formulario.nombre.trim(),
          correo: formulario.correo.trim(),
          mensaje: formulario.mensaje.trim(),
        },
        {
          publicKey: "rPUgtQGDK4XtF1etV",
        }
      )
      .then(
        () => {
          setEnviado(true);
          setEnviando(false);
          setFormulario({
            nombre: "",
            correo: "",
            mensaje: "",
          });
        },
        (error) => {
          console.error("Fallo de red al enviar el correo:", error);
          setErrorEnvio(
            "No hay conexión a internet o el servicio no está disponible. Revisa tu red e intenta de nuevo."
          );
          setEnviando(false);
        }
      );
  };

  return (
    <div className="contact-form-wrapper">
      {!mostrarFormulario ? (
        <button
          type="button"
          className="contact-button"
          onClick={() => setMostrarFormulario(true)}
        >
          Contáctanos
        </button>
      ) : (
        <div
          className="contact-form-card"
          role="region"
          aria-labelledby="form-titulo"
        >
          <div className="contact-form-header">
            <span>CONTÁCTANOS</span>
            <h2 id="form-titulo">Escríbenos</h2>
            <p>
              Déjanos tus datos y cuéntanos cómo podemos ayudarte.
            </p>
          </div>

          <form onSubmit={manejarEnvio} noValidate>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Escribe tu nombre"
                required
                disabled={enviando}
                aria-invalid={!!errores.nombre}
                aria-describedby={
                  errores.nombre ? "error-nombre" : undefined
                }
              />
              {errores.nombre && (
                <span
                  id="error-nombre"
                  className="form-error"
                  role="alert"
                >
                  {errores.nombre}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
                placeholder="ejemplo@correo.com"
                required
                disabled={enviando}
                aria-invalid={!!errores.correo}
                aria-describedby={
                  errores.correo ? "error-correo" : undefined
                }
              />
              {errores.correo && (
                <span
                  id="error-correo"
                  className="form-error"
                  role="alert"
                >
                  {errores.correo}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Escribe tu pregunta o solicitud..."
                rows="5"
                required
                disabled={enviando}
                minLength={15}
                aria-invalid={!!errores.mensaje}
                aria-describedby={
                  errores.mensaje ? "error-mensaje" : undefined
                }
              />
              {errores.mensaje && (
                <span
                  id="error-mensaje"
                  className="form-error"
                  role="alert"
                >
                  {errores.mensaje}
                </span>
              )}
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Enviar mensaje"}
              </button>

              <button
                type="button"
                className="close-button"
                disabled={enviando}
                onClick={() => setMostrarFormulario(false)}
              >
                Cerrar
              </button>
            </div>

            {enviado && (
              <p className="form-success" role="status">
                ✓ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
              </p>
            )}

            {errorEnvio && (
              <div className="form-alert-error" role="alert">
                <span>✕</span>
                <span>{errorEnvio}</span>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactForm;