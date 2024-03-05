const Construccion = require("../models/construccion.model");


exports.get_construir = (request, response, next) => {
    response.render("construir");
};


exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion =
        new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();
    construcciones.push(request.body);
    response.redirect('/');
};


exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render("construcciones", {
        construcciones: Construccion.fetchAll(), //mandar variables al template ejs para que se pueda ejecutar, decirle que la variable construcciones en construcciones.ejs corresponde a la varibale construcciones de este archivo.
    });
};