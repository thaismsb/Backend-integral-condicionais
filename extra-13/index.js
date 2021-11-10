//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorDoPagamento;

if(tipoDePagamento == "credito"){
  
    valorDoPagamento = (valorDoProduto*0.95)/100 
    console.log(`Valor a ser pago: R$ ${valorDoPagamento.toFixed(2)}`)

}else if(tipoDePagamento == "cheque"){

    valorDoPagamento = (valorDoProduto*0.97)/100
    console.log(`Valor a ser pago: R$ ${valorDoPagamento.toFixed(2)}`)
    
}else if(tipoDePagamento == "debito" || tipoDePagamento == "dinheiro"){

    valorDoPagamento = (valorDoProduto*0.90)/100
    console.log(`Valor a ser pago: R$ ${valorDoPagamento.toFixed(2)}`)
    
}

