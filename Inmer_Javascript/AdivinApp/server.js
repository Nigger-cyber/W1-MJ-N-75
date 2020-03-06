let express = require("express")

let adivinApp = require("./lib/motorAdivinApp.js")

let app = express() // Es un framework para escuchar peticiones http, es decir poder configurar el servidor para que me traiga mi codigo js. Con esta funcion traigo mi librería que ya la traje arriba

let interfaces = express.static("interfaces")

let encode = express.urlencoded()

// ESCUCHAR PETICIONES AL PUERTO 80 // SIEMPRE QUE HAGA UN CAMBIO TENGO QUE FRENAR EL SERVIDOR, CON CTRL + C
app.listen(80)
app.use(interfaces) // Le pido que use mi variable interfaces
app.use(encode)

app.get("/", function(request, response){
    response.end("Hola Mundo!")
})

app.get("/perritos", function(request,response){
    response.end("Te mando un listado de perritos :)")
})

app.get("/Lucas", function(request,response){ // Hay que poner localhost/Lucas o el ip de otra maquina si quiero entrar a una maquina ajena
    response.end("Hola como andan?")
})

app.post("/respuesta", function(resquest, response){
    let laPregunta = request.body.pregunta
    let laRespuesta = adivinApp.adivinar()

    response.write("La pregunta fue" + laPregunta)
    response.end("La respuesta es " + laRespuesta)