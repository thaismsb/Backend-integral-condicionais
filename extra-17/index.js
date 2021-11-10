//valor do produto comprado em centavos.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago em centavos
const valorPago = 30000;

let valorParcelas;
let dinheiroQueFalta;
let parcelasQueFaltam;

valorParcelas = (valorDoProduto/quantidadeDoParcelamento)/100 ;

dinheiroQueFalta = (valorDoProduto - valorPago)/100;

parcelasQueFaltam = dinheiroQueFalta/valorParcelas;



console.log(`Retam ${parcelasQueFaltam} parcelas de R$ ${valorParcelas}`);