async function minhaFuncaoAssincrona() {

  let promessa = new Promise((resolve, reject) => { 
    
    console.log("Aguardando...x");
    setTimeout(() => resolve("Feito!"), 5000)
    
  });

  let resultado = await promessa; // wait until the promise resolves (*)

  console.log(resultado); // "done!"
}

minhaFuncaoAssincrona ();

console.log("----------------------");

setTimeout(function() { console.log('Aqui uma mensagem assincrona!'); }, 2000);

console.log('Aqui uma mensagem sincrona!');
