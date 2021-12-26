function decoratorMetod(target: unknown, propertyKey: string, descriptor: PropertyDecorator) {
   descriptor.value = (...args: string[]) => {
      return args.map(item => item.toLowerCase());
   };
}

class DealMessage {
   @decoratorMetod
   tellMessage(...posts: string[]) {
      return posts;
   }
}

const instance = new DealMessage();
console.log(instance.tellMessage("Hi", "Your Welcome", "Hcode"));