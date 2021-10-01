// JSON - Resumindo é um conversor

/*O JSON existe como uma string
útil quando você deseja transmitir dados por uma rede. 
Ele precisa ser convertido em um objeto JavaScript nativo quando você quiser acessar os dados, Isso não é um grande problema – 
 o JavaScript fornece um objeto JSON global que possui métodos disponíveis para conversão entre os dois. */



/*

O que é uma API JavaScript?
"API (Application Programming Interface - Interface entre Aplicativo e programação) 
é um conjunto de instruções e padrões de programação para acesso a um aplicativo de software.

*/ 



const todos = [
    {

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


const todosJSON = JSON.stringify(todos); // Enviando para um servidor
const todosList = JSON.parse(todosJSON); // Recebendo de um servidor

console.log(todosJSON);
console.log(todosList);

