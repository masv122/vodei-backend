import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express(); //se declara que la app es de tipo express para trabajar con el framework

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/bodeiBDD', require('./routes/pelicula')); //se importa la ruta de peticiones Peliculas

const history = require('connect-history-api-fallback'); //para trabajar con el historial de Routes
app.use(history());
app.use(express.static(path.join(path.resolve(), 'public'))); //para usar la ruta del proyecto 

app.set('puerto', process.env.PORT || 3000) //se establece el puerto de conexion
app.listen(app.get('puerto'), () => { //se avisa que se esta escuchando el puerto
    console.log('Servidor Vodei Enterteiment Funcionando en el puerto: ', app.get('puerto'))
});


/* 
app.get("/peliculas", function (req, res) {
  var sSQLGetAll = "SELECT * FROM peliculas";
  myConnection.query(sSQLGetAll, function (error, row, cols) {
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

function insertarPelicula(data, response) {
//   var sqlQueryInsertar =
//     "INSERT INTO `peliculas`(`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`,";
//   sqlQueryInsertar +=
//     "`Fecha_estreno`, `Actores`, `Director`, `Duracion`, `id_pelicula`, `portada`, `tipo`) VALUES (";
//   sqlQueryInsertar += "'" + data.titulo + "', ";
//   sqlQueryInsertar += "'" + data.titulo_original + "', ";
//   sqlQueryInsertar += "'" + data.idioma + "', ";
//   sqlQueryInsertar += "'" + data.genero + "', ";
//   sqlQueryInsertar += "'" + data.subtitulo + "', ";
//   sqlQueryInsertar += "'" + data.pais + "', ";
//   sqlQueryInsertar += "'" + data.productora + "', ";
//   sqlQueryInsertar += "'" + data.fecha_estreno + "', ";
//   sqlQueryInsertar += "'" + data.actores + "', ";
//   sqlQueryInsertar += "'" + data.director + "', ";
//   sqlQueryInsertar += "'" + data.duracion + "', ";
//   sqlQueryInsertar += "'" + data.id_pelicula + "', ";
//   sqlQueryInsertar += "'" + data.portada + "', ";
//   sqlQueryInsertar += "'" + data.tipo + "'";
//   sqlQueryInsertar +=")"

//   myConnection.query(sqlQueryInsertar, function (error, row, cols) {
//     if (error) {
//       response.write(
//         JSON.stringify({
//           error: true,
//           error_object: error,
//         })
//       );
//       response.end();
//     } else {
//       var iIDCreated = row.insertId;
//       response.write(
//         JSON.stringify({
//           error: false,
//           idCreated: iIDCreated,
//         })
//       );
//       response.end();
//     }
//   });
// }

// function leerTabla(response) {
//   var sqlQueryTabla = "SELECT * FROM `peliculas`";
//   myConnection.query(sqlQueryTabla, function (error, row, cols) {
//     if (error) {
//       response.write(
//         JSON.stringify({
//           error: true,
//           error_object: error,
//         })
//       );
//       response.end();
//     } else {
//       response.write(
//         JSON.stringify({
//           error: false,
//           data: row,
//         })
//       );
//       response.end();
//     }
//   });
// }
// function actualizarPelicula(data, response) {
//   var sqlQueryActualizar = "UPDATE `peliculas` SET `";
//   if (data.hasOwnProperty("titulo_original")) {
//     sqlQueryActualizar += "Titulo_Original = '" + data.titulo_original + "' ";
//   }  if (data.hasOwnProperty("idioma")) {
//     sqlQueryActualizar += "Idioma = '" + data.idioma + "' ";
//   }  if (data.hasOwnProperty("genero")) {
//     sqlQueryActualizar += "Genero = '" + data.genero + "' ";
//   }  if (data.hasOwnProperty("subtitulo")) {
//     sqlQueryActualizar += "Subtitulo = '" + data.subtitulo + "' ";
//   }  if (data.hasOwnProperty("pais")) {
//     sqlQueryActualizar += "Pais = '" + data.pais + "' ";
//   }  if (data.hasOwnProperty("productora")) {
//     sqlQueryActualizar += "Productora = '" + data.productora + "' ";
//   }  if (data.hasOwnProperty("fecha_estreno")) {
//     sqlQueryActualizar += "Fecha_estreno = '" + data.fecha_estreno + "' ";
//   }  if (data.hasOwnProperty("actores")) {
//     sqlQueryActualizar += "Actores = '" + data.actores + "' ";
//   }  if (data.hasOwnProperty("Director")) {
//     sqlQueryActualizar += "director = '" + data.Director + "' ";
//   }  if (data.hasOwnProperty("Duracion")) {
//     sqlQueryActualizar += "Duracion = '" + data.duracion + "' ";
//   }  if (data.hasOwnProperty("portada")) {
//     sqlQueryActualizar += "portada = '" + data.portada + "' ";
//   }  if (data.hasOwnProperty("tipo")) {
//     sqlQueryActualizar += "tipo = '" + data.tipo + "' ";
//   }
//   sqlQueryActualizar = " WHERE id_pelicula = '" + data.id_pelicula + "'";

//   myConnection.query(sqlQueryActualizar, function (
//     errUpdate,
//     rowUpdate,
//     colsUpdate
//   ) {
//     if (errUpdate) {
//       response.write(
//         JSON.stringify({
//           error: true,
//           error_object: errUpdate,
//         })
//       );
//       response.end();
//     } else {
//       response.write(
//         JSON.stringify({
//           error: false,
//         })
//       );
//       response.end();
//     }
//   });
// }
// function borrarPelicula(data, response) {
//   var sSQLDelete = "DELETE FROM `peliculas` WHERE `id_pelicula` = '" + data.id_pelicula + "'";
//   myConnection.query(sSQLDelete, function (
//     errDelete,
//     rowDelete,
//     colsDelete
//   ) {
//     if (errDelete) {
//       response.write(
//         JSON.stringify({
//           error: true,
//           error_object: errDelete,
//         })
//       );
//       response.end();
//     } else {
//       response.write(
//         JSON.stringify({
//           error: false,
//         })
//       );
//       response.end();
//     }
//   });
// }

// app.post("/api", function (req, res) {
//   var dataApi = {};
//   var sOP = "";

//   dataApi = req.body.data_op;
//   sOP = req.body.op;
//   switch (sOP) {
//     case "CREATE":
//       insertarPelicula(dataApi, res);
//       break;

//     case "READ":
//       leerTabla(res);
//       break;

//     case "UPDATE":
//       actualizarPelicula(dataApi, res);
//       break;

//     case "DELETE":
//       borrarPelicula(dataApi, res);
//       break;

//     default:
//       res.write(
//         JSON.stringify({
//           error: true,
//           error_message: "Debes proveer una operación a realizar",
//         })
//       );
//       res.end();
//       break;
//   }
// });*/
