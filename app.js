// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea variable
let amigos = [];

//Limpia el campo de texto
function limpiarCampoDeTexto() {
    document.querySelector('#amigo').value = '';
}

//Crea una lista de los nombres agregados
function mostrarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

//Valida el nombre para que no contenga espacios en blanco
function anadirNombre() { 
    let nombreIngresado = document.getElementById('amigo').value.trim();
    
    if (nombreIngresado === '') {
        alert('Por favor inserte un nombre');
        return;
    }   

//Ingresa el nombre a la variable amigos, limpia el campo de texto, y muestra la lista de nombres
    amigos.push(nombreIngresado);
    limpiarCampoDeTexto();
    mostrarLista();

}

//Verifica que la lista no este vacia o tenga menos de 2 nombres
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía, ingresa un nombre');
        return;
    } 
    
    if (amigos.length < 2) {
        alert('Ingrese al menos 2 nombres para hacer el sorteo');
        return; 
    }

// realiza el sorteo segun el indice de los nombres
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

//Muesta en pantalla el amigo escogido
    let amigoEscogido = document.getElementById('resultado');
    amigoEscogido.innerHTML = `
        <li>El amigo elegido es:<br><strong>${amigoSorteado}</strong></li>
    `;
}

//reinicia los campos
function reiniciar(){
    amigos = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    limpiarCampoDeTexto();
}