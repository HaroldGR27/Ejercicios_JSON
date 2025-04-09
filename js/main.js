let btnGuardar = document.getElementById("guardar");
let btnEliminar = document.getElementById("eliminar");
let nombre = document.getElementById("nombre")
let encabezado1 = document.getElementsByTagName("p").item(0);

let guardado = localStorage.getItem("id")


if(guardado != null){
encabezado1.innerText = `Hola ${guardado} bienvenido/a de nuevo`
}else
encabezado1.innerText = `Por favor ve al index e ingresa tu nombre`;

btnEliminar.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("id");
});

