import conexion from "../conections/vodeibdd";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/funciones", async (req, res) => {
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

router.get("/funciones/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `funcion` WHERE id = '" + id + "'";
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
          funcion: row,
        })
      );
      res.end();
    }
  });
});

router.get("/funcion-anterior/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM funcion where `hora_inicio` < CURRENT_TIME AND `id_sala` = '" + id + "'  LIMIT 1";
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
          funcion: row[0],
        })
      );
      res.end();
    }
  });
});

router.get("/funcion-actual/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `funcion` WHERE CURRENT_TIME >= hora_inicio AND CURRENT_TIME <= hora_fin AND `id_sala` = '" + id + "'";
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
          funcion: row[0],
        })
      );
      res.end();
    }
  });
});

router.get("/funcion-siguiente/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM funcion where `hora_inicio` > CURRENT_TIME AND `id_sala` = '" + id + "'  LIMIT 1";
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
          funcion: row[0],
        })
      );
      res.end();
    }
  });
});

router.get("/funciones", async (req, res) => {
  var sql = "SELECT funcion.*, salas.numero AS numeroSala, peliculas.Titulo AS titulo FROM funcion LEFT JOIN salas ON (salas.id = funcion.id_sala) LEFT JOIN peliculas ON (peliculas.id = funcion.id_contenido) ORDER BY hora_inicio ASC";
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
          funciones: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/funciones/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `funcion` WHERE  id = '" + id + "'";
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

router.put("/funciones/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `funcion` SET ";
  if (body.hasOwnProperty("id_contenido")) {
    sql += "`id_contenido` = '" + body.id_contenido + "', ";
  }
  if (body.hasOwnProperty("fecha")) {
    sql += "`fecha` = '" + body.fecha + "', ";
  }
  if (body.hasOwnProperty("hora_inicio")) {
    sql += "`hora_inicio` = '" + body.hora_inicio + "', ";
  }
  if (body.hasOwnProperty("hora_fin")) {
    sql += "`hora_fin` = '" + body.hora_fin + "', ";
  }
  if (body.hasOwnProperty("id_sala")) {
    sql += "`id_sala` = '" + body.id_sala + "' ";
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
