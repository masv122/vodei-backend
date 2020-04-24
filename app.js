import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express(); //se declara que la app es de tipo express para trabajar con el framework

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/vodeiBDD', require('./routes/pelicula')); //se importa la ruta de peticiones Peliculas
app.use('/vodeiBDD', require('./routes/serie')); //se importa la ruta de peticiones serie

const history = require('connect-history-api-fallback'); //para trabajar con el historial de Routes
app.use(history());
app.use(express.static(path.join(path.resolve(), 'public'))); //para usar la ruta del proyecto 

app.set('puerto', process.env.PORT || 3000) //se establece el puerto de conexion
app.listen(app.get('puerto'), () => { //se avisa que se esta escuchando el puerto
    console.log('Servidor Vodei Enterteiment Funcionando en el puerto: ', app.get('puerto'))
});
