import express from "express";
import conexion from "../conections/vodeibdd";
import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/portadas/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

const router = express.Router();

router.post("/capitulo", upload.single("portada"), async (req, res) => {
  const body = req.body;
  const file = req.file;
  var sql =
    "INSERT INTO `capitulos`(`id_capitulo`, `id_temporada`, `duracion`, `idioma`, `subtitulos`, `director`, `portada`) VALUES (";
  sql += "'" + body.id + "', ";
  sql += "'" + body.idTemporada + "', ";
  sql += "'" + body.duracion + "', ";
  sql += "'" + body.idioma + "', ";
  sql += "'" + body.subtitulos + "', ";
  sql += "'" + file.director + "', ";
  sql += "'" + file.originalname + "'";
  sql += ")";
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
          object: row,
        })
      );
      res.end();
    }
  });
});

router.get("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM `capitulos` WHERE  id_capitulo = '" + id + "'";
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
      res.write(JSON.stringify(row));
      res.end();
    }
  });
});

router.get("/capitulo/:serie", async (req, res) => {
    const tipo = req.params.tipo;
    const sql = "SELECT * FROM `capitulos` WHERE tipo = '" + tipo + "'";
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
            capitulos: row,
          })
        );
        res.end();
      }
    });
  });

router.get("/capitulo/:temporada", async (req, res) => {
  const tipo = req.params.tipo;
  const sql = "SELECT * FROM `capitulos` WHERE tipo = '" + tipo + "'";
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
          capitulos: row,
        })
      );
      res.end();
    }
  });
});

router.get("/capitulo", async (req, res) => {
    var sql = "SELECT * FROM `capitulos`";
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
            capitulos: row,
          })
        );
        res.end();
      }
    });
  });

router.delete("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `capitulos` WHERE  id_capitulo = '" + id + "'";
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

router.put("/capitulo/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `capitulos` SET ";
  if (body.hasOwnProperty("idTemporada")) {
    sql += "`id_temporada` = '" + body.idTemporada + "', ";
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
  if (body.hasOwnProperty("portada")) {
    sql += "`portada` = '" + body.portada + "'";
  }
  sql += " WHERE id_capitulo = '" + id + "'";

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
        })
      );
      res.end();
    }
  });
});

module.exports = router;
