import applyMixins from './applyMixins';

class Product {
   sell(quantity: number) {
      return `Were sold ${quantity} items of this product`;
   }

   buy(quantity: number) {
      return `Were purchased ${quantity} items of this product`;
   }
}

class Movel {
   toSit() {
      return "You sat in movable";
   }

   push(meters: number) {
      return `The movable was pushed ${meters} meters`;
   }
}

class Settee {
   constructor(public name: string) {
   }
}

interface Settee extends Product, Movel {  }

applyMixins(Settee, [Product, Movel]);

const product = new Settee('My settee');
console.log(product.sell(25));
console.log(product.push(79));
console.log(product.name);