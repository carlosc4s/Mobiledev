interface Produto {
    nome: string;
    tipo: string;
    valor: number;
}

interface Compra{
    produto: Produto;
    pagamento: FormaPagamento;
}
  
type FormaPagamento = 'dinheiro' | 'cartão cred' | 'pix' | 'cartão deb';
  
function exibirDetalhesCompras(compras: Compra[]): string {
    return compras.map(compra => 
        `Produto: ${compra.produto.nome}\nPreço: R$${compra.produto.valor}\ntipo: ${compra.produto.tipo}\nForma de pagamento: ${compra.pagamento}`
    ).join('\n\n');
  }

const compras: Compra[] = [
    {
      produto: {
        nome: "VideoGame",
        valor: 1500.00,
        tipo: "Eletrônicos"
      },
      pagamento: 'cartão deb'
    },
    {
      produto: {
        nome: "Garrafinha pet",
        valor: 20.00,
        tipo: "Garrafa"
      },
      pagamento: 'dinheiro'
    },
    {
      produto: {
        nome: "Cama",
        valor: 350.00,
        tipo: "Móveis"
      },
      pagamento: 'pix'
    },
    {
      produto: {
        nome: "Dell",
        valor: 4500.00,
        tipo: "Computadores"
      },
      pagamento: 'cartão cred'
    }
  ];
  
console.log(exibirDetalhesCompras(compras));
  

  