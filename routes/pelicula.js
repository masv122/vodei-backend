import conexion from "../conections/vodeibdd";
import express from "express";

const router = express.Router();

router.post("/pelicula", async (req, res) => {
  const body = req.body;

  var sqlQueryInsertar =
    "INSERT INTO `peliculas`(`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`,";
  sqlQueryInsertar +=
    "`Fecha_estreno`, `Actores`, `Director`, `Duracion`, `id_pelicula`, `portada`, `tipo`) VALUES (";
  sqlQueryInsertar += "'" + body.titulo + "', ";
  sqlQueryInsertar += "'" + body.titulo_original + "', ";
  sqlQueryInsertar += "'" + body.idioma + "', ";
  sqlQueryInsertar += "'" + body.genero + "', ";
  sqlQueryInsertar += "'" + body.subtitulo + "', ";
  sqlQueryInsertar += "'" + body.pais + "', ";
  sqlQueryInsertar += "'" + body.productora + "', ";
  sqlQueryInsertar += "'" + body.fecha_estreno + "', ";
  sqlQueryInsertar += "'" + body.actores + "', ";
  sqlQueryInsertar += "'" + body.director + "', ";
  sqlQueryInsertar += "'" + body.duracion + "', ";
  sqlQueryInsertar += "'" + body.id_pelicula + "', ";
  sqlQueryInsertar += "'" + body.portada + "', ";
  sqlQueryInsertar += "'" + body.tipo + "'";
  sqlQueryInsertar += ")";

  await conexion.query(sqlQueryInsertar, function (error, row, cols) {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          error_object: error,
        })
      );
      res.end();
    } else {
      var iIDCreated = row.insertId;
      res.write(
        JSON.stringify({
          error: false,
          idCreated: iIDCreated,
        })
      );
      res.end();
    }
  });
});

router.get("/pelicula/:id", async (req, res) => {
  const id = req.params;
  var sql = "SELECT * FROM peliculas where id_pelicula";
  sql = " WHERE id_pelicula = '" + id + "'";
  await conexion.query(sql, function (error, row, cols) {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          error_object: error,
        })
      );
      res.end();
    } else {
      res.write(JSON.stringify(row));
      res.end();
    }
  });
});

router.get("/pelicula", async (req, res) => {
  var sql = "SELECT * FROM `peliculas`";
  conexion.query(sql, function (error, row, cols) {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          error_object: error,
        })
      );
      res.end();
    } else {
      res.write(
        JSON.stringify({
          error: false,
          data: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/pelicula/:id", async (req, res) => {
  const id = req.params;
  var sql = "DELETE FROM `peliculas` WHERE `id_pelicula` = '" + id + "'";
  conexion.query(sql, function (error, row, cols) {
    if (error) {
      response.write(
        JSON.stringify({
          error: true,
          error_object: errDelete,
        })
      );
      response.end();
    } else {
      response.write(
        JSON.stringify({
          error: false,
        })
      );
      response.end();
    }
  });
});

router.put("/pelicula/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `peliculas` SET `";
  if (body.hasOwnProperty("titulo_original")) {
    sql += "Titulo_Original = '" + body.titulo_original + "' ";
  }
  if (body.hasOwnProperty("idioma")) {
    sql += "Idioma = '" + body.idioma + "' ";
  }
  if (body.hasOwnProperty("genero")) {
    sql += "Genero = '" + body.genero + "' ";
  }
  if (body.hasOwnProperty("subtitulo")) {
    sql += "Subtitulo = '" + body.subtitulo + "' ";
  }
  if (body.hasOwnProperty("pais")) {
    sql += "Pais = '" + body.pais + "' ";
  }
  if (body.hasOwnProperty("productora")) {
    sql += "Productora = '" + body.productora + "' ";
  }
  if (body.hasOwnProperty("fecha_estreno")) {
    sql += "Fecha_estreno = '" + body.fecha_estreno + "' ";
  }
  if (body.hasOwnProperty("actores")) {
    sql += "Actores = '" + body.actores + "' ";
  }
  if (body.hasOwnProperty("Director")) {
    sql += "director = '" + body.Director + "' ";
  }
  if (body.hasOwnProperty("Duracion")) {
    sql += "Duracion = '" + body.duracion + "' ";
  }
  if (body.hasOwnProperty("portada")) {
    sql += "portada = '" + body.portada + "' ";
  }
  if (body.hasOwnProperty("tipo")) {
    sql += "tipo = '" + body.tipo + "' ";
  }
  sql = " WHERE id_pelicula = '" + _id + "'";

  conexion.query(sql, function (error, row, cols) {
    if (error) {
      response.write(
        JSON.stringify({
          error: true,
          error_object: error,
        })
      );
      response.end();
    } else {
      response.write(
        JSON.stringify({
          error: false,
        })
      );
      response.end();
    }
  });
});

module.exports = router;
