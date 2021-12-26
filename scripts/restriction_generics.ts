interface IHcode {
   length: number;
}

function showQuantityAll<Hcode extends IHcode>(value: Hcode): Hcode {
   console.log(`All: ${value.length}`);
   return value;
}

console.log(showQuantityAll([6, 3, 3]));
console.log(showQuantityAll({ name: 'Harrison', length: 1 }));