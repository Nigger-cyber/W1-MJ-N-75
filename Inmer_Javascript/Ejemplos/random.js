// Utilizo la fcion. Math.random que me va a dar un numero azar del 0 al 1, lo que hice es multiplicarlo por 50 para generar mi minimo y mi maximo. Pero igualmente seguira siendo un resultado decimal
let azar = Math.round(Math.random()*50) // Math.round lo que hace es redondear el resultado de Math.random, que siempre va a ser un numero decimal
console.log("Numero aleatorio entre 1 y 50: "+ azar)
