console.log("hola");
console.info("Esto es información");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.assert(1==1);
console.assert(1==2);

//variables, constantes

//forma antigua de declarar variables.

var juego = "Minecraft";

//forma moderna y más segura de declarar variables.

let cantidad = 10;

//constantes

const precio = 50;

//para todos los numeros existe el tipo de dato number
//La clase Number tiene muchas propiedades, en la consola poner Number.MAX_VALUE para ver el valor máximo permitido

//alert, prompt, confirm

//alert("TE VAS A MORIR");

const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);

const hambre = confirm("¿Tienes hambre?");

if(hambre){
    console.log("Es hora de desayunar");
}
else{
    console.log("Sigamos trabajando");
}

// = es para definir, == es para comparar, === es para comparar estrictamente (1 === "1" da falso)

//funciones tradicionales
function construir(){
    console.log("Construyendo casa");
}

construir();

//Funciones modernas. () es una función anónima, el operador => le indica que debe hacer {}, osea nada. Para usarla podemos apuntar una variable hacia esa función, como una función lambda. Para ejecutar la función llamo a la variable casa()
() => {};
const casa = () => {
    console.log("Construyendo casa anónima");
};

//Lo asignamos a variables para poder cambiar lo que hace un elemento. Si tengo un botón que ponga modo claro, al picarlo cambia su función para que en el próximo click ponga modo oscuro.
//Asignamos funciones dependiendo de lo que esté ocurriendo en la página.


const desayuno = (comida) => {
    console.log("El desayuno de hoy es " + comida);
};

desayuno("huevitos");

//arreglos

const arreglo = ["Elemento"]; //lo constante no es el contenido, es la dirección de memoria.
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

arreglo[10] = "Uno más";

//arreglos asociativos (en js los arreglos son diccionarios por default)

arreglo["dos"] = 8;

console.log(arreglo)


//recorrido tradicional del arreglo

for(let i = 0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo

for(let posicion in arreglo){
    console.log(arreglo[posicion]);
}

//objetos

const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = "3";

for(let atributo in objeto){ //con in imprime los nombres de los atributos.
    console.log(atributo);
}

//for(let atributo of objeto){ // con of imprime los valores de los atributos.
   // console.log(atributo);
//}

//modificar html

document.write("hola");