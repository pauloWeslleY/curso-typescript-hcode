function showMessage(text: string | number | object): boolean {
   console.log(text);
   return true
}

console.log(showMessage("Hcode"))
console.log(showMessage(100))
console.log(showMessage({ url: "https//hcode.com.br" }))

const showMe = (code: number): number | Date | object => {

   return new Date()

}
