import { useState } from 'react';

function MenuCard({ nombre, descripcion, precio, imagen, alt }) {
  const [errorImagen, setErrorImagen] = useState(false);

  // Imagen generica de respaldo en formato SVG en caso de que la foto no exista
  const imagenRespaldo =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23e2d9cc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%237a6f5d">Platillo La Placita</text></svg>';

  return (
    <article className="menu-card">
      <div className="menu-card-img-container">
        <img
          src={errorImagen || !imagen ? imagenRespaldo : imagen}
          alt={alt || nombre}
          className="menu-card-img"
          onError={() => setErrorImagen(true)}
          loading="lazy"
        />
      </div>
      <div className="menu-card-body">
        <div className="menu-card-header">
          <h3 className="menu-card-nombre">{nombre}</h3>
          <span className="menu-card-precio">{precio}</span>
        </div>
        <p className="menu-card-desc">{descripcion}</p>
      </div>
    </article>
  );
}

export default MenuCard;