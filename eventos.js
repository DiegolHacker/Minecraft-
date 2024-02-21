const boton = document.getElementById("boton_construir");


// boton.onclick= () => { //si le pongo buton.onclick = console.log()... se ejecuta sin que le haga click.
//     const imagen = document.getElementById("imagen_construir");
//     imagen.src = "https://preview.redd.it/rselpv96qca71.png?width=640&crop=smart&auto=webp&s=94e2a684798193c7c41ca7ccce92636aaa6fd763";
//     boton.innerHTML = "Terminar casa";
//     boton.className = "button is-warning";

//     console.log("click");
// };

const construir_casa = () => { 
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F5ea4ca48-b3b1-4c8e-9fcb-e733cb6edd2c_1440x900.png";
    boton.innerHTML = "Terminar casa";
    boton.className = "button is-warning";
    boton.onclick = terminar_casa;

};

const terminar_casa = () => { 
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://preview.redd.it/rselpv96qca71.png?width=640&crop=smart&auto=webp&s=94e2a684798193c7c41ca7ccce92636aaa6fd763";
    boton.innerHTML = "Destruir casa";
    boton.className = "button is-danger";
    boton.onclick = destruir_casa;

};

const destruir_casa = () => { 
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d9/Flatland.png/revision/latest?cb=20200413025926";
    boton.innerHTML = "Construir casa";
    boton.className = "button is-primary";
    boton.onclick = construir_casa;

};

destruir_casa() //le quite el src="" en el html original y el class="buton is-primary" porque al ejecutar esto se asignan automaticamente, entonces se queda mas limpio el html. Ya no es necesaria la linea de abajo porque se asigna al ejecutar esto.
// boton.onclick = construir_casa