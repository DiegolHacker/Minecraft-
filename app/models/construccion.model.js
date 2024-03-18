const db = require("../util/database");

module.exports = class Construccion {
    //constructor de la clase.
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO construccion (nombre, imagen, username) VALUES (?, ?, "Doc")',
             [this.nombre, this.imagen]
        );
        
    }

    //metodos estaticos se ejecutan sobre la clase, no sobre el objeto. modifica toda la clase en lugar de un objeto.

    static fetchAll() {
        return db.execute('SELECT * FROM construccion');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM construccion WHERE id=?',
            [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        }
        else {
            return this.fetchAll();
        }
    }

}