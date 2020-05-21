import express from "express";
import conexion from "../conections/vodeibdd";
import app from "../app";

const router = express.Router();

router.post("/capitulo", async (req, res) => {
  const body = req.body;
  const id = app.uuidv4();
  var sql =
    "INSERT INTO `capitulos`(`id`, `id_temporada`, `duracion`, `idioma`, `subtitulos`, `director`, `sinopsis`, `titulo`) VALUES (";
  sql += "'" + id + "', ";
  sql += "'" + body.id_temporada + "', ";
  sql += "'" + body.duracion + "', ";
  sql += "'" + body.idioma + "', ";
  sql += "'" + body.subtitulos + "', ";
  sql += "'" + body.director + "', ";
  sql += "'" + body.sinopsis + "', ";
  sql += "'" + body.titulo + "'";
  sql += ")";

  conexion.query(sql, async (error) => {
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
        })
      );
      res.end();
    }
  });
});

router.get("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `capitulos` WHERE  id = '" + id + "'";
  conexion.query(sql, async (error, row) => {
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
          capitulos: row,
        })
      );
      res.end();
    }
  });
});

router.get("/capitulos-temporada/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `capitulos` WHERE  id_temporada = '" + id + "'";
  conexion.query(sql, async (error, row) => {
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
          capitulos: row,
        })
      );
      res.end();
    }
  });
});

router.get("/capitulo", async (req, res) => {
  var sql = "SELECT * FROM `capitulos`";
  conexion.query(sql, async (error, row) => {
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
          capitulos: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `capitulos` WHERE  id = '" + id + "'";
  conexion.query(sql, async (error) => {
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
        })
      );
      res.end();
    }
  });
});

router.put("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `capitulos` SET ";
  if (body.hasOwnProperty("idTemporada")) {
    sql += "`id_temporada` = '" + body.id_temporada + "', ";
  }
  if (body.hasOwnProperty("duracion")) {
    sql += "`duracion` = '" + body.duracion + "', ";
  }
  if (body.hasOwnProperty("idioma")) {
    sql += "`idioma` = '" + body.idioma + "', ";
  }
  if (body.hasOwnProperty("subtitulos")) {
    sql += "`subtitulos` = '" + body.subtitulos + "', ";
  }
  if (body.hasOwnProperty("director")) {
    sql += "`director` = '" + body.director + "', ";
  }
  if (body.hasOwnProperty("sinopsis")) {
    sql += "`sinopsis` = '" + body.sinopsis + "', ";
  }
  if (body.hasOwnProperty("titulo")) {
    sql += "`titulo` = '" + body.titulo + "'";
  }
  sql += " WHERE id = '" + id + "'";

  conexion.query(sql, async (error) => {
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
        })
      );
      res.end();
    }
  });
});

module.exports = router;
