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
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)
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

  emailjs
    .send(
      "service_t7k24nd",
      "template_wl4joxa",
      {
        nombre: formulario.nombre,
        correo: formulario.correo,
        mensaje: formulario.mensaje,
      },
      {
        publicKey: "rPUgtQGDK4XtF1etV",
      }
    )
    .then(
      () => {
        console.log("Correo enviado correctamente");

        setEnviado(true);

        setFormulario({
          nombre: "",
          correo: "",
          mensaje: "",
        });
      },
      (error) => {
        console.error("Error al enviar el correo:", error);
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
        <div className="contact-form-card">

          <div className="contact-form-header">
            <span>CONTÁCTANOS</span>

            <h2>Escríbenos</h2>

            <p>
              Déjanos tus datos y cuéntanos cómo podemos ayudarte.
            </p>
          </div>

          <form onSubmit={manejarEnvio} noValidate>

            <div className="form-group">
              <label htmlFor="nombre">
                Nombre
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Escribe tu nombre"
                required
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
              <label htmlFor="correo">
                Correo electrónico
              </label>

              <input
                type="email"
                id="correo"
                name="correo"
                value={formulario.correo}
                onChange={manejarCambio}
                placeholder="ejemplo@correo.com"
                required
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
              <label htmlFor="mensaje">
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={manejarCambio}
                placeholder="Escribe tu pregunta o solicitud..."
                rows="5"
                required
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
              >
                Enviar mensaje
              </button>

              <button
                type="button"
                className="close-button"
                onClick={() => setMostrarFormulario(false)}
              >
                Cerrar
              </button>

            </div>

            {enviado && (
              <p
                className="form-success"
                role="status"
              >
                ✓ ¡Mensaje enviado correctamente!
              </p>
            )}

          </form>
        </div>
      )}

    </div>
  );
}

export default ContactForm;