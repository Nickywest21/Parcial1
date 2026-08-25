function CategoryFilter({
  categorias = [],
  categoriaActiva = "todos",
  alCambiarCategoria = () => {}
}) {
  // Verificacion defensiva: Si no es un arreglo valido, no renderiza nada
  if (!Array.isArray(categorias) || categorias.length === 0) {
    return null;
  }

  return (
    <div
      className="category-buttons"
      role="group"
      aria-label="Categorías del menú"
    >
      {categorias.map((categoria) => {
        const estaActiva =
          String(categoria).toLowerCase() === String(categoriaActiva).toLowerCase();

        // Capitaliza la primera letra para la interfaz visual
        const nombreCategoria =
          categoria.charAt(0).toUpperCase() + categoria.slice(1);

        return (
          <button
            key={categoria}
            type="button"
            className={estaActiva ? "category-button active" : "category-button"}
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