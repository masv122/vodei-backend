import conexion from "../conections/vodeibdd";
import express from "express";

const router = express.Router(); //se importan las rutas REST de express
//req es request (peticion) y res es result (resultado)
router.post("/pelicula", async (req, res) => { //ruta de tipo POST 
  const body = req.body; //se extra el cuerpo de la pelicon
  var sql = //se crea un sql
    "INSERT INTO `peliculas`(`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`,";
  sql +=
    "`Fecha_estreno`, `Actores`, `Director`, `Duracion`, `id_pelicula`, `portada`, `tipo`) VALUES (";
  sql += "'" + body.titulo + "', ";
  sql += "'" + body.tituloOriginal + "', ";
  sql += "'" + body.idioma + "', ";
  sql += "'" + body.genero + "', ";
  sql += "'" + body.subtitulo + "', ";
  sql += "'" + body.pais + "', ";
  sql += "'" + body.productora + "', ";
  sql += "'" + body.fecha + "', ";
  sql += "'" + body.actores + "', ";
  sql += "'" + body.director + "', ";
  sql += "'" + body.duracion + "', ";
  sql += "'" + body.id + "', ";
  sql += "'" + body.portada + "', ";
  sql += "'" + body.tipo + "'";
  sql += ")";

  conexion.query(sql, function (error, row, cols) { //se utiliza await para esperar que se guarde en la BDD
    if (error) {                       //error es un try catch incluido, row arroja los resultados de la bdd
      res.write(
        JSON.stringify({              //si hay un error envia un json con el error
          error: true,
          error_object: error,
        })
      );
      res.end();
    } else {                        //si no hay error se devuelve un json indicando que se realizo la peticion
      res.write(
        JSON.stringify({
          error: false
        })
      );
      res.end();
    }
  });
});

router.get("/pelicula/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "SELECT * FROM peliculas WHERE id_pelicula = '" + id + "'";
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
      res.write(JSON.stringify(row));
      res.end();
    }
  });
});

router.get("/pelicula", async (req, res) => {
  var sql = "SELECT * FROM `peliculas`";
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
          peliculas: row,
        })
      );
      res.end();
    }
  });
});

router.get("/peliculas/:tipo", async (req, res) => {
    const tipo = req.params.tipo;
    const sql = "SELECT * FROM peliculas WHERE tipo = '" + tipo + "'";
    console.log(sql);
    conexion.query(sql, async (error, row, col) => {
      if(error){
        res.write(
          JSON.stringify({
            error: true,
            error_object : error
          })
        );
        res.end();
      } else {
        res.write(
          JSON.stringify({
            error: false,
            peliculas: row,
          })
        );
        res.end();
      }
    })
})

router.delete("/pelicula/:id", async (req, res) => {
  const id = req.params.id;
  var sql = "DELETE FROM peliculas WHERE id_pelicula = '" + id + "'"
  conexion.query(sql, function (error, row, cols) {
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

router.put("/pelicula/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  var sql = "UPDATE `peliculas` SET ";
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
  if (body.hasOwnProperty("Director")) {
    sql += "`Director` = '" + body.Director + "', ";
  }
  if (body.hasOwnProperty("Duracion")) {
    sql += "`Duracion` = '" + body.duracion + "', ";
  }
  if (body.hasOwnProperty("portada")) {
    sql += "`portada` = '" + body.portada + "', ";
  }
  if (body.hasOwnProperty("tipo")) {
    sql += "`tipo` = '" + body.tipo + "' ";
  }
  sql += " WHERE id_pelicula = '" + id + "'";

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
