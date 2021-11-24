class SignIn {
   name: string;
   birth: Date;

   constructor(name: string, birth: Date) {
      this.name = name;
      this.birth = birth;
   }
}

class Client extends SignIn {
   email: string;
   company: string;

   constructor(name: string, birth: Date, email: string, company: string) {
      super(name, birth);
      this.email = email;
      this.company = company;
   }

}

const theFlash = new Client(
   "Barry Allen",
   new Date("1998-01-01"),
   "theflash@gmail.com",
   "StarLabs"
);
console.log(theFlash);