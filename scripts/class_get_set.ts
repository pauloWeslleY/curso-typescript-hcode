class PermissionOne {
   constructor(
      private _name: string,
      private _level: number
   ) {}

   get name() {
      return this._name.toUpperCase();
   }

   set name(newName) {
      if (newName.length < 5) {
         throw new Error("The name on permission should must be five letter!")
      }
      this._name = newName;
   }
}

const permissionTwo = new PermissionOne("Administrator", 1);
console.log(permissionTwo.name);
// try {
//    permissionTwo.name = 'Mom';
// } catch (e) {
//    console.log(e);
// }
permissionTwo.name = 'Mom';
console.log(permissionTwo.name);