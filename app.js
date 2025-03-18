
let amigos = [];

//Introducir nombres
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();
    
    //Limpiar campos de entrada
    inputAmigo.value = "";
    inputAmigo.focus();

}

//Generar lista
function actualizarLista() {
    const listaAmigoUl =document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos un nombre.");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});
