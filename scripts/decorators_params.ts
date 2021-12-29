import 'reflect-metadata';

function decoratorParams(target: any, key: string, propertyKey: number) {
   Reflect.getMetadata("design:paramtypes", target, key).map(item => {
      console.log(item);
   });
}

class HealParams {
   metodOne(@decoratorParams message: string,  value: boolean) {

   }
   metodTwo(@decoratorParams numbers: number) {

   }
}

new HealParams();