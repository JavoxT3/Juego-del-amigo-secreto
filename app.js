// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

let amigos = [];

function LimpiaCampoDeTexto() {
    document.querySelector('#amigo').value = '';
}

    function añadirNombre() { 
        let nombreIngresado = (document.getElementById('amigo').value).trim();
        
        if (nombreIngresado === '') {
            alert('Por favor inserte un nombre')
            return;
        }   
        

        amigos.push(nombreIngresado);
        LimpiaCampoDeTexto();
        
        mostrarLista();
        console.log(amigos);

    }

    function mostrarLista() {
        let lista = document.querySelector('#listaAmigos');
        lista.innerHTML = "";
        
        amigos.forEach(function(amigo) {
            lista.innerHTML += `<li>${amigo}</li>`;
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert('La lista esta vacia, Ingresa un nombre')
            return;
        } if (amigos.length < 2) {
            alert('Ingrese al menos 2 nombres para hacer el sorteo');
            return; 
        }

        let indiceSorteado = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceSorteado];

        console.log (`El amigo elegido es: ${amigoSorteado}`);

        let amigoescogido = document.getElementById('resultado')
        amigoescogido.innerHTML = `<li> El amigo elegido es:<br><strong>${amigoSorteado}</strong></li>`;
    }

function reiniciar(){
    amigos = [];
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    LimpiaCampoDeTexto();
}