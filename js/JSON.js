let btnGuardar = document.getElementById("guardar");
let btnEliminar = document.getElementById("eliminar");
let nombre = document.getElementById("nombre");

btnGuardar.addEventListener("click", function (event) {
    let nom=nombre.value.trim();
    event.preventDefault();
    localStorage.setItem("id", nom);
});





