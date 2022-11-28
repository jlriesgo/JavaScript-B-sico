/*const prompt = require("prompt-sync")();

var numeroFilas = prompt("Introduce un número: ");

while (numeroFilas < 3 || numeroFilas > 8) {
    if(numeroFilas < 3){
        console.log('El número es menor de 3')
        numeroFilas = prompt("Introduce un nuevo número: ");
    }else{
        console.log('El número es mayor de 8')
        numeroFilas = prompt("Introduce un nuevo número: ");
    }
    
}

var espacios = 2 * numeroFilas -2;

for(let i = 1; i<=numeroFilas;i++){
    
    let resultado = ''
    
    for(var j=0; j< numeroFilas-i-1;j++){
        console.log(" ")
    }

    for(j=1; j=i;j++){
        resultado+= '* '
    }

    console.log(resultado)
}

/*for (var i = 1; i <= numeroFilas; i++) { //primer bucle para definir la altura
    let resultado = ''
    
    for(var j = 1; j<numeroFilas-i-1;j++){
        console.log(" ")
    } 

    for (var j = 1; j <= i; j++) {
        resultado+= '* '
    }
    console.log(resultado)
}*/

/*let numNatural = 1000

let acum=0;

let esPrimo = true;

for(let i=3;i<numNatural;i++){
    for(let j=3; j<=i;j++){
        if(i%j == 0){
            esPrimo = false;
        }
    }
    console.log(i)
}*/

let numero = 1000;

let esPrimo = true;

let contador = 0;

let contadorNumeros= 0;

for (let i = 3; i <= numero; i++) {
    for (let j = 3; j <= i; j++) {
        if (i % j == 0) {
            if (i === 4) {
                continue;
            }

            contador++;
        }
    }
    if (contador == 1) {
        console.log(`${i}`);
        contadorNumeros++;
        //console.log(`contadorNumeros: ${contadorNumeros}`)
        if(contadorNumeros == 10){
            console.log(`${i}`);
        }
    }
    contador = 0;
}




