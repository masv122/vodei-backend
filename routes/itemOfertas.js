import conexion from "../conections/vodeibdd";
import express from "express";

const router = express.Router();

router.post("/item_ofertas", async (req, res) => {
  const body = req.body;
  var sql =
    "INSERT INTO `item_ofertas`(`item`, `id_oferta`) VALUES (";
  sql += "'" + body.item + "', ";
  sql += "'" + body.id_oferta + "'";
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

router.get("/item_ofertas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `item_ofertas` WHERE id_oferta = '" + id + "'";
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
          item_ofertas: row,
        })
      );
      res.end();
    }
  });
});


router.get("/item_ofertas", async (req, res) => {
  var sql = "SELECT * FROM `item_ofertas`";
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
          item_ofertas: row,
        })
      );
      res.end();
    }
  });
});

router.delete("/item_ofertas/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `item_ofertas` WHERE  id_oferta = '" + id + "'";
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

router.put("/item_ofertas/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `item_ofertas` SET ";
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
