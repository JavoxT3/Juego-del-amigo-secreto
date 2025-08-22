// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCampoDeTexto() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

function anadirNombre() { 
    let nombreIngresado = document.getElementById('amigo').value.trim();
    
    if (nombreIngresado === '') {
        alert('Por favor inserte un nombre');
        return;
    }   
    
    amigos.push(nombreIngresado);
    limpiarCampoDeTexto();
    mostrarLista();

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía, ingresa un nombre');
        return;
    } 
    
    if (amigos.length < 2) {
        alert('Ingrese al menos 2 nombres para hacer el sorteo');
        return; 
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let amigoEscogido = document.getElementById('resultado');
    amigoEscogido.innerHTML = `
        <li>El amigo elegido es:<br><strong>${amigoSorteado}</strong></li>
    `;
}

function reiniciar(){
    amigos = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    limpiarCampoDeTexto();
}