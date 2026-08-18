import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="services section">
          <div className="section-heading">
            <span>Lo que ofrecemos</span>
            <h2>Una experiencia para disfrutar</h2>
            <p>
              En Don Chente encontrarás comida preparada con ingredientes
              seleccionados y el sabor que nos caracteriza.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">01</div>
              <h3>Comida fresca</h3>
              <p>
                Platillos preparados con ingredientes frescos y de calidad.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">02</div>
              <h3>Hecho con cariño</h3>
              <p>
                Recetas pensadas para que cada visita se sienta como estar
                en casa.
              </p>
            </article>

          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="about-image">
            <img
              src="/img/about.jpg"
              alt="Interior acogedor del restaurante Don Chente"
            />
          </div>

          <div className="about-content">
            <span className="eyebrow">Nuestra historia</span>

            <h2>El sabor que se siente como en casa</h2>

            <p>
              Don Chente nace de la pasión por compartir buena comida en un
              ambiente cálido y agradable.
            </p>

            <p>
              Nuestro objetivo es que cada persona pueda encontrar algo que
              disfrutar y sentirse bienvenida desde el primer momento.
            </p>
          </div>
        </section>

        <Menu />

       <section className="contact-preview section">
          <div>
            <span className="eyebrow">Contáctanos</span>

            <h2>Nos encantaría escucharte</h2>

            <p>
              Si tienes alguna pregunta sobre nuestro menú o quieres conocer
              más sobre nosotros, puedes comunicarte con Don Chente.
            </p>
          </div>

          <a href="#contacto" className="main-button">
            Contáctanos
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;