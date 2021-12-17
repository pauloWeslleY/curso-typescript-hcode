interface IProcessing<TypeInterface> {
   value: TypeInterface;
   realizeProcessing(arg: TypeInterface): TypeInterface;
}

const text: IProcessing<string> = {
   value: "hcode",
   realizeProcessing(argumentsOn: string): string {
      return argumentsOn.toUpperCase();
   }
}

console.log(text.value);
console.log(text.realizeProcessing("Hcode Training"));

const nmr: IProcessing<number> = {
   value: 10,
   realizeProcessing(v: number): number {
      return v * v;
   }
}

console.log(nmr.realizeProcessing(nmr.value));