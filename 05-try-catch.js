function buscarProduto(id){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id === 1 ){
                resolve({id: 1, nome: "Notboock", preco: 3500});
            }else{
                reject(new Error("produto não encontrado"));
            }
        }, 3000)
    })
}

async function executar() {
    try{
        const produto = await buscarProduto(1);
        console.log(produto)
    }catch (erro){
        console.log("ocorreu um erro")
        console.log(erro.massage)
    }
}

executar()