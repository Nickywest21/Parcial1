import { useState } from "react";

function About() {
  // Estado para capturar si la imagen llega a fallar en produccion
  const [errorImagen, setErrorImagen] = useState(false);

  return (
    <section className="about-wrapper" id="nosotros">

      {/* BLOQUE 1: NUESTRA HISTORIA */}
      <div className="about section">

        <div className="about-image">
          {!errorImagen ? (
            <img
              src="/img/about.png"
              alt="Interior cálido y acogedor del restaurante tradicional La Placita"
              onError={() => setErrorImagen(true)}
            />
          ) : (
            <div
              className="about-image-fallback"
              role="img"
              aria-label="La Placita - Sabor Tradicional"
            >
              <svg
                viewBox="0 0 64 64"
                width="64"
                height="64"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 48h40M16 48a16 16 0 0 1 32 0M32 16v8M28 20l4-4 4 4" />
                <path d="M20 32c2-4 6-4 8 0s6 4 8 0" />
              </svg>
              <span className="about-fallback-title">La Placita</span>
              <span className="about-fallback-desc">Tradición y Sabor Casero</span>
            </div>
          )}
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

      {/* BLOQUE 2: NUESTROS VALORES */}
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
            <div className="service-icon" aria-hidden="true">01</div>

            <h3>Comida con dedicación</h3>

            <p>
              Preparamos cada platillo con cuidado, buscando siempre el
              sabor de lo casero.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon" aria-hidden="true">02</div>

            <h3>Un espacio acogedor</h3>

            <p>
              Queremos que te sientas cómodo, sin prisa, como si estuvieras
              en casa.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon" aria-hidden="true">03</div>

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