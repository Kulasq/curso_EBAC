function multiplicaNumeros(a: number, b: number): number {
    return a * b;
}

function dizOla(nome: string): string {
    return `Olá ${nome}`;
}

let a: number = 10;
let b: number = 10;
let nome: string = "Kulas";

console.log(multiplicaNumeros(a, b));       // Deve exibir o resultado da multiplicação de a e b
console.log(dizOla(nome));               // Deve exibir "Olá Kulas"