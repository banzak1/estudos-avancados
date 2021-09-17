// Forma comum

var arr = ['Maçã', 'Laranja',  'Banana', ['Tomate']];

var maca = arr[0];
var laranja = arr[1];
var banana = arr[2];
var tomate = arr[3][0];

// Destructuring Assigment

var [maca2, laranja2, banana2, [tomate2]] = ['Maçã', 'Laranja',  'Banana', ['Tomate']];

// Aplicando também em objetos

var obj = {
    name: 'Leonardo'
};

obj.name;

var { name } = obj;
