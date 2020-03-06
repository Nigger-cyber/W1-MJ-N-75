let input = require("readline-sync") //Importo la libreria que instalé. 
//Esta en especial sirve generar una instruccion o pregunta, por lo que en este caso debe ir seguido por un question.

// -- v1: eco.js con variable --
//let saludo = input.question("Grita un saludo: ")

//console.log(saludo)   
//console.log(saludo)   
//console.log(saludo)
//console.log(saludo)
//console.log(saludo)

// --v2: eco.js sin variable --

//input.question("Grita un saludo: ") Si no queres usar variables se anida la funcion en un console.log
console.log(input.question("Grita un saludo: ")) // Si quiero que repita el saludo varias veces, ahi si necesito una variable
