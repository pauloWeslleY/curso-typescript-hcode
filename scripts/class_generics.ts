interface RegisterDefault {
   readonly id: number;
   readonly created_at: Date;
   readonly update_at: Date;
}

interface RegisterUser extends RegisterDefault {
   name: string;
   email: string;
   password: string;
}

interface RegisterCategory extends RegisterDefault {
   name: string;
}

class RegisterBasic<InterfaceBasic> {
   create(data: InterfaceBasic): InterfaceBasic {
      console.log("Creating a new register");
      return data;
   }

   select(id: number): InterfaceBasic {
      console.log(`Data of register the ID ${id}`);
      return {} as InterfaceBasic;
   }

   edit(id: number, dtaUpdate: InterfaceBasic): InterfaceBasic {
      console.log(`Editing data of id ${id}`);
      return dtaUpdate;
   }

   delete(id: number): boolean {
      console.log(`Excluding register of id ${id}`);
      return true;
   }
}

class UserModel extends RegisterBasic<RegisterUser> {  }
const newUser = new UserModel();
console.log(newUser.create({
   id: 7,
   name: "Harrison",
   email: "harrison@gmail.com",
   password: "4568123",
   created_at: new Date("12-13-1995"),
   update_at: new Date("10-05-1994")
}));
class CategoryModel extends RegisterBasic<RegisterCategory> {}
const newCategory = new CategoryModel();
console.log(newCategory.create({
   id: 8,
   name: "TypeScript",
   created_at: new Date("10-10-2021"),
   update_at: new Date("12-14-1994")
}));