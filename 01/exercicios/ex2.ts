interface Produto {
    nome: string;
    tipo: string;
    valor: number;
}
  
function exibirInformacoes(produto: Produto): string {
    return `O produto ${produto.nome} é do tipo ${produto.tipo} no valor de ${produto.valor}.`;
}
  
const produto1: Produto = {
    nome: "Coxinha",
    tipo: "salgado",
    valor: 5
};

const produto2: Produto = {
    nome: "Feijao",
    tipo: "Grão",
    valor: 15
};
  
console.log(exibirInformacoes(produto1));
console.log(exibirInformacoes(produto2));
  