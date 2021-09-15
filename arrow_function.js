// Declaração padrão de uma função

function sumOld(a, b) {
    return a + b;
}

console.log(sumOld(5, 5));

// Declaração de um função anônima

var sum = function(a, b) {
    return a + b;
}

console.log(sum(3, 8));

// Declaração de uma Arrow Function

var sumNew = (a, b) => a + b;

console.log(sumNew(4, 9));

// Outras formas de escrita

var sumNew2 = (a, b) => {
    return a + b;
}

var sumNew = a => a ;


