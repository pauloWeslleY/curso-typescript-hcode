function decoratorMetodo(target: unknown, propertyKey: string, descriptor: PropertyDecorator) {
   console.log({
      target,
      propertyKey,
      descriptor
   });
   // descriptor.value = (...args: string[]) => {
   //    return args.map(item => item.toLowerCase());
   // };
}

class DealMessage {
   // @decoratorMetodo
   tellMessage(...posts: string[]) {
      return posts;
   }
}

const instance = new DealMessage();
console.log(instance.tellMessage("Hi", "Your Welcome", "Hcode"));