let operando1 = ""
let operando2 = ""
let operacion = ""
let resultado = ""
const pantalla = document.getElementById("pantalla")
const numeros = document.getElementsByClassName("numero")
const atras = document.getElementById("atras")
console.log (numeros)

for (let i=0; i<numeros.length;i=i+1){
    numeros[i].addEventListener('click', cogerNumero)
}

atras.addEventListener('click', irAtras)

function irAtras(evento){
    if (pantalla.innerText.length === 1){
    pantalla.innerText = "0"

    }
    else {
        pantalla.innerText=pantalla.innerText.substring(0,pantalla.innerText.length-1)
    }
    if (operacion === "") {
        operando1=pantalla.innerText
    }
    else {
        operando2=pantalla.innerText
    }
}
    


function cogerNumero(evento){
    let numero = evento.target.innerText
    console.log(evento.target.innerText)
    if (operacion === "") {
        operando1 += numero
        pantalla.innerText = operando1
    }
    else {
        operando2 += numero
        pantalla.innerText = operando2  
    }
}

// Otra forma de asignar el evento click a una HTMLCollection:
// const numeros = Array.from(document.getElementsByClassName('numero'))
// numeros.forEach(
//     function(teclaNumero){
//         teclaNumero.addEventListener('click', cogerNumero)
//     })

const simbolos = document.getElementsByClassName("simbolo")
for (let i=0; i<simbolos.length;i=i+1){
    simbolos[i].addEventListener('click', cogerSimbolo)
}

function cogerSimbolo(evento){
    let simbolo = evento.target.innerText
    // pantalla.innerText = simbolo
 if (simbolo !== "C"){
    if (operacion !== ""){
            hacerOperacion()
            pantalla.innerText = resultado
        }
        if (simbolo === "=") operacion = ""
        else operacion = simbolo
    }    
    else {
        resultado = ""
        operando1 = ""
        operando2 = ""
        pantalla.innerText = 0
        operacion = ""
    }    

}


function hacerOperacion(){
    
    if (operacion === "+"){
        resultado = parseFloat(operando1)+parseFloat(operando2)
    }
    else if (operacion === "-"){
        resultado = parseFloat(operando1)-parseFloat(operando2)
    }
    else if (operacion === "x"){
        resultado = parseFloat(operando1)*parseFloat(operando2)
    }    
    else if (operacion === "/"){
        resultado = parseFloat(operando1)/parseFloat(operando2)
    }
operando1 = resultado 
operando2 = ""
}



   
    
    



   


