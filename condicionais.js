const sum = 1 + 1;

// if - Se (condição for verdadeira mostre Sum é igual a 2)
// else - Se não ()
// === - significa Igual 


// If & else

if (sum === 2) {
    console.log("Sum é igual a 2 ")
} else {
    console.log("Sum não é igual a 2")
}

// else If

if (sum === 2){
    console.log(" Sum é igual a 2!")
} else if (sum === 3){
    console.log("Sum é igual a 3!")
} else {
    console.log("Sum é igual a 2!")
}


// Operadores and e or  (And - E , Or - Ou)

// && - End 
// || - Or


const sum1 = 2 + 2
const sum1 = 3 + 10

if(sum1 === 4 && sum2 ===6){
    console.log("sum1 é igual a 4 e sum2 é igual a 6!")
}

if(sum1 === 4 || sum2 ===6){
    console.log("sum1 é igual a 4 e sum2 é igual a 6!")
}



// Operador Ternario (Operator Ternary)

const sum = 1 + 1;

/* if (sum === 2){
    number = 2
} else {
    number = 4
}

*/

// Mesma coisa que acima, só que com menos codigos

let number = sum ===2 ? 2 : 4;

console.log(number)


// Switch

const carro = `Mercedes`

        switch(car){
        case `Mercedes`:
        console.log(`Mercedes é linda`)
        break;

        case `Ferrari`:
        console.log(`Ferrari é muito linda`)
        break;
        case `Tesla`:
        console.log(`Tesla é muito muito linda`)
        break
}