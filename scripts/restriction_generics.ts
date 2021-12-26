interface IHcode {
   length: number;
}

function showQuantityAll<Hcode extends IHcode>(value: Hcode): Hcode {
   console.log(`All: ${value.length}`);
   return value;
}

console.log(showQuantityAll([2, 3, 5, 8]));
console.log(showQuantityAll({ name: 'The Flash', length: 1 }));