// string, number, undefined, null, boolean, symbol
const nome = "flavio"; // string
const nome1 = "flavio"; // string
const nome2 = "flavio"; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta pra lugar nenhum na memória
const sobrenomeAluno = null; // nulo > não aponta pra local nenhum na memória
const aprovado = false; // boolean = true, false (logico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
