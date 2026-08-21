import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Footer from "./components/footer";
import "./styles/theme.css";
import "./App.css";
import "./styles/ally.css";


function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Menu />

        <About />

        <section className="contact-preview section">
          <div>
            <span className="eyebrow">Contáctanos</span>

            <h2>Nos encantaría escucharte</h2>

            <p>
              Si tienes alguna pregunta sobre nuestro menú o quieres conocer
              más sobre nosotros, puedes comunicarte con La Placita.
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