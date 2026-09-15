import express from "express";
import { db } from "../src/prisma/db.ts";

const app = express();
const PORT = 3000;

app.get("/api/menu", async (req, res) => {
  try {
    const menu = await db.orm.public.Menu.all();

    const menuFormateado = menu.map((platillo) => ({
      id: platillo.id,
      nombre: platillo.nombre,
      categoria: platillo.categoria,
      precio: Number(platillo.precio),
      descripcion: platillo.descripcion,
      foto: platillo.foto,
      alt: platillo.alt
    }));

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