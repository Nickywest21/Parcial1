function MenuCard({
  nombre,
  descripcion,
  precio,
  imagen,
  alt
}) {
  const precioFormateado =
    typeof precio === "number"
      ? `Q ${precio.toFixed(2)}`
      : precio;

  const textoAlternativo =
    alt || `Fotografía de ${nombre}`;

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img
          src={imagen}
          alt={textoAlternativo}
          loading="lazy"
        />
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