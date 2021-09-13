const persons = ['Leonardo', 'Jessica', 'Joselita'];
// Criação padrão de um Array

const numbersStrings = [1, 'Leo', 5];
//Também é possível inserir tipos diferentes no mesmo array

const arr = Array(3); 
// Cria um array vazio com 3 posições

const arr2 = Array(3, 2); 
// Cria um array com duas posições contendo (3, 2)

const frutas = ['Laranja', 'Morango'];
console.log(frutas.length);
//Exibe o tamanho do array

frutas.push('Limão');
console.log(frutas);
//Adiciona ao final do array

frutas.pop();
console.log(frutas);
//Removea última posição do array

frutas.unshift('Maracujá');
console.log(frutas);
//Adiciona no início do array

frutas.shift();
console.log(frutas);
//Remove a primeira posição

const juncao = frutas.concat(persons);
console.log(juncao);
//Criando um novo array concatenando os dois anteriores

const novoFrutas = juncao.slice(0, 2);
console.log(novoFrutas);
//Cria um novo array a partir e até as posições informadas.

juncao.splice(2);
console.log(juncao);