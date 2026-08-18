function Footer() {
  return (
    <footer className="site-footer" id="contacto">

      <div className="footer-container">

        <div className="footer-brand">
          <a href="#" className="logo footer-logo">
            <span>Don</span>
            <strong>Chente</strong>
          </a>

          <p>
            Buena comida, buenos momentos y un lugar para sentirse como en
            casa.
          </p>
        </div>

        <div className="footer-column">
          <h3>Horario</h3>

          <p>Lunes - Viernes</p>
          <span>7:00 AM - 9:00 PM</span>

          <p>Sábado - Domingo</p>
          <span>8:00 AM - 10:00 PM</span>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>

          <a href="tel:+50200000000">
            +502 0000-0000
          </a>

          <a href="mailto:contacto@donchente.com">
            contacto@donchente.com
          </a>

          <span>Ciudad de Guatemala</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Don Chente. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;