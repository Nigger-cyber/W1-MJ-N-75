// Buscar un numero al azar
// Pedir una pregunta al usuario
// Devolver una respuesta
// Controlar la ejecucion

let input = require("readline-sync")

main()

//////////////////////////////////////////////////
function pedirPregunta(){ // Camelcase: se escriben varias palabras juntas y a partir de la segunda se pone mayuscula para diferenciarlas
    let pregunta = input.question("Hazme una pregunta y te dire tu futuro...")
    //console.log("Tu pregunta fue: " + pregunta)
}

function buscarNumero(){
    let numero = Math.round(Math.random()*5)
    //console.log("El numero encontrado es: " + numero)
    return numero // IMPORTANTE: Esta funcion es para que el dato (numero) que tengo acá salga de estas llaves (ya que si esta entre llaves es como si estuviese aislado y no me lo tomará si lo busco en otra funcion)
}

function darRespuesta(numero){
    /* INICIO FUNCION */
    if(numero==1){
        console.log("Cuenta con ello")
    } else if(numero==2){
        console.log("Es posible")
    } else if(numero==3){
        console.log("Tu suerte aun no esta hecha")
    } else if(numero==4){
        console.log("Mmmm...no es probable")
    } else {
        console.log("Ni en tus sueños")
    }
}
    /* FIN DE FUNCION */

function main(){ // Creo una funcion principal que contenga las otras tres q ya hice antes
    pedirPregunta() //1)Cuando una funcion se encuentra dentro de otra funcion, se llama callback. 2) No importa que esto esté antes de definir la funcion. En javaScript te busca la funcion en todo el código independientemente de que lo hayas definido despues
    let numero = buscarNumero() // Genero esta variable para que me traiga de vuelta el numero que busqué
    darRespuesta(numero)

    return darRespuesta
}

exports.adivinar = main // Con la funcion exports puedo exportar mi funcion main para que la pueda usar otro
//adivinApp.adivinar() // Asi se usará. adivinApp será el objeto y adivinar será el metodo