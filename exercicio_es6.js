const alunos = [
    { nome: "Lucas", nota: 8 },
    { nome: "Tellex", nota: 5.5 },
    { nome: "Billy", nota: 6.2 },
    { nome: "Julia", nota: 7.8 },
    { nome: "Gabriel", nota: 4.9 }
];
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}
console.log(alunosAprovados(alunos));
