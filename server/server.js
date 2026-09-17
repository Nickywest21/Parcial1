import express from "express";
import { db } from "../src/prisma/db.ts";

const app = express();
const PORT = 3000;

app.get("/api/menu", async (req, res) => {
  try {
const menu = await db.orm.public.Menu
  .select("id", "nombre", "precio", "descripcion", "foto", "alt", "categoriaId")
  .include("categoria", (c) => c.select("id", "nombre", "orden"))
  .all();

    const menuFormateado = menu
      .map((platillo) => ({
        id: platillo.id,
        nombre: platillo.nombre,
        categoria: platillo.categoria.id,
        precio: Number(platillo.precio),
        descripcion: platillo.descripcion,
        foto: platillo.foto,
        alt: platillo.alt,
        orden: platillo.categoria.orden
      }))
      .sort((a, b) => a.orden - b.orden || a.nombre.localeCompare(b.nombre))
      .map(({ orden, ...platillo }) => platillo);

    res.json(menuFormateado);
  } catch (error) {
    console.error("Error al obtener el menú:", error);

    res.status(500).json({
      error: "No fue posible obtener el menú"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});