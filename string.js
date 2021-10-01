// const // Nós não podemos fazer alterações depois
// let - // Nós podemos fazer alterações 

// let e const - são os metodos mais utlizados para declarar variavel

// Strings 

//const messagem = " Hello Word "

//messagem.length // length - mostra quantos caracteres tem 

// console.log(messagem.length)

const firstName =  'Said'
const lastName = 'Moreira'
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`)


// toUpperCase() - Valor retornado - Uma nova string representando a string original convertida em maiúsculas.
// toLocaleLowerCase() - Valor retornado - Uma nova string que representa a string original convertida em minúsculas

// criando lista com String 

const names = 'Said,Ale,Pedro'
console.log(names.split(','))
