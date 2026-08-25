function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-content">

        <span className="eyebrow hero-eyebrow">
          Sabor que se comparte
        </span>

        <h1>
          La Placita
          <span>Restaurante</span>
        </h1>

        <p>
          Comida deliciosa, ambiente acogedor y momentos para compartir.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="main-button">
            Ver nuestro menú
          </a>
        </div>

      </div>

      <div className="hero-decoration">
        <span>Buena comida</span>
        <span>•</span>
        <span>Buenos momentos</span>
      </div>

    </section>
  );
}

export default Hero;