import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import pelicula from "./routes/pelicula";
import serie from "./routes/serie";
import temporada from "./routes/temporada";
import capitulo from "./routes/capitulo";
import salas from "./routes/salas";
import funciones from "./routes/funciones";
import emisiones from "./routes/emisiones";
import ofertas from "./routes/ofertas";
import itemOfertas from "./routes/itemOfertas";
import uploads from "./routes/uploads";

const app = express(); //se declara que la app es de tipo express para trabajar con el framework

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//se importan las rutas a peticiones
app.use("/vodei-server", pelicula);
app.use("/vodei-server", serie);
app.use("/vodei-server", temporada);
app.use("/vodei-server", capitulo);
app.use("/vodei-server", salas);
app.use("/vodei-server", funciones);
app.use("/vodei-server", emisiones);
app.use("/vodei-server", ofertas);
app.use("/vodei-server", itemOfertas);
app.use("/vodei-server", uploads);
app.get("/vodei-server/", async (req, res) => {
  res.write(
    JSON.stringify({
      con: true,
    })
  );
  res.end();
});

//para trabajar con el historial de Routes
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(path.resolve(), "public"))); //para usar la ruta del proyecto

app.set("puerto", process.env.PORT || 3000); //se establece el puerto de conexion
app.listen(app.get("puerto"), () => {
  //se avisa que se esta escuchando el puerto
  console.log(
    "Servidor Vodei Enterteiment Funcionando en el puerto: ",
    app.get("puerto")
  );
});
