interface IModel {
   id: number;
   created_at: number;
   updated_at: number;
}

interface IPessoa extends IModel {
   nome: string;
   id: number;
   idade?: number;
}

interface IUsuario extends IPessoa {
   email: string;
   senha: string;
}

const joe: IUsuario = {
   nome: "Joe West",
   id: 1,
   email: "joewest@gmail.com.br",
   senha: "201421",
   created_at: new Date().getTime(),
   updated_at: new Date().getTime()
}

console.log(joe)

