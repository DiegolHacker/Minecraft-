const boton = document.getElementById("boton_construir");

boton.onclick= () => { //si le pongo buton.onclick = console.log()... se ejecuta sin que le haga click.
    const imagen = document.getElementById("imagen_construir");
    imagen.src = "https://preview.redd.it/rselpv96qca71.png?width=640&crop=smart&auto=webp&s=94e2a684798193c7c41ca7ccce92636aaa6fd763";
    boton.innerHTML = "Terminar casa";

    console.log("click");
};
