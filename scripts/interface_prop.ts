interface IProduto {
   nome: string
   preco: number
   descricao?: string
   dataValide: Date
}

const protudoDados: IProduto = {
   nome: "Notebook",
   preco: 2000,
   // descricao: "Meu notebook superpotente",
   dataValide: new Date(2022, 11, 1)
}

