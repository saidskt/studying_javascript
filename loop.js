
 //Cfor of loop
 // const cars = [ " Ferrari " ,  " Tesla " , " Mercedes "]

// for (let car of cars) {
    console.log(car)
// }



// for loop
// for(let i = 0;  i < cars.length; i++){
//    console.log(cars[i])
// }


// forEach loop
// cars.forEach(function(car, index){
//    console.log(index)
//    console.log(car)  
// })


let index = 0

// Enquanto - while 
while (index < 10 ){
    console.log("Index é menor do que 10! ")
    // index = index + 1
    // index = += 1
    
    // Mesma coisa que acima, tem essas trés formas de acrecentar +1
    index++
}


// For in Loop
const pessoa = {
    nome: "Said",
    idade: 19,
}

for (propriedade in pessoa){
    console.log(pessoa[propriedade])
}

