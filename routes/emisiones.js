import conexion from "../conections/vodeibdd";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/emisiones", async (req, res) => {
  const id = "emi-" + uuidv4();
  const body = req.body;
  var sql =
    "INSERT INTO `emision`(`id_contenido`, `tipo`, `id`) VALUES ('" +
    body.id_contenido +
    "','" +
    body.tipo +
    "','" +
    id +
    "')";
  console.log(sql);
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

router.get("/emisiones/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `emision` WHERE `id` = '" + id + "'";
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
          emision: row[0],
        })
      );
      res.end();
    }
  });
});

router.get("/emisiones-existente/:id", async (req, res) => {
  const id = req.params.id;
  var sql =
    "SELECT COUNT(*) AS cant FROM emision WHERE id_contenido = '" + id + "'";
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
          cant: row[0],
        })
      );
      res.end();
    }
  });
});

router.get("/emisiones-tipo/:tipo", async (req, res) => {
  const tipo = req.params.tipo;
  var sql = "SELECT * FROM `emision` WHERE `tipo` = '" + tipo + "'";
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
          emisiones: row,
        })
      );
      res.end();
    }
  });
});

router.get("/emisiones", async (req, res) => {
  var sql = "SELECT * FROM `emision`";
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
          emision: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/emisiones/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `emision` WHERE `id` = '" + id + "'";
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

router.put("/emisiones/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `emision` SET ";
  if (body.hasOwnProperty("id_contenido")) {
    sql += "`id_contenido` = '" + body.id_contenido + "', ";
  }
  if (body.hasOwnProperty("tipo")) {
    sql += "`tipo` = '" + body.tipo + "' ";
  }
  sql += " WHERE id = '" + id + "'";
  console.log(sql);
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
