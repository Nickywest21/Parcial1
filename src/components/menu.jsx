import MenuCard from "./menuCard";

function Menu() {
  return (
    <section className="menu-section section" id="menu">

      <div className="section-heading">
        <span>Nuestros platillos</span>

        <h2>El menú de Don Chente</h2>

        <p>
          Una selección de nuestros platillos favoritos preparados para
          compartir.
        </p>
      </div>

      <div className="category-buttons" aria-label="Categorías del menú">
        <button type="button" className="category-button active">
          Todos
        </button>

        <button type="button" className="category-button">
          Desayunos
        </button>

        <button type="button" className="category-button">
          Almuerzos
        </button>

        <button type="button" className="category-button">
          Bebidas
        </button>
      </div>

      <div className="menu-grid">

        <MenuCard
          nombre="Desayuno de la casa"
          descripcion="Huevos, frijoles, queso y acompañamientos."
          precio="Q 35"
          imagen="/img/menu-desayuno.jpg"
        />

        <MenuCard
          nombre="Plato típico"
          descripcion="Una combinación de sabores tradicionales."
          precio="Q 45"
          imagen="/img/menu-tipico.jpg"
        />

        <MenuCard
          nombre="Hamburguesa Don Chente"
          descripcion="Carne preparada en casa con ingredientes frescos."
          precio="Q 55"
          imagen="/img/menu-hamburguesa.jpg"
        />

        <MenuCard
          nombre="Café de la casa"
          descripcion="Café caliente preparado al momento."
          precio="Q 18"
          imagen="/img/menu-cafe.jpg"
        />

      </div>

    </section>
  );
}

export default Menu;