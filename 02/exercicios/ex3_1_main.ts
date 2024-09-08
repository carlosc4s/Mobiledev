import { Cliente } from './ex3_1_cliente';
import { Pedido } from './ex3_1_pedido';

const cliente1 = new Cliente('Carlos Henrique', 'carloshenrique@fiap.com');
const pedido1 = new Pedido(cliente1, 'Dell', 4500.00);
pedido1.exibirInformacoes();

const cliente2 = new Cliente('Miguel', 'miguel@fiap.com');
const pedido2 = new Pedido(cliente2, 'Samsung', 3500.00);
pedido2.exibirInformacoes();