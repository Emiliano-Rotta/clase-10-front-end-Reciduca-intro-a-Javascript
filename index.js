// var nombre = prompt("escriba su nombre")
// var apellido = prompt("escriba su apellido")
// alert ("Hola " + nombre + " " + apellido)

//var es una palabra reservada que significa variable
//lo que le sigue al var es el nombre de la variables
//lo que viene despues del = es el valor de la variables

// var numeroUno = prompt("escriba su primer numero")
// var numeroDos = prompt("escriba su segundo numero")

// var suma = Number(numeroUno) + Number(numeroDos)
// alert(suma) 

// var no es la unioca forma de declarar variables

//var let const

// var nombre = "Dylan "
// let apellido = "Castillo "
// const rol = "alumno"
// alert(nombre + apellido + rol)

// nombre = "Emiliano "
// apellido = "Rotta "
// rol = "profesor"
// alert(nombre + apellido + rol)

////////////////////////////////////////
////////modificando el DOM /////////////
///////////////////////////////////////

// var titulo = document.querySelector("h1")
// var tituloDos = document.querySelector("#titulo-h3")
// var parrafo = document.querySelector(".parrafo")
// var body = document.querySelector("body")



// titulo.innerHTML = "Estamos en un curso de Javascript"
// tituloDos.textContent = "El profe se olvida de compartir pantalla"

// var color = prompt("escriba un color")

// parrafo.style.color = "red"
// // usuario = prompt("escriba un display")
// body.style.backgroundColor = color

// EJERCICIO 2. en un archivo index.html crear un h1 vacio y un h4 que diga "hola soy un h4"
// llamar a estas etquetas desde JS y al h1 agregarle un texto, al h4 cambiarle el color de la letra, y al body cambiarle el color segun un prompt

// const h1 = document.querySelector("#titulo") --> para llamar por id
const h1 = document.getElementById("titulo") //--> para llamar por id(Igual que arriba)
let h4 = document.querySelector("h4")
var body = document.querySelector("body")
let color = prompt("escriba un color")

h1.innerText = "agregar un texto"
h4.style.color = "green"
body.style.backgroundColor = color
