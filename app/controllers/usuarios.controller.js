exports.get_login = (request, response, next) => {
    response.render("login", {
        username: request.session.username || "",
    }); //mandamos la plantilla llamada login.ejs

};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username; //bodyparser a request le cera un objeto llamado body, express session le crea un objeto llamado session
    response.redirect("/");
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect("/users/login");
    });
};