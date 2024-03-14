const Usuario = require("../models/usuario.model")
const bcrypt = require("bcryptjs");

exports.get_login = (request, response, next) => {
    response.render("login", { //manda a desplegar a login.ejs
        username: request.session.username || "",
        registrar: false,
    }); //mandamos la plantilla llamada login.ejs

};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([users, fieldData])=>{
            if(users.length == 1){
                //users[0] contiene el objeto de la respuesta de la consulta.
                const user = users[0];
                bcrypt.compare(request.body.password, user.password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.user = user.username;
                            return request.session.save(err => {
                                response.redirect('/construcciones');
                            });
                        } else{
                            return response.redirect('/users/login');
                        }                
                    }).catch(err => {
                        response.redirect('/users/login');
                    });
            }
            else{
                response.redirect("/users/login");
            }
        })
        .catch((error)=>{console.log(error)})

};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect("/users/login");
    });
};

exports.get_signup = (request, response, next) => {
    response.render("login", {
        username: request.session.username || "",
        registrar: true,
    });
};

exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.username, request.body.password);
    nuevo_usuario.save()
        .then(([rows, fieldData])=>{
            response.redirect("/users/login");
        })
        .catch((error)=>{console.log(error)}) //
    response.redirect("/users/login");
}