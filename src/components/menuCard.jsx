function MenuCard({ nombre, descripcion, precio, imagen }) {
  return (
    <article className="menu-card">

      <div className="menu-card-image">
        <img
          src={imagen}
          alt={`Fotografía de ${nombre}`}
        />
      </div>

      <div className="menu-card-content">

        <div className="menu-card-title">
          <h3>{nombre}</h3>
          <span>{precio}</span>
        </div>

        <p>{descripcion}</p>

      </div>

    </article>
  );
}

export default MenuCard;