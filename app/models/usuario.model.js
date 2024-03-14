const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
    //constructor de la clase.
    constructor(mi_username, mi_password){
        this.nombre = mi_username;
        this.imagen = mi_password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuario (username, password,) VALUES (?, ?)',
                 [this.username, password_cifrado]
            );
        })
        .catch((error) => console.log(error))

        
    }

    //metodos estaticos se ejecutan sobre la clase, no sobre el objeto. modifica toda la clase en lugar de un objeto.

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuario WHERE username=?',
            [username]);
    }


}