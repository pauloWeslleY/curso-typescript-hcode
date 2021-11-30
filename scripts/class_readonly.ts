class User {
   readonly id: string = "190716464";
   name: string = "JoeWest";
   private password: string = "98332";
   readonly dateSignIn: Date = new Date("2021-01-01");
}

const user1 = new User();
// user1.id = "Wally"
// console.log(user1.id);