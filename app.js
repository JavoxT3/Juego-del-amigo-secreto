// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

let amigos = [];

function añadirNombre(){
    let nombreIngresado = document.getElementById('amigo').value;

   amigos.push(nombreIngresado);

   console.log(amigos);

}
