
const formulario = document.getElementById("formulario")

console.log(formulario)

formulario.addEventListener("submit",evento =>{
    console.log(evento)
    evento.preventDefault()
})