console.log('Hello World!!')

console.log("=================")

const nome = "Weslley"


console.log("Hi " + nome + ". Your Welcome!")

console.log("=================")

class Produto {

   nome: string;
   valor: number;

   constructor(produtoNome: string, produtoValor: number) {

      this.nome = produtoNome;
      this.valor = produtoValor;

   }

}

const playstation5 = new Produto("Playstation 5", 5000);

console.log("=================")

const element = document.querySelector('div');