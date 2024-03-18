const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
    //constructor de la clase.
    constructor(mi_username, mi_password){
        this.username = mi_username;
        this.password = mi_password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuario (username, password) VALUES (?, ?)',
                [this.username, password_cifrado]
                );
            })
            .catch((error) => {
                console.log(error)
                throw Error('Nombre de usuario duplicado: Ya existe un usuario con ese nombre');
            });

        
    }

    //metodos estaticos se ejecutan sobre la clase, no sobre el objeto. modifica toda la clase en lugar de un objeto.

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuario WHERE username=?',
            [username]);
    }

    static getPermisos(username) {
        return db.execute(
            `SELECT funcion 
            FROM usuario u, asigna a, rol r, posee p, permiso per
            WHERE u.username = ? AND u.username = a.username
            AND a.idrol = r.id AND r.id = p.idrol 
            AND p.idpermiso = per.id`, 
            [username]);
    }


}