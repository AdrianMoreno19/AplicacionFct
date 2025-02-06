const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    if (req.body.eleccionAlumnos) {
        const eleccion = req.body.eleccionAlumnos
        if (eleccion === "edicion") {
            res.redirect("/profesor/edicionBorradoAlumnos/edicionAlumnos.html");
        } else if (eleccion === "borrado") {
            res.redirect("/profesor/edicionBorradoAlumnos/borradoAlumnos.html");
        } else {
            res.send("Opción no válida para alumnos");
        }
    } else if (req.body.eleccionEmpresas) {
        const eleccion2 = req.body.eleccionEmpresas;
        if (eleccion2 === "edicion") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Edicion de Alumnos para FCT como Profesor</h3>
                            <p>Alumno modificado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else if (eleccion2 === "borrado") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Borrado de Alumnos para FCT como Profesor</h3>
                            <p>Alumno borrado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else {
            res.send("Opción no válida para Empresas");
        }
    } else if (req.body.eleccionContactoEmpresas) {
        const eleccion3 = req.body.eleccionContactoEmpresas;
        if (eleccion3 === "edicion") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Edicion de Alumnos para FCT como Profesor</h3>
                            <p>Alumno modificado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else if (eleccion3 === "borrado") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Borrado de Alumnos para FCT como Profesor</h3>
                            <p>Alumno borrado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else {
            res.send("Opción no válida para profesores");
        }
    } else if (req.body.eleccionProfesores) {
        const eleccion4 = req.body.eleccionProfesores;
        if (eleccion4 === "edicion") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Edicion de Profesores para FCT como Administrador</h3>
                            <p>Profesor modificado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else if (eleccion4 === "borrado") {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edicion de Alumnos</title>
                <link rel="stylesheet" href="../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoAlumnos">
                        <div id="contenidoFormularioEdicioBorradoAlumnos">
                            <h3>Borrado de Profesores para FCT como Administrador</h3>
                            <p>Profesor borrado correctamente</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else {
            res.send("Opción no válida para profesores");
        }
    } else {
        res.send("No se reconoce el formulario enviado");
    }
});

module.exports = router;
