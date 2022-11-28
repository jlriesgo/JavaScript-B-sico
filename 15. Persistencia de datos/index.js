const miNombre = 'Jonathan'

const miApellido = 'León'

const miPersona = {
    nombre: miNombre,
    apellido: miApellido
}

console.log(miPersona)

sessionStorage.setItem("persona",JSON.stringify(miPersona))

localStorage.setItem("persona",JSON.stringify(miPersona))



document.cookie = `miPersona = ${JSON.stringify(miPersona)}; expires=${new Date(now.getTime() + 2 * 60000).toUTCString()}`