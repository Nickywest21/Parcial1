import { useState, useEffect } from "react";

function Header() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isHighContrast, setIsHighContrast] = useState(
    () => localStorage.getItem("high-contrast") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", isHighContrast);
    localStorage.setItem("high-contrast", isHighContrast ? "true" : "false");
  }, [isHighContrast]);

  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#inicio" className="logo" aria-label="La Placita - Inicio">
          <span>La</span>
          <strong>Placita</strong>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label="Cambiar tema"
            aria-pressed={isDark}
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="theme-toggle"
            aria-label={isHighContrast ? "Desactivar alto contraste" : "Activar alto contraste"}
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
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Header;