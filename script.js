// script.js

function saludar() {
    // Obtener el valor del input
    let nombre = document.getElementById("nombre").value;

    // Validar si el usuario escribió algo
    if (nombre === "") {
        document.getElementById("resultado").innerText =
            "Por favor, ingresa tu nombre.";
    } else {
        document.getElementById("resultado").innerText =
            "Hola " + nombre + ", bienvenido al sistema.";
    }
}

function validarCorreo() {
    let nombre = document.getElementById("nombreContacto").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let mensajeDiv = document.getElementById("mensajeCorreo");

    if (nombre === "") {
        mensajeDiv.innerText = "Debe ingresar su nombre.";
        mensajeDiv.className = "mensaje error";
    } else if (apellido === "") {
        mensajeDiv.innerText = "Debe ingresar su apellido.";
        mensajeDiv.className = "mensaje error";
    } else if (telefono === "") {
        mensajeDiv.innerText = "Debe ingresar su teléfono.";
        mensajeDiv.className = "mensaje error";
    } else if (telefono.length < 9) {
        mensajeDiv.innerText = "El teléfono debe tener al menos 9 dígitos.";
        mensajeDiv.className = "mensaje error";
    } else if (correo === "") {
        mensajeDiv.innerText = "Debe ingresar un correo.";
        mensajeDiv.className = "mensaje error";
    } else if (!correo.includes("@") || !correo.includes(".")) {
        mensajeDiv.innerText = "Ingrese un correo válido.";
        mensajeDiv.className = "mensaje error";
    } else if (mensaje === "") {
        mensajeDiv.innerText = "Debe escribir un mensaje.";
        mensajeDiv.className = "mensaje error";
    } else if (mensaje.length < 10) {
        mensajeDiv.innerText = "El mensaje debe tener al menos 10 caracteres.";
        mensajeDiv.className = "mensaje error";
    } else {
        mensajeDiv.innerText = "Formulario registrado correctamente.";
        mensajeDiv.className = "mensaje exito";

        document.getElementById("formularioContacto").reset();
    }
}

document
    .getElementById("formularioContacto")
    .addEventListener("submit", function(evento) {
        evento.preventDefault();
        validarCorreo();
    });
