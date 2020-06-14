import conexion from "../conections/vodeibdd";
import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/salas", async (req, res) => {
  const id = "sal-" + uuidv4();
  const body = req.body;
  var sql =
    "INSERT INTO `salas`(`id`, `numero`) VALUES ('" +
    id +
    "', '" +
    body.numero +
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
          sala: {
            id: id,
            numero: body.numero,
          },
        })
      );
      res.end();
    }
  });
});

router.get("/salas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `salas` WHERE `id` = '" + id + "'";
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
          salas: row,
        })
      );
      res.end();
    }
  });
});

router.get("/salas", async (req, res) => {
  var sql = "SELECT * FROM `salas`";
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
          salas: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/salas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `salas` WHERE `id` = '" + id + "'";
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

router.put("/salas/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `salas` SET ";
  if (body.hasOwnProperty("numero")) {
    sql += "`numero` = '" + body.numero + "' ";
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
