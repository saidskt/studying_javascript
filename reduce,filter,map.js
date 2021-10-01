const number = [1,2,3,4,5]

const numberMultipliedTwo = number.map(function(number){
     return number * 2
})

// O map ele retorna uma lista, ou matriz no nosso caso number , que pode ser * , / , + , - 


const ages = [8,13,27,30,22,40]

// filter ele filtra uma lista, no nosso caso o ages 

const evenAges = ages.filter(function(ages){
    return ages % 2 === 0

})


// reduce ele pega os valores no array e junta em um só,
// depois ele faz o accumulator + o valor do arrary
// no nosso caso a gente utlizaou o age como variavel declarada em uma lista reduce
// para fazer que some tudo que estiver no array + o accumulator 
// no caso o accumulator voce pode tanto somar, quanto subtrair o valor da lista.

const sumOfages = ages.reduce(function(age, accumulator){
    return accumulator + age

}, 0)

console.log(sumOfages)


