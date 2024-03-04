//correr con npm start

const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //variable global "view engine" asignada al valor "ejs" para decirle que vamos a usar ejs
app.set('views', 'views'); //decir que las views van a etsra en la carpeta views.

const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //establecer la carpeta publica

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/construir", (request, response, next) => {
//   console.log(request.body);
//   response.redirect("/");
// });

// app.get("/construir", (request, response, next) => {
//   console.log(request.body);
//   response.send("caquitas");
// });

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


const rutasConstrucciones = require('./routes/construcciones.routes');
app.use('/', rutasConstrucciones);


app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
        path.join(__dirname, "views", "404.html") //si quisiera enviar un archivo desde otra carpeta primero me tengo que regresar a la carpeta raiz con (__dirname, "..", "views")
    );
});

app.listen(2000);