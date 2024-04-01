const Construccion = require("../models/construccion.model");


exports.get_construir = (request, response, next) => {
    response.render('construir', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    }); 
};


exports.post_construir = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const construccion =
    new Construccion(request.body.nombre, request.file.filename);
    construccion.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 
                'ultima_construccion=' + request.body.nombre + "; HttpOnly"); //HttpOnly es para que no se pueda ejecutar codigo de js
            response.redirect('/construcciones');
        })
        .catch((error) => {console.log(error)});
        // construcciones.push(request.body);

};


exports.get_root = (request, response, next) => {
    console.log("Ruta /");
    let ultima_construccion = request.get("Cookie");
    if (ultima_construccion) {
        ultima_construccion = ultima_construccion.split("=")[1];
    }
    else {
        ultima_construccion = "";
    }

    console.log(ultima_construccion)

    Construccion.fetch(request.params.construccion_id).then(([rows, fielData]) => {
        console.log(rows);
        response.render("construcciones", {
            construcciones: rows,
            ultima_construccion: ultima_construccion,
            username: request.session.username || "",
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
    });

};