const numero = prompt("Elige un número.");

document.write("<table><thead><tr><th>Cuadrados</th><th>Cubos</th></tr></thead></table>")

let cubo = 0;
let cuadrado = 0;
let j = 0;

console.log("hola")


for(let i = 0; i<numero; i++){
    j = i+1;
    cuadrado = j*j;
    cubo = j*j*j;
    console.log(cuadrado);
    console.log(cubo);
    document.write("<p><tbody><tr><td> "+cuadrado+" </td><td> "+cubo+" </td></tr></tbody></p>");
}

function randint(range) {
    return Math.floor(Math.random() * range);
}
  
n1 = randint(101);
n2 = randint(101);

inicio = new Date().getTime(); 
const resultado = prompt("cuál es la suma de " + n1 + " + " + n2);

if(resultado == (n1+n2)){
    console.log("Correcto")
}
else{
    console.log("Incorrecto")
}

fin = new Date().getTime();
tiempo = (fin - inicio)/1000; 
console.log("Tiempo de respuesta: " + tiempo + "s");


function contador(arreglo){
    negativos = 0;
    ceros = 0;
    positivos = 0;
    for(elemento in arreglo){
        if(arreglo[elemento] < 0){
            negativos = negativos+1;
        }
        else if(arreglo[elemento] == 0){
            ceros = ceros+1;
        }
        else if(arreglo[elemento] > 0){
            positivos = positivos+1;
        }
    }
    console.log("Negativos: " + negativos + "\nCeros: " + ceros + "\nPositivos: " + positivos)
}

arr = [5,9,0,-2, -5,-4,0,9, 0,0,1,1, -4,-3,-2,-1];
contador(arr);

function prom2d(arreglo){
    let resultados = [];
    for(let column = 0; column<arreglo.length;column++){
        let total = 0;
        let cantidad = 0;

        for(let row = 0; row<arreglo[column].length;row++){
            total += arreglo[column][row];
        }

        let promedio = total/arreglo[column].length;
        resultados.push(promedio);
    }

    return resultados;
}

let arr2D = [[5,9,0,-2],[-5,-4,0,9],[0,0,1,1],[-4,-3,-2,-1],[10,20,40,50,15,45]];
console.log("Promedios: "+ prom2d(arr2D));



function inverso(num) {
    let inv = parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);
	return (inv);
}
  
let numeroOG = -4641.2344855;
console.log(inverso(numeroOG));

const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo3 = "3";