function Footer() {
  return (
    <footer className="site-footer" id="contacto">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#inicio" className="logo footer-logo">
            <span>La</span>
            <strong>Placita</strong>
          </a>

          <p>
            Buena comida, buenos momentos y un lugar para sentirse como en
            casa.
          </p>

          <nav className="footer-nav" aria-label="Navegación secundaria">
            <a href="#inicio">Inicio</a>
            <a href="#menu">Menú</a>
            <a href="#nosotros">Nosotros</a>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Horario</h3>

          <dl className="footer-hours">
            <dt>Lunes - Viernes</dt>
            <dd>7:00 AM - 9:00 PM</dd>

            <dt>Sábado - Domingo</dt>
            <dd>8:00 AM - 10:00 PM</dd>
          </dl>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>

          <address className="footer-address">
            <a href="tel:+50200000000">
              +502 0000-0000
            </a>

            <a href="mailto:contacto@laplacita.com">
              contacto@laplacita.com
            </a>

            <span>Ciudad de Guatemala</span>
          </address>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 La Placita. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;