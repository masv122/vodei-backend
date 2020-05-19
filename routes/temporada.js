import conexion from "../conections/vodeibdd";
import express from "express";

const router = express.Router();

router.post("/temporada", async (req, res) => {
  const body = req.body;
  var sql =
    "INSERT INTO `temporadas`(`id`, `id_serie`, `titulo`, `sinopsis`) VALUES (";
  sql += "'" + body.id + "', ";
  sql += "'" + body.id_serie + "', ";
  sql += "'" + body.titulo + "', ";
  sql += "'" + body.sinopsis + "'";
  sql += ")";
  conexion.query(sql, async (error, row, col) => {
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
  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          error_object: error,
        })
      );
      res.end();
    } else {
      res.write(JSON.stringify({
        error: false,
        temporadas: row,
      }));
      res.end();
    }
  });
});

router.get("/temporada-serie/:id", async (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM `temporadas` WHERE id_serie = '" + id + "'";
  console.log(sql);
  conexion.query(sql, async (error, row, col) => {
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
  conexion.query(sql, async (error, row, cols) => {
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
  conexion.query(sql, async (error, row, cols) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          error_object: errDelete,
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
  if (body.hasOwnProperty("tipo")) {
    sql += "`id_serie` = '" + body.tipo + "' ";
  }
  sql += " WHERE id = '" + id + "'";

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
        })
      );
      res.end();
    }
  });
});

module.exports = router;
