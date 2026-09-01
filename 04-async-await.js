function prepararPedido(){
    return new peomise((certo)=>{
        setTimeout(()=>{
            certo("pizza pronta");
        })
    })
}

async function fazerPedido(){
    console.log("pedido realizado");

    const pedido = await prepararPedido();

    console.log(prdido);

    console.log("pediso entregue");
}

fazerPedido();