function CategoryFilter({
  categorias,
  categoriaActiva,
  alCambiarCategoria
}) {
  return (
    <div
      className="category-buttons"
      role="group"
      aria-label="Categorías del menú"
    >
      {categorias.map((categoria) => {
        const estaActiva = categoria === categoriaActiva;

        const nombreCategoria =
          categoria.charAt(0).toUpperCase() + categoria.slice(1);

        return (
          <button
            key={categoria}
            type="button"
            className={
              estaActiva
                ? "category-button active"
                : "category-button"
            }
            aria-pressed={estaActiva}
            onClick={() => alCambiarCategoria(categoria)}
          >
            {nombreCategoria}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;