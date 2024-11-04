function multiplicaNumeros(a, b) {
    return a * b;
}
function dizOla(nome) {
    return "Ol\u00E1 ".concat(nome);
}
var a = 10;
var b = 10;
var nome = "Kulas";
console.log(multiplicaNumeros(a, b)); // Deve exibir o resultado da multiplicação de a e b
console.log(dizOla(nome)); // Deve exibir "Olá Kulas"
