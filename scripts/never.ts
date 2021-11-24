function showError(message: string): never {

   throw new Error(message)

}


// console.log(showError("Something wrong"));

let n = 0

function loopInfinity(): never {

   while (true) {
      console.log(n++)
   }

}

loopInfinity()