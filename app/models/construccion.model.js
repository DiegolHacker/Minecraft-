const construcciones = [
    {
        nombre: "casa",
        imagen: "https://i.blogs.es/7cfcd0/casas-en-minecraft/1366_2000.jpeg",
    }
];

module.exports = class Construccion {
    //constructor de la clase.
    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    save() {
        construcciones.push({
            nombre: this.nombre,
            imagen: this.imagen,
        }); //es lo mismo que poner construcciones.push(this)
    }

    //metodos estaticos se ejecutan sobre la clase, no sobre el objeto. modifica toda la clase en lugar de un objeto.

    static fetchAll() {
        return construcciones;
    }

}