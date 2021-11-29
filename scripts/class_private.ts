class Bank {
   private safeQuantity: number = 10000;

   private debitSafe(quantity: number): number | string {
      if (this.safeQuantity >= quantity) {
         this.safeQuantity -= quantity;
         return this.safeQuantity;
      } else {
         return "Insufficient funds";
      }
   }

   protected cashOut(quantity: number) {
      return this.debitSafe(quantity);
   }

   cashOutATM(quantity: number) {
      return this.debitSafe(quantity);
   }
}

class Bank24Hours extends Bank {
   cash(qtd: number) {
      return this.cashOut(qtd);
   }
}

const nubank = new Bank();
const bank24hours = new Bank24Hours();
bank24hours.cash(2500);


