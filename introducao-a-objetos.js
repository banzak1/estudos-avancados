function Humano (name) {
    this.name = name;
}

const p = new Humano('Leonardo');

console.log(p);

console.log(p.name);


// Classses

class Mamifero {
    constructor(qtdePernas) {
        this.qtdePernas = 2;
    }
}

class Pessoa extends Mamifero {
    constructor(fala) {
        super(true);
        this.fala = true;
    }
}

const leo = new Pessoa(false);

console.log(leo);