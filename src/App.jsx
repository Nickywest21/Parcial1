import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Footer from "./components/footer";
import ContactForm from "./components/contactForm";

// 1. Tokens y variables base
import "./styles/theme.css";
// 2. Estructura general de la aplicacion
import "./App.css";
// 3. Modulo independiente del catalogo del menu
import "./styles/menu.css";
// 4. Reglas de accesibilidad y alto contraste (debe ir al final para mandar en la cascada)
import "./styles/ally.css";

function App() {
  return (
    <>
      {/* Encabezado fijo con navegacion y toggles de accesibilidad */}
      <Header />

      <main id="contenido-principal">
        {/* Seccion 1: Hero / Portada */}
        <Hero />

        {/* Seccion 2: Catalogo interactivo del Menu */}
        <Menu />

        {/* Seccion 3: Historia y Valores del Restaurante */}
        <About />

        {/* Seccion 4: Contacto con formulario interactivo */}
        <section
          id="contacto"
          className="contact-preview section"
          aria-labelledby="contacto-titulo"
        >
          <div>
            <span className="eyebrow">Contáctanos</span>
            <h2 id="contacto-titulo">Nos encantaría escucharte</h2>
            <p>
              Si tienes alguna pregunta sobre nuestro menú o quieres conocer
              más sobre nosotros, puedes comunicarte con La Placita.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      {/* Pie de pagina con horarios, direccion y creditos */}
      <Footer />
    </>
  );
}

export default App;