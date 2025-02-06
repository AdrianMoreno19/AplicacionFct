const express = require("express");
const bodyParser = require("body-parser");
const procesarRouter = require("./app");
const procesarRouterAsignacion = require("./appAsignacionCursos");
const procesarRouterConvenios = require("./appConvenios");

const app = express();
const PORT = 3000;

//Esto hace que el post te llegue de manera correcta, lo que te envia el cliente al servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//esto hace que te acepte cualquiert archivo ya sea HTML, CSS, JS etc..
app.use(express.static(__dirname + "/../"));
//Esta es la ruta de la app que me gestiona los htmls de Edicion y borrado
app.use("/procesar", procesarRouter);
app.use("/asignacionCurso", procesarRouterAsignacion);
app.use("/convenios", procesarRouterConvenios);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
