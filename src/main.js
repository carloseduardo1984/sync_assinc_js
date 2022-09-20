const leiaEntrada = require("readline");

const lendo = leiaEntrada.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lendo.question("Qual seu nome? ", function (answer) {
  console.log(`Oh, seu nome é ${answer}`);
});

// const produto = { id : 1, nome : 'Grampo', preco : 34.7 } 
// const produtoFreeze = Object.freeze(produto) 
// produtoFreeze.preco = null 
// console.log(produtoFreeze.preco) // 34.7 
