import { useState, useEffect } from "react";

function Header() {
  // Estado para el Modo Oscuro (lee preferencia guardada en localStorage)
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  // Estado para el Modo Alto Contraste
  const [isHighContrast, setIsHighContrast] = useState(
    () => localStorage.getItem("high-contrast") === "true"
  );

  // Estado para controlar la apertura del menu hamburguesa en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Sincroniza la clase dark-mode en la etiqueta <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Sincroniza la clase high-contrast en la etiqueta <html>
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", isHighContrast);
    localStorage.setItem("high-contrast", isHighContrast ? "true" : "false");
  }, [isHighContrast]);

  // Cierra el menu movil al hacer clic en un enlace de navegacion
  const cerrarMenuMovil = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logotipo del Restaurante */}
        <a
          href="#inicio"
          className="logo"
          aria-label="La Placita - Ir al inicio"
          onClick={cerrarMenuMovil}
        >
          <span>La</span>
          <strong>Placita</strong>
        </a>

        {/* Navegacion Principal (se adapta con la clase active en moviles) */}
        <nav
          id="navegacion-principal"
          className={`main-nav ${menuAbierto ? "active" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={cerrarMenuMovil}>Inicio</a>
          <a href="#menu" onClick={cerrarMenuMovil}>Menú</a>
          <a href="#nosotros" onClick={cerrarMenuMovil}>Nosotros</a>
          <a href="#contacto" onClick={cerrarMenuMovil}>Contacto</a>
        </nav>

        {/* Controles de Accesibilidad y Tema */}
        <div className="header-actions">
          
          {/* Boton Alternador de Modo Claro / Oscuro */}
          <button
            type="button"
            className="theme-toggle"
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            aria-pressed={isDark}
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Boton Alternador de Alto Contraste */}
          <button
            type="button"
            className="theme-toggle"
            aria-label={isHighContrast ? "Desactivar modo de alto contraste" : "Activar modo de alto contraste"}
            aria-pressed={isHighContrast}
            onClick={() => setIsHighContrast(!isHighContrast)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="5" r="2" />
              <path d="M9 9h6M12 7v10M8 21l4-4 4 4M9 12l-3 3M15 12l3 3" />
            </svg>
          </button>

          {/* Boton Menu Hamburguesa para Dispositivos Moviles */}
          <button
            type="button"
            className={`menu-toggle ${menuAbierto ? "open" : ""}`}
            aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={menuAbierto}
            aria-controls="navegacion-principal"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;