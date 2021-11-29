"use strict";
class Bank {
    constructor() {
        this.safeQuantity = 10000;
    }
    debitSafe(quantity) {
        if (this.safeQuantity >= quantity) {
            this.safeQuantity -= quantity;
            return this.safeQuantity;
        }
        else {
            return "Insufficient funds";
        }
    }
    cashOut(quantity) {
        return this.debitSafe(quantity);
    }
    cashOutATM(quantity) {
        return this.debitSafe(quantity);
    }
}
class Bank24Hours extends Bank {
    cash(qtd) {
        return this.cashOut(qtd);
    }
}
const nubank = new Bank();
const bank24hours = new Bank24Hours();
bank24hours.cash(2500);
//# sourceMappingURL=class_private.js.map