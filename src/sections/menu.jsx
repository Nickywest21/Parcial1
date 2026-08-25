import { useEffect, useState } from "react";
import CategoryFilter from "../components/categoryFilter";
import MenuCard from "../components/menuCard";

// Categorias disponibles para la navegacion del menu
const categorias = [
  "todos",
  "desayunos",
  "almuerzos",
  "cenas",
  "postres",
  "bebidas"
];

// Cantidad de platillos a mostrar por bloque de paginacion
const CANTIDAD_INICIAL = 12;

// Funcion auxiliar para ignorar tildes, mayusculas y espacios accidentales
function normalizarTexto(texto) {
  return String(texto)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function Menu() {
  const [platillos, setPlatillos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [intentoCarga, setIntentoCarga] = useState(0);
  const [cantidadVisible, setCantidadVisible] = useState(CANTIDAD_INICIAL);

  // 1. Carga asincrona de datos desde public/menu.json
  useEffect(() => {
    const controlador = new AbortController();

    async function cargarMenu() {
      setCargando(true);
      setError("");

      try {
        const respuesta = await fetch("/menu.json", {
          signal: controlador.signal
        });

        if (!respuesta.ok) {
          throw new Error("No fue posible cargar el menú.");
        }

        const datos = await respuesta.json();

        if (!Array.isArray(datos)) {
          throw new Error("El formato del menú no es válido.");
        }

        setPlatillos(datos);
      } catch (errorCarga) {
        if (errorCarga.name !== "AbortError") {
          setError(
            "No pudimos cargar el menú. Por favor, inténtalo nuevamente o solicita la carta a nuestro personal."
          );
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarMenu();

    return () => {
      controlador.abort();
    };
  }, [intentoCarga]);

// 2. Reiniciar la cantidad visible al cambiar categoria o texto de busqueda
useEffect(() => {
  setCantidadVisible(CANTIDAD_INICIAL);
}, [categoriaActiva, busqueda]);

  // 3. Logica de filtrado combinado (Categoria + Busqueda)
  const textoBuscado = normalizarTexto(busqueda);

  const platillosFiltrados = platillos.filter((platillo) => {
    const coincideCategoria =
      categoriaActiva === "todos" ||
      platillo.categoria.toLowerCase() === categoriaActiva.toLowerCase();

    const informacionDelPlatillo = normalizarTexto(
      `${platillo.nombre} ${platillo.descripcion}`
    );

    const coincideBusqueda =
      textoBuscado === "" ||
      informacionDelPlatillo.includes(textoBuscado);

    return coincideCategoria && coincideBusqueda;
  });

  // 4. Corte de datos para paginacion progresiva
  const platillosVisibles = platillosFiltrados.slice(0, cantidadVisible);
  const hayMasPlatillos = cantidadVisible < platillosFiltrados.length;

  function limpiarFiltros() {
    setBusqueda("");
    setCategoriaActiva("todos");
  }

  return (
    <section className="menu-section section" id="menu" aria-label="Menú del Comedor">
      <div className="section-heading">
        <span>Nuestros platillos</span>
        <h2>El menú de La Placita</h2>
        <p>
          Sabores preparados en casa para disfrutar en cualquier momento del día.
        </p>
      </div>

      {/* Controles: Buscador y Filtros */}
      <div className="menu-controls">
        <div className="menu-search">
          <label className="menu-search-label" htmlFor="buscar-platillo">
            Buscar en el menú
          </label>
          <input
            className="menu-search-input"
            id="buscar-platillo"
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Busca por nombre o ingrediente..."
            autoComplete="off"
          />
        </div>

        <CategoryFilter
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          alCambiarCategoria={setCategoriaActiva}
        />

        {!cargando && !error && (
          <p className="menu-results" aria-live="polite">
            {platillosFiltrados.length}{" "}
            {platillosFiltrados.length === 1
              ? "platillo encontrado"
              : "platillos encontrados"}
          </p>
        )}
      </div>

      {/* Estado 1: Skeleton Loading durante la peticion */}
      {cargando && (
        <div className="menu-grid" aria-label="Cargando platillos">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="menu-card skeleton-card" aria-hidden="true">
              <div className="skeleton-image"></div>
              <div className="menu-card-content">
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-text"></div>
                <div className="skeleton-line skeleton-text short"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Estado 2: Error de red o formato con opcion de reintentar */}
      {!cargando && error && (
        <div className="menu-status menu-error" role="alert">
          <p>{error}</p>
          <button
            type="button"
            className="main-button"
            onClick={() => setIntentoCarga((intento) => intento + 1)}
          >
            Intentar de nuevo
          </button>
        </div>
      )}

      {/* Estado 3: Lista de platillos renderizada o mensaje de sin resultados */}
      {!cargando && !error && (
        <>
          {platillosFiltrados.length > 0 ? (
            <>
              <div className="menu-grid" aria-live="polite">
                {platillosVisibles.map((platillo) => (
                  <MenuCard
                    key={platillo.id || `${platillo.categoria}-${platillo.nombre}`}
                    nombre={platillo.nombre}
                    descripcion={platillo.descripcion}
                    precio={platillo.precio}
                    imagen={platillo.foto || platillo.imagen}
                    alt={platillo.alt}
                  />
                ))}
              </div>

              {hayMasPlatillos && (
                <div className="menu-more">
                  <button
                    type="button"
                    className="menu-more-button"
                    onClick={() =>
                      setCantidadVisible((actual) => actual + CANTIDAD_INICIAL)
                    }
                  >
                    Mostrar más platillos
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="menu-empty" role="status">
              <h3>No encontramos platillos</h3>
              <p>Prueba con otra palabra o selecciona una categoría diferente.</p>
              <button
                type="button"
                className="category-button active"
                onClick={limpiarFiltros}
              >
                Ver todo el menú
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Menu;