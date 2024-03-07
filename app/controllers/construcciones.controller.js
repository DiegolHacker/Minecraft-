const Construccion = require("../models/construccion.model");


exports.get_construir = (request, response, next) => {
    response.render("construir");
};


exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion =
    new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();
    // construcciones.push(request.body);

    response.setHeader('Set-Cookie', 'ultima_construccion=' + request.body.nombre + "; HttpOnly"); //HttpOnly es para que no se pueda ejecutar codigo de js
    response.redirect('/');
};


exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    let ultima_construccion = request.get("Cookie");
    if (ultima_construccion) {
        ultima_construccion = ultima_construccion.split("=")[1];
    }
    else {
        ultima_construccion = "";
    }

    console.log(ultima_construccion)
    console.log(request.get("Cookie"));
    response.render("construcciones", {
        construcciones: Construccion.fetchAll(), //mandar variables al template ejs para que se pueda ejecutar, decirle que la variable construcciones en construcciones.ejs corresponde a la varibale construcciones de este archivo.
        ultima_construccion: ultima_construccion,
        username: request.session.username || "",
    });
};