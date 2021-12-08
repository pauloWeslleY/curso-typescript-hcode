class PermissionOne {
   constructor(
      private _name: string,
      private _level: number
   ) {}

   get name() {
      return this._name.toUpperCase();
   }

   set name(newName: string) {
      if (newName.length < 5) {
         throw new Error("The name on permission should must be five letter!");
      }
      this._name = newName;
   }
}

const onPermission = new PermissionOne("Administrator", 1);
console.log(onPermission.name);
// try {
//    onPermission.name = 'Mom';
// } catch (e) {
//    console.log(e.message);
// }
console.log(onPermission.name);