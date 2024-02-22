/*[Opción A] Con JavaScript y HTML5 [y quizás CSS], desarrolla una página para validar passwords. La página debe tener una forma con 2 campos, 
el campo de password, y el campo de verificar password. Utiliza al máximo tu creatividad e ingeniería para que la página sea un validador de 
passwords de estado del arte, con la mejor experiencia para el usuario.*/

const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("boton_login");
const titulo = document.getElementById("titulo")

console.log(loginButton);
console.log(loginForm);


const credenciales = {Usuario: "admin", Contrasenna: "e1234567"};


// verificarLogin = () => {
//     const usuario = loginForm.usuario.value;
//     const pass = loginForm.password.value;

//     if(usuario === credenciales.Usuario && pass === credenciales.Contrasenna) {
//         alert("Inicio de sesión exitoso");
//         location.reload();
//     }
//     else{

//     }
// }

// loginButton.onclick = verificarLogin;

loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    const usuario = loginForm.Usuario.value;
    const pass = loginForm.Password.value;

    if(usuario === credenciales.Usuario && pass === credenciales.Contrasenna) {
        alert("Inicio de sesión exitoso");
        location.reload();
    }
    else{
        alert("Credenciales erróneas");
        location.reload();
    }
})


const colorear = () => { 
    titulo.style.color = "green";
}

titulo.onmouseover = colorear
