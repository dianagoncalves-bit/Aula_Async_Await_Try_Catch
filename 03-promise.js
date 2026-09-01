function prepararPedido(){
    return new promise((resolve, reject)=>{
        console.log("preparando pedido");

        setTimeout(()=>{
            if(deuBom){
                resolver("hanbúrger pronto")
            }else{
                reject("deu erro ao preparar hambúrger")
            }
            
            
        })
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
}).catch((erro)=>{
    console.log(erro)
});