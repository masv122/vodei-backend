import conexion from "../conections/vodeibdd";
import express from "express";

const router = express.Router();

router.post("/usuario", async (req, res) => {
  const body = req.body;
  var sql = //se crea un sql
    "INSERT INTO `peliculas`(`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`,";
  sql +=
    "`Fecha_estreno`, `Actores`, `Director`, `Duracion`, `id_pelicula`, `portada`, `tipo`) VALUES (";
  sql += "'" + body.titulo + "', ";
  sql += "'" + body.tituloOriginal + "', ";
  sql += "'" + body.idioma + "', ";
  sql += "'" + body.genero + "', ";
  sql += "'" + body.subtitulo + "', ";
  sql += "'" + body.pais + "', ";
  sql += "'" + body.productora + "', ";
  sql += "'" + body.fecha + "', ";
  sql += "'" + body.actores + "', ";
  sql += "'" + body.director + "', ";
  sql += "'" + body.duracion + "', ";
  sql += "'" + body.id + "', ";
  sql += "'" + body.portada + "', ";
  sql += "'" + body.tipo + "'";
  sql += ")";
});
