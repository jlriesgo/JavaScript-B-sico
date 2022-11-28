const hTexto = document.getElementById("h-texto")

console.log(hTexto)

hTexto.addEventListener("cambioTexto", evento => {
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevotexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevotexto,
            color
        }

    })
    hTexto.dispatchEvent(evento)
}