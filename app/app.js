//correr con npm start

const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //variable global "view engine" asignada al valor "ejs" para decirle que vamos a usar ejs
app.set('views', 'views'); //decir que las views van a etsra en la carpeta views.

const session = require("express-session")

app.use(session({ //constructor de js para construir el objeto sesión
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', //Llave que utiliza ara cifrar las sesiones
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

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


const rutasUsuarios = require("./routes/usuarios.routes");
app.use('/users', rutasUsuarios);

const rutasConstrucciones = require('./routes/construcciones.routes');
app.use('/construcciones', rutasConstrucciones);


app.use((request, response, next) => {
    response.status(404);
    response.sendFile(
        path.join(__dirname, "views", "404.html") //si quisiera enviar un archivo desde otra carpeta primero me tengo que regresar a la carpeta raiz con (__dirname, "..", "views")
    );
});

app.listen(2000);