"use strict";
class Business {
    providerServices() {
        return "Business provider services!";
    }
}
class BakeHouse extends Business {
    providerServices() {
        return "Selling bread!";
    }
}
class GroceryStore extends Business {
    providerServices() {
        return "Selling drink or foods!";
    }
}
console.log(new Business().providerServices());
console.log(new BakeHouse().providerServices());
console.log(new GroceryStore().providerServices());
//# sourceMappingURL=class_poli.js.map