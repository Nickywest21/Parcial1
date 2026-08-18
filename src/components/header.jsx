function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#" className="logo" aria-label="Don Chente - Inicio">
          <span>Don</span>
          <strong>Chente</strong>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#contacto">Contacto</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;