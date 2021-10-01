const names = ["Felipe" , " João " , "Said" , 10 , false];

const joao = names [1];

names.push("Pedro") // Adicianar no final da lista / ex: names.push
names.unshift("Fernanda"); // adicinar no inicio da lista / ex: names.unshift 

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo"

const indexOfFelipe = names.indexOf (`Felipe`)

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names);

console.log(namesIsArray);

console.log (names);
console.log(sortedNames);
