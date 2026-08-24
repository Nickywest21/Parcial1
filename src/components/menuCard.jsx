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
    typeof precio === "number"
      ? `Q ${precio.toFixed(2)}`
      : precio;

  const textoAlternativo =
    alt || `Fotografía de ${nombre}`;

  const mostrarImagen =
    Boolean(imagen) && !imagenConError;

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        {mostrarImagen ? (
          <img
            src={imagen}
            alt={textoAlternativo}
            loading="lazy"
            decoding="async"
            onError={() => setImagenConError(true)}
          />
        ) : (
          <div
            className="menu-image-placeholder"
            role="img"
            aria-label={`Imagen no disponible de ${nombre}`}
          >
            <span>La Placita</span>
            <small>Imagen próximamente</small>
          </div>
        )}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-title">
          <h3>{nombre}</h3>
          <span>{precioFormateado}</span>
        </div>

        <p>{descripcion}</p>
      </div>
    </article>
  );
}

export default MenuCard;