//const imagenes = document.querySelectorAll(".imagen")

//console.log(imagenes)

const puzzle = document.getElementById('puzzle')
const piezas = document.getElementById('piezas')

const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
    'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7', 'imagen-8'
]

let terminado = imagenes.length

while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length)
    console.log(index)

    //Dibujamos en pantalla las piezas del puzzle

    const div = document.createElement('div')
    div.className = 'pieza';
    div.id = imagenes[index]
    div.draggable = true;   
    div.style.backgroundImage = `url("imageonline/${imagenes[index]}.jpg")`
    piezas.appendChild(div)


    imagenes.splice(index, 1) // con .splice se cambia el contenido del array eliminando elementos existentes
}

for(let i = 0; i < terminado; i++){
    const div = document.createElement('div')
    div.className = 'placeholder';
    div.dataset.id = i;
    puzzle.appendChild(div)
}

piezas.addEventListener('dragstart', e =>{
    e.dataTransfer.setData('id',e.target.id)
})

puzzle.addEventListener('dragover', e =>{
    e.preventDefault();
    e.target.classList.add('hover');
})

puzzle.addEventListener('dragleave', e =>{
    e.target.classList.remove('hover');
})

puzzle.addEventListener('drop', e =>{
    e.target.classList.remove('hover');
    const id = e.dataTransfer.getData('id')
    const numero = id.split('-')[1] // nos quedamos el indice de la imagen

    console.log('pieza', numero)
    console.log('Caja: ', e.target.dataset.id)
    if(e.target.dataset.id === numero){
        e.target.appendChild(document.getElementById(id))
    }

    
})



