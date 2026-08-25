function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* COLUMNA 1: MARCA Y ENLACES */}
        <div className="footer-brand">
          <a href="#inicio" className="logo footer-logo" aria-label="La Placita - Ir al inicio">
            <span>La</span>
            <strong>Placita</strong>
          </a>
          <p>
            Buena comida, buenos momentos y un lugar para sentirse como en casa.
          </p>
          <nav className="footer-nav" aria-label="Enlaces rápidos del pie de página">
            <a href="#inicio">Inicio</a>
            <a href="#menu">Menú</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>

        {/* COLUMNA 2: HORARIO DE ATENCIÓN */}
        <div className="footer-column">
          <h3>Horario</h3>
          <dl className="footer-hours">
            <dt>Lunes - Viernes</dt>
            <dd>7:00 AM - 9:00 PM</dd>

            <dt>Sábado - Domingo</dt>
            <dd>8:00 AM - 10:00 PM</dd>
          </dl>
        </div>

        {/* COLUMNA 3: CONTACTO Y UBICACIÓN */}
        <div className="footer-column">
          <h3>Contacto</h3>
          <address className="footer-address">
            <a href="tel:+50200000000" aria-label="Llamar al teléfono +502 0000-0000">
              +502 0000-0000
            </a>
            <a href="mailto:contactolaplacita1@gmail.com" aria-label="Enviar correo a contactolaplacita1@gmail.com">
              contactolaplacita1@gmail.com
            </a>
            <span>Ciudad de Guatemala</span>
          </address>
        </div>

      </div>

      {/* BARRA INFERIOR DE DERECHOS */}
      <div className="footer-bottom">
        <p>© 2026 La Placita.G4. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;