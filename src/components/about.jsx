function About() {
  return (
    <section className="about-wrapper" id="nosotros">

      <div className="about section">

        <div className="about-image">
          <img
            src="/img/about.png"
            alt="Interior cálido y acogedor del restaurante La Placita"
          />
        </div>

        <div className="about-content">
          <span className="eyebrow">Nuestra historia</span>

          <h2>El sabor que se siente como en casa</h2>

          <p>
            La Placita nace de la pasión por compartir buena comida en un
            ambiente cálido y agradable.
          </p>

          <p>
            Nuestro objetivo es que cada persona pueda encontrar algo que
            disfrutar y sentirse bienvenida desde el primer momento.
          </p>
        </div>

      </div>

      <div className="services section">

        <div className="section-heading">
          <span>Lo que nos mueve</span>

          <h2>Nuestros valores</h2>

          <p>
            Estas son las ideas que guían todo lo que hacemos en La Placita.
          </p>
        </div>

        <div className="services-grid">

          <article className="service-card">
            <div className="service-icon">01</div>

            <h3>Comida con dedicación</h3>

            <p>
              Preparamos cada platillo con cuidado, buscando siempre el
              sabor de lo casero.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">02</div>

            <h3>Un espacio acogedor</h3>

            <p>
              Queremos que te sientas cómodo, sin prisa, como si estuvieras
              en casa.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">03</div>

            <h3>Cerca de la comunidad</h3>

            <p>
              Nos gusta ser parte del barrio y crear un lugar donde las
              personas quieran quedarse.
            </p>
          </article>

        </div>

      </div>

    </section>
  );
}

export default About;