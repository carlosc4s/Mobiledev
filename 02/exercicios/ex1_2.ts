import { Pessoa } from '../../pessoa';

type Empregado = {
    empresa: string;
    salario: number;
};
  
type PessoaEmpregado = Pessoa & Empregado;
  
function exibirDetalhesPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.name}\nIdade: ${pessoaEmpregado.age}\nEmpresa: ${pessoaEmpregado.empresa}\nSalário: R$${pessoaEmpregado.salario}`;
}
  
const pessoaEmpregado: PessoaEmpregado = {
    name: "Carlos",
    age: 20,
    empresa: "Itau Unibanco",
    salario: 2500.00
};
  
console.log(exibirDetalhesPessoaEmpregado(pessoaEmpregado));
  