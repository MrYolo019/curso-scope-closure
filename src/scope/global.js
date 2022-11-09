var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global

function bestfruit() {
    console.log(fruit);
}

bestfruit();

function countries() {
    country = 'colombia'; // Global
    console.log(country);
}

countries();
console.log(country);