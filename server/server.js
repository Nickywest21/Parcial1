import express from "express";
import { db } from "../src/prisma/db.ts";

const app = express();
const PORT = 3000;

app.get("/api/menu", async (req, res) => {
  try {
    //lee la categoría del query param
    const { categoria } = req.query;

    //realiza la consulta a la base de datos usando Prisma
    const menu = categoria
      ? await db.orm.public.Menu
          .where({ categoriaId: categoria })
          .include("categoria", (c) => c.select("id", "nombre", "orden"))
          .all()

      : await db.orm.public.Menu
          .include("categoria", (c) => c.select("id", "nombre", "orden"))
          .all();

    const menuOrdenado = menu.sort(
      (a, b) =>
        a.categoria.orden - b.categoria.orden ||
        a.nombre.localeCompare(b.nombre)
    );
    //formato del frontend
    const menuFormateado = menuOrdenado.map((platillo) => ({
      id: platillo.id,
      nombre: platillo.nombre,
      categoria: platillo.categoria.id,
      precio: Number(platillo.precio),
      descripcion: platillo.descripcion,
      foto: platillo.foto,
      alt: platillo.alt
    }));

    //envia la respuesta al json
    res.json(menuFormateado);
  } catch (error) {
    console.error("Error al obtener el menú:", error);
    res.status(500).json({
      error: "No fue posible obtener el menú"
    });
  }
});

  //arranca el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});