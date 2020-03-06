let input = require("readline-sync")

let numero1 = input.question("Ingrese numero 1: ")
let numero2 = input.question("Ingrese numero 2: ")

console.log("Resultado de la suma: ")
let suma = parseFloat(numero1) + parseFloat(numero2) // El parseFloat es para convertir de string a float (con decimales)
console.log(suma)

console.log("Resultado del producto: ")
let prod = parseFloat(numero1) * parseFloat(numero2) // Si quisiera numero entero seria parseInt
console.log(prod)

console.log("Resultado de la resta: ")
let resta = parseFloat(numero1) - parseFloat(numero2)
console.log(resta)

console.log("Resultado de la division")
let div = parseFloat(numero1) / parseFloat(numero2)
console.log(div)
