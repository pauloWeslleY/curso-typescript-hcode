import showMessage from './functions/showMessage';

console.log(showMessage("Hcode"));
console.log(showMessage(100));
console.log(showMessage({ url: "https//hcode.com.br" }));

const showMe = (code: number): number | Date | object => {
   return new Date()
}
