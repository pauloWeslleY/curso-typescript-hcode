class Order {
   constructor(
      private product: string,
      protected allValue: number,
      public previsionDelivery: Date
   ) { }
}

const myOrder = new Order("TV 64 inch", 2000, new Date("2021-05-01"));
console.log(myOrder);