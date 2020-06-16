import conexion from "../conections/vodeibdd";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/ofertas", async (req, res) => {
  const body = req.body;
  const id = "ofe-" + uuidv4();

  var sql =
    "INSERT INTO `ofertas`(`titulo`, `precio`, `tipo`, `id`) VALUES (";
  sql += "'" + body.titulo + "', ";
  sql += "'" + body.precio + "', ";
  sql += "'" + body.tipo + "', ";
  sql += "'" + id + "'";
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
          id: id
        })
      );
      res.end();
    }
  });
});

router.get("/ofertas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `ofertas` WHERE id = '" + id + "'";
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
          ofertas: row,
        })
      );
      res.end();
    }
  });
});

router.get("/ofertas-tipo/:tipo", async (req, res) => {
    const tipo = req.params.tipo;
    var sql = "SELECT * FROM `ofertas` WHERE `tipo` = '" + tipo + "'";
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
            ofertas: row,
          })
        );
        res.end();
      }
    });
  });

router.get("/ofertas", async (req, res) => {
  var sql = "SELECT * FROM `ofertas`";
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
          ofertas: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/ofertas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `ofertas` WHERE  id = '" + id + "'";
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

router.put("/ofertas/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `ofertas` SET ";
  if (body.hasOwnProperty("titulo")) {
    sql += "`titulo` = '" + body.titulo + "', ";
  }
  if (body.hasOwnProperty("precio")) {
    sql += "`precio` = '" + body.precio + "', ";
  }
  if (body.hasOwnProperty("tipo")) {
    sql += "`tipo` = '" + body.tipo + "', ";
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
