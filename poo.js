//  class - classe em js

class Person {
    constructor(firstName, lastname , age){
        this.firstName = firstName
        this.Lastname = lastname
        this.age = age
    }


// Adicinando metodos, exemplo abaixo : Justando primeiro nome com o ultimo nome


 getFullName(){
    console.log(`${this.firstName} ${this.Lastname}`)
}
    static speak(){
        console.log(`Olá, Mundo!`)
    }
}

const person = new Person("Said", "Moreira", 19)
console.log(person)

person.getFullName()

Person.speak()



// Metódos estasticos
//static speak(){
console.log(`Olá, Mundo!`)


// Herança

class Animal{
    constructor(name){
        this.name = name
    }
speak(){
    console.log(`${this.name} made some noise`)
}
}
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
        console.log(`Dog ${this.name} Barked"`)
    }
}

const animal = new Animal ("Simba")
const dog = new Dog ("Bob")

animal.speak()
dog.speak()
