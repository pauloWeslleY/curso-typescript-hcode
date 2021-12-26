"use strict";
class RegisterBasic {
    create(data) {
        console.log("Creating a new register");
        return data;
    }
    select(id) {
        console.log(`Data of register the ID ${id}`);
        return {};
    }
    edit(id, dtaUpdate) {
        console.log(`Editing data of id ${id}`);
        return dtaUpdate;
    }
    delete(id) {
        console.log(`Excluding register of id ${id}`);
        return true;
    }
}
class UserModel extends RegisterBasic {
}
const newUser = new UserModel();
console.log(newUser.create({
    id: 7,
    name: "Harrison",
    email: "harrison@gmail.com",
    password: "4568123",
    created_at: new Date("12-13-1995"),
    update_at: new Date("10-05-1994")
}));
class CategoryModel extends RegisterBasic {
}
const newCategory = new CategoryModel();
console.log(newCategory.create({
    id: 8,
    name: "TypeScript",
    created_at: new Date("10-10-2021"),
    update_at: new Date("12-14-1994")
}));
//# sourceMappingURL=class_generics.js.map