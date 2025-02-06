const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const eleccion = req.body.curso;
    const estado = req.body.estado;
    const alumno = req.body.nombreAlumno;
    const estadoAlumno = req.body.asignacion;
    const nombreAlum = req.body.nombreAlumnoEstado;
    const empresa = req.body.empresa;
    const fechaI = req.body.fechaI;
    const fechaF = req.body.fechaF;
    const horario = req.body.horario;
    const numeroHoras = req.body.numeroHoras;
    const modalidad = req.body.modalidad;

    //Usamos return después de res.redirect() y res.send() para evitar que el código siga ejecutándose.

    if (eleccion) {
        if (eleccion === "1daw") {
            return res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Alumnos Asignacion</title>
                <link rel="stylesheet" href="../../../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../../../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoProfesores">
                        <div id="contenidoFormularioEdicioBorradoProfesores" style="margin-left: 65vh;">
                            <h3>Asignacion de alumnos a pendiente FCT</h3>
                            <p>Has establecido a los alumnos de 1 daw en estado pendiente de practicas</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `)
        } else if (eleccion === "2daw") {
            return res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Alumnos Asignacion</title>
                <link rel="stylesheet" href="../../../style.css">
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../../../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoProfesores">
                        <div id="contenidoFormularioEdicioBorradoProfesores" style="margin-left: 65vh;">
                            <h3>Asignacion de alumnos a pendiente FCT</h3>
                            <p>Has establecido a los alumnos de 2 daw en estado pendiente de practicas</p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>`)
        } else {
            return res.send("Opción no válida para alumnos");
        }
    } else if (estado && alumno) {
        //Estado alumnos
        return res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Alumnos Estados</title>
            <link rel="stylesheet" href="../style.css">
        </head>
        <body>
            <div id="container">
                <div id="cabecera">
                    <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                    <h1>Gestion empresas para FCT</h1>
                </div>
                <div id="cuerpoEdicionBorradoProfesores">
                    <div id="contenidoFormularioEdicioBorradoProfesores" style="margin-left: 63vh;">
                        <h3>Asignacion de estados FCT</h3>
                        <p>El alumno <strong>${alumno}</strong> ha ajustado su estado de práctica a <strong>${estado}</strong>.</p>
                    </div>
                </div>
                <div id="pie">
                    <h1>Aplicacion FCT</h1>
                </div>
            </div>
        </body>
        </html>
        `);
        //Datos alumnos empresas
    } else if (estadoAlumno === "ASIGNADO A EMPRESA") {
        return res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Alumnos Estados</title>
                <link rel="stylesheet" href="../style.css">
                <style>
                    #datosAlumnos {
                        padding: 30px;
                        background-color: grey;
                        margin-top: 18vh;
                        margin-left: 67vh;
                        height: 23vh;
                        border: solid 1px black;
                    }
                </style>
            </head>
            <body>
                <div id="container">
                    <div id="cabecera">
                        <img src="../imagenes/fct.png" alt="Imagen FCT" width="150" height="80" id="logo">
                        <h1>Gestion empresas para FCT</h1>
                    </div>
                    <div id="cuerpoEdicionBorradoProfesores">
                        <div id="datosAlumnos" style="margin-left: 67vh;">
                            <h3>Asignacion de estados FCT</h3>
                            <p>El alumno <strong>${nombreAlum}</strong> va a realizar las practicas en la empresa <strong>${empresa}</strong>.</p>
                            <p>la fecha de inicio será <strong>${fechaI}</strong> y la fecha de fin será <strong>${fechaF}</strong>.</p>
                            <p>el horario asignado es <strong>${horario}</strong> y va a hacer un total de  <strong>${numeroHoras}</strong> horas.</p>
                            <p>la modalidad del trabajo será <strong>${modalidad}</strong></p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `);
    } else {
        return res.send("Error: Opcion no valida ha ocurrido un error");
    }
});

module.exports = router;
