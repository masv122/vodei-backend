import conexion from "../conections/vodeibdd";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/temporada", async (req, res) => {
  const body = req.body;
  const id = "fun-" + uuidv4();

  var sql =
    "INSERT INTO `funcion`(`id`, `id_contenido`, `fecha`, `hora_inicio`, `hora_fin`, `id_sala`) VALUES (";
  sql += "'" + id + "', ";
  sql += "'" + body.id_contenido + "', ";
  sql += "'" + body.fecha + "', ";
  sql += "'" + body.hora_inicio + "', ";
  sql += "'" + body.hora_fin + "', ";
  sql += "'" + body.id_sala + "'";
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

router.get("/temporada/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `temporadas` WHERE id = '" + id + "'";
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
          temporadas: row,
        })
      );
      res.end();
    }
  });
});

router.get("/temporada-serie/:id", async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `temporadas` WHERE id_serie = '" + id + "'";
  console.log(sql);
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
          temporadas: row,
        })
      );
      res.end();
    }
  });
});

router.get("/temporada", async (req, res) => {
  var sql = "SELECT * FROM `temporadas`";
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
          temporadas: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/temporada/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `temporadas` WHERE  id = '" + id + "'";
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

router.put("/temporada/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `temporadas` SET ";
  if (body.hasOwnProperty("titulo")) {
    sql += "`titulo` = '" + body.titulo + "', ";
  }
  if (body.hasOwnProperty("sinopsis")) {
    sql += "`sinopsis` = '" + body.sinopsis + "', ";
  }
  if (body.hasOwnProperty("id_serie")) {
    sql += "`id_serie` = '" + body.id_serie + "' ";
  }
  sql += " WHERE id = '" + id + "'";
  conexion.query(sql, function (error) {
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
