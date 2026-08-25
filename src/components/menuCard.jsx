import { useState } from "react";

function MenuCard({
  nombre,
  descripcion,
  precio,
  imagen,
  alt
}) {
  const [imagenConError, setImagenConError] = useState(false);

  const precioFormateado =
    typeof precio === "number" ? `Q ${precio.toFixed(2)}` : precio;

  const textoAlternativo = alt || `Fotografía de ${nombre}`;
  const rutaFinal =
    imagen && !imagen.startsWith("/") && !imagen.startsWith("http")
      ? `/${imagen}`
      : imagen;

  const mostrarImagen = Boolean(rutaFinal) && !imagenConError;

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        {mostrarImagen ? (
          <img
            src={rutaFinal}
            alt={textoAlternativo}
            loading="lazy"
            decoding="async"
            onError={() => setImagenConError(true)}
          />
        ) : (
          <div
            className="menu-image-fallback"
            role="img"
            aria-label={`Ilustración representativa de ${nombre}`}
          >
            <svg
              className="menu-fallback-icon"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="32" cy="32" r="30" fill="var(--color-border)" />
              <path
                d="M18 38C18 30 24 24 32 24C40 24 46 30 46 38H18Z"
                fill="var(--color-secondary)"
              />
              <path
                d="M14 42H50V45C50 46.1 49.1 47 48 47H16C14.9 47 14 46.1 14 45V42Z"
                fill="var(--color-primary)"
              />
              <circle cx="32" cy="20" r="3" fill="var(--color-secondary)" />
              <path
                d="M26 14Q32 10 38 14"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="menu-fallback-text">La Placita</span>
            <small className="menu-fallback-subtext">Platillo Tradicional</small>
          </div>
        )}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-title">
          <h3>{nombre}</h3>
          <span className="menu-card-precio">{precioFormateado}</span>
        </div>
        <p className="menu-card-desc">{descripcion}</p>
      </div>
    </article>
  );
}

export default MenuCard;