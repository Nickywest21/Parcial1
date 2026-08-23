import { useEffect, useState } from "react";
import CategoryFilter from "./categoryFilter";
import MenuCard from "./menuCard";

const categorias = [
  "todos",
  "desayunos",
  "almuerzos",
  "cenas",
  "postres",
  "bebidas"
];

const CANTIDAD_INICIAL = 12;

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
  const [cantidadVisible, setCantidadVisible] =
    useState(CANTIDAD_INICIAL);

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
            "No pudimos cargar el menú. Por favor, inténtalo nuevamente."
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

  useEffect(() => {
    setCantidadVisible(CANTIDAD_INICIAL);
  }, [categoriaActiva, busqueda]);

  const textoBuscado = normalizarTexto(busqueda);

  const platillosFiltrados = platillos.filter((platillo) => {
    const coincideCategoria =
      categoriaActiva === "todos" ||
      platillo.categoria === categoriaActiva;

    const informacionDelPlatillo = normalizarTexto(
      `${platillo.nombre} ${platillo.descripcion}`
    );

    const coincideBusqueda =
      textoBuscado === "" ||
      informacionDelPlatillo.includes(textoBuscado);

    return coincideCategoria && coincideBusqueda;
  });

  const platillosVisibles = platillosFiltrados.slice(
    0,
    cantidadVisible
  );

  const hayMasPlatillos =
    cantidadVisible < platillosFiltrados.length;

  function limpiarFiltros() {
    setBusqueda("");
    setCategoriaActiva("todos");
  }

  return (
    <section className="menu-section section" id="menu">
      <div className="section-heading">
        <span>Nuestros platillos</span>

        <h2>El menú de La Placita</h2>

        <p>
          Sabores preparados en casa para disfrutar en cualquier momento
          del día.
        </p>
      </div>

      {cargando && (
        <p className="menu-status" role="status">
          Cargando nuestro menú...
        </p>
      )}

      {!cargando && error && (
        <div className="menu-status menu-error" role="alert">
          <p>{error}</p>

          <button
            type="button"
            onClick={() =>
              setIntentoCarga((intento) => intento + 1)
            }
          >
            Intentar de nuevo
          </button>
        </div>
      )}

      {!cargando && !error && (
        <>
          <div className="menu-controls">
            <div className="menu-search">
              <label htmlFor="buscar-platillo">
                Buscar en el menú
              </label>

              <input
                id="buscar-platillo"
                type="search"
                value={busqueda}
                onChange={(evento) =>
                  setBusqueda(evento.target.value)
                }
                placeholder="Busca por nombre o ingrediente..."
                autoComplete="off"
              />
            </div>

            <CategoryFilter
              categorias={categorias}
              categoriaActiva={categoriaActiva}
              alCambiarCategoria={setCategoriaActiva}
            />

            <p className="menu-results" aria-live="polite">
              {platillosFiltrados.length}{" "}
              {platillosFiltrados.length === 1
                ? "platillo encontrado"
                : "platillos encontrados"}
            </p>
          </div>

          {platillosFiltrados.length > 0 ? (
            <>
              <div className="menu-grid">
                {platillosVisibles.map((platillo) => (
                  <MenuCard
                    key={
                      platillo.id ||
                      `${platillo.categoria}-${platillo.nombre}`
                    }
                    nombre={platillo.nombre}
                    descripcion={platillo.descripcion}
                    precio={platillo.precio}
                    imagen={`/${platillo.foto}`}
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
                      setCantidadVisible(
                        (cantidadActual) =>
                          cantidadActual + CANTIDAD_INICIAL
                      )
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

              <p>
                Prueba con otra palabra o selecciona una categoría
                diferente.
              </p>

              <button type="button" onClick={limpiarFiltros}>
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