class DocumentFolks {
   private value: string = "983389265-01"; // TS
   #numbers: number = 45; // ECMAScript

   showDocument() {
      return this.#numbers;
   }
}

class CNPJ extends DocumentFolks {
   // private value: string = "007";
   #numbers: number = 50;

   showCNPJ() {
      return this.#numbers;
   }
}

const rg = new DocumentFolks();
console.log(rg.showDocument());
const cnpj = new CNPJ();
console.log(cnpj.showCNPJ());
// console.log(`RG: ${rg.value}`);
// console.log(`RG: ${rg.#numbers}`);