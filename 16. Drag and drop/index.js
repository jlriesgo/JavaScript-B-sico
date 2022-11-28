const parrafos = document.querySelectorAll(".parrafo")

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart", event =>{        
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () =>{
        parrafo.classList.remove("dragging")
    })
})

const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event =>{
        //console.log("drop")
        const idParrafo = event.dataTransfer.getData("id")
        //console.log(idParrafo)
        const parrafo = document.getElementById(idParrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})

