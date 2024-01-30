//Variable
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumero();

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function capturaNumero () {
    let num = parseInt(document.getElementById('numeroUsuario').value);
    
    //el usuario acertó
    if (num === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acierta
        if (numeroSecreto > num){
            asignarTextoElemento('p', 'El número es mayor!');
        } else {
            asignarTextoElemento('p', 'El número es menor!');

        }
        intentos++;
        limpiarCaja();
    }
    
    
}

function limpiarCaja () {
    document.querySelector('#numeroUsuario').value ='';
}

function generarNumero () {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numerosSorteados)

    if (numerosSorteados.length == numeroMaximo) {

        asignarTextoElemento('p', 'Se sortearon todos los números posibles')
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            //numero ya no deberia salir 
            return generarNumero();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales () {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();

    //indicar mns inicial
    //generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();

    //reiniciar boton
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

console.log(numeroSecreto);