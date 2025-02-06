const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    //Convenio
    const alumno = req.body.nombreAlumnoEstado;
    const empresa = req.body.empresa;
    const cif = req.body.cif;
    const direccion = req.body.direccion;
    const tipoEntidad = req.body.tipoEntidad;
    const nombreRepresentante = req.body.nombreRepre;
    const dniRepre = req.body.dniRepre;
    const cargoRepre = req.body.cargoRepre;
    const personaContacto = req.body.personaContacto;
    const mailContacto = req.body.mailContacto;
    const telefonoContacto = req.body.telefonoContacto;
    const firma = req.body.firma;
    //convenio Relacion alumnos
    const nombreAlumno = req.body.nombreAlumno;
    const dniTutor = req.body.dniTutor;
    const email = req.body.email;
    const lugarEmpresa = req.body.lugarEmpresa;
    const fechaI = req.body.fechaI;
    const fechaF = req.body.fechaF;
    const horas = req.body.horas;
    const numeroHoras = req.body.numeroHoras;
    const modalidad = req.body.modalidad;
    const relacion = req.body.relacion;
    //Fecha y horario
    const horario = req.body.horario;
    const fechaEntrega = req.body.fechaEntrega;

    //Usamos return después de res.redirect() y res.send() para evitar que el código siga ejecutándose.

    if (alumno) {
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
                        height: 27vh;
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
                            <p>El alumno <strong>${alumno}</strong> va a realizar las practicas en la empresa <strong>${empresa}</strong>.</p>
                            <p>el cif es <strong>${cif}</strong> y la direccion es <strong>${direccion}</strong>.</p>
                            <p>tiene un tipo de entidad que es <strong>${tipoEntidad}</strong> su representante es <strong>${nombreRepresentante}</strong></p>
                            <p>el dni del representante es <strong>${dniRepre}</strong> y su cargo es <strong>${cargoRepre}</strong></p>
                            <p>la persona de contacto es <strong>${personaContacto}</strong> y su mail es ${mailContacto}</strong></p>
                            <p>el telefono de contacto es <strong>${telefonoContacto}</strong> y su firma va a ser <strong>${firma}</strong></p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `);
    } else if (nombreAlumno) {
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
                        margin-left: 80vh;
                        height: 25vh;
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
                        <div id="datosAlumnos" style="margin-left: 72vh;">
                            <h3>Relacion alumnos</h3>
                            <p>El alumno <strong>${nombreAlumno}</strong> tiene asignado un tutor con dni <strong>${dniTutor}</strong>.</p>
                            <p>el email es <strong>${email}</strong> y la direccion es <strong>${lugarEmpresa}</strong>.</p>
                            <p>empieza en la fecha <strong>${fechaI}</strong> termina en fecha <strong>${fechaF}</strong></p>
                            <p>realiza un total de <strong>${horas}</strong> horas y tiene <strong>${numeroHoras}</strong> horas</p>
                            <p>la modalidad es <strong>${modalidad}</strong> y la relacion es ${relacion}</strong></p>
                        </div>
                    </div>
                    <div id="pie">
                        <h1>Aplicacion FCT</h1>
                    </div>
                </div>
            </body>
            </html>
            `);
    } else if (horario) {
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
                        margin-top: 23vh;
                        margin-left: 80vh;
                        height: 13vh;
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
                        <div id="datosAlumnos" style="margin-left: 75vh;">
                            <h3>Asignacion de estados FCT</h3>
                            <p>El horario es <strong>${horario}</strong> y la fecha es <strong>${fechaEntrega }</strong>.</p>
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
        res.send("ERROR: Opcion no valida");
    }
});

module.exports = router;
