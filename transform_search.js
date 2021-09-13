const frutas = ['Laranja', 'Melancia', 'Acerola'];

frutas.forEach((value, index) => {
    console.log(`${index}: ${value}`)
});
//Iteração de cada item dentro de um array


console.log(frutas.map((fruta, index) => `${index} - ${fruta}`));
//Retorna um novo array, de mesmo tamanho, iterando cada item de um array

const number = [1, 2, [5, 6]]
console.log(number.flat())
//Retorna um novo array com todos os elementos de um sub-array