const person = {
    firtname: `Said`,
    lastName: `Moreira`,
    age: "19",
    hobbies: ["series","filmes","estudar"],

    dog: {
        name: "Bela",
        age: 7,
    }
};

// const firtname = person.firtname;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima, só que digitando menos codigos

// dentro da variavel person declarada com const, temos todas as propriedades que a variavel person tem, que estao sendo declaradas


const {firtname,lastName,age,hobbies} = person

const read = person.hobbies[2];

console.log(firtname);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);

person.dog = `Bela`;

// com exemplo de Dog, nós podemos adicianar mais propriedades a nossa variavel declarada, neste exemplo o dog
// person.dog = `Bela`;


console.log(person);



const todos = [{

    id: 1,
    descricao: "Estudar programação",
    isCompletada: false
},
{
    id: 2,
    descricao: `Ler`,
    isCompletada: `True`,
},{
    id: 3,
    descricao: `Treinar`,
    isCompletada: `True`,
 }
];


const descricao = todos[2].descricao;

console.log(descricao);