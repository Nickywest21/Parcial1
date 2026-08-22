import { useState, useEffect } from 'react';
import MenuCard from './menuCard';

function Menu() {
  const [platillos, setPlatillos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  useEffect(() => {
    // Agregamos un pequeno retraso de 600ms para apreciar el Skeleton Loading
    const temporizador = setTimeout(() => {
      fetch('/menu.json')
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error('No se pudo cargar el archivo del menú.');
          }
          return respuesta.json();
        })
        .then((datos) => {
          setPlatillos(datos);
          setCargando(false);
        })
        .catch((err) => {
          setError(err.message);
          setCargando(false);
        });
    }, 600);

    return () => clearTimeout(temporizador);
  }, []);

  const categorias = [
    { id: 'todos', etiqueta: 'Todos' },
    { id: 'desayunos', etiqueta: 'Desayunos' },
    { id: 'almuerzos', etiqueta: 'Almuerzos' },
    { id: 'bebidas', etiqueta: 'Bebidas' },
  ];

  const platillosFiltrados =
    categoriaActiva === 'todos'
      ? platillos
      : platillos.filter(
          (plato) => plato.categoria.toLowerCase() === categoriaActiva.toLowerCase()
        );

  return (
    <section className="menu-section section" id="menu" aria-label="Menú de platillos">
      <div className="section-heading">
        <span>Nuestros platillos</span>
        <h2>El menú de La Placita</h2>
        <p>Una selección de nuestros platillos tradicionales preparados al momento.</p>
      </div>

      {/* Botones de Filtro Accesibles */}
      <div className="category-buttons" role="group" aria-label="Filtro de platillos">
        {categorias.map((cat) => {
          const estaActivo = categoriaActiva === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              className={`category-button ${estaActivo ? 'active' : ''}`}
              aria-pressed={estaActivo}
              onClick={() => setCategoriaActiva(cat.id)}
            >
              {cat.etiqueta}
            </button>
          );
        })}
      </div>

      {/* Caso 1: Skeleton Loading durante la carga */}
      {cargando && (
        <div className="menu-grid" aria-label="Cargando contenido">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="menu-card skeleton-card" aria-hidden="true">
              <div className="skeleton-img"></div>
              <div className="menu-card-body">
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-text"></div>
                <div className="skeleton-line skeleton-text short"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Caso 2: Mensaje de error controlado */}
      {error && (
        <div className="menu-status error" role="alert">
          <p>Ocurrió un problema al cargar el menú. Por favor solicita la carta impresa a nuestro personal.</p>
        </div>
      )}

      {/* Caso 3: Renderizado normal de platillos filtrados */}
      {!cargando && !error && (
        <div className="menu-grid" aria-live="polite">
          {platillosFiltrados.length === 0 ? (
            <p className="menu-empty">No hay platillos disponibles en esta categoría.</p>
          ) : (
            platillosFiltrados.map((plato) => (
              <MenuCard
                key={plato.id}
                nombre={plato.nombre}
                descripcion={plato.descripcion}
                precio={`Q ${plato.precio}`}
                imagen={plato.imagen}
                alt={plato.alt}
              />
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default Menu;