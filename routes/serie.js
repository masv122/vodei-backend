import conexion from "../conections/vodeibdd";
import express from 'express'; 
import multer from 'multer'; 
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
router.post("/serie", upload.single("portada"), async (req, res) => { 
  const body = req.body; 
  const file = req.file; 
  var sql =
    "INSERT INTO `series`(`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`,";
  sql +=
    "`Productora`, `Fecha_estreno`, `Actores`, `id_serie`, `portada`) VALUES (";
  sql += "'" + body.titulo + "', ";
  sql += "'" + body.tituloOriginal + "', ";
  sql += "'" + body.idioma + "', ";
  sql += "'" + body.genero + "', ";
  sql += "'" + body.subtitulo + "', ";
  sql += "'" + body.pais + "', ";
  sql += "'" + body.productora + "', ";
  sql += "'" + body.fecha + "', ";
  sql += "'" + body.actores + "', ";
  sql += "'" + body.id + "', ";
  sql += "'" + file.originalname + "'";
  sql += ")";
  console.log(sql);
  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          errorObject: error,
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

router.get("/serie/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM series WHERE id_serie = '" + id + "'";
  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          errorObject: error,
        })
      );
      res.end();
    } else {
      res.write(JSON.stringify(row));
      res.end();
    }
  });
});

router.get("/serie", async (req, res) => {
  var sql = "SELECT * FROM series";
  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          errorObject: error,
        })
      );
      res.end();
    } else {
      res.write(
        JSON.stringify({
          error: false,
          series: row,
        }));
      res.end();
    }
  });
});

router.delete("/serie/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM `series` WHERE id_serie = '" + id + "'";

  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          errorObject: error,
        })
      );
      res.end();
    } else {
      res.write(
        JSON.stringify({
          error: false,
        })
      );
    }
  });
});

router.put("/serie/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "UPDATE `series` SET ";
  if (body.hasOwnProperty("titulo")) {
    sql += "`Titulo` = '" + body.titulo + "', ";
  }
  if (body.hasOwnProperty("titulo_original")) {
    sql += "`Titulo_Original` = '" + body.titulo_original + "', ";
  }
  if (body.hasOwnProperty("idioma")) {
    sql += "`Idioma` = '" + body.idioma + "', ";
  }
  if (body.hasOwnProperty("genero")) {
    sql += "`Genero` = '" + body.genero + "', ";
  }
  if (body.hasOwnProperty("subtitulo")) {
    sql += "`Subtitulo` = '" + body.subtitulo + "', ";
  }
  if (body.hasOwnProperty("pais")) {
    sql += "`Pais` = '" + body.pais + "', ";
  }
  if (body.hasOwnProperty("productora")) {
    sql += "`Productora` = '" + body.productora + "', ";
  }
  if (body.hasOwnProperty("fecha_estreno")) {
    sql += "`Fecha_estreno` = '" + body.fecha_estreno + "', ";
  }
  if (body.hasOwnProperty("actores")) {
    sql += "`Actores` = '" + body.actores + "', ";
  }
  if (body.hasOwnProperty("portada")) {
    sql += "`portada` = '" + body.portada + "'";
  }
  sql += " WHERE id_serie = '" + id + "'";

  conexion.query(sql, async (error, row, col) => {
    if (error) {
      res.write(
        JSON.stringify({
          error: true,
          errorObject: error,
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
