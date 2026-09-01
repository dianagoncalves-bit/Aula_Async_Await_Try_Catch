function consultaServidor(disponivel){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(disponivel){
                resolve("Dados recebidos...")
            }else{
                reject (new error ("servido indisponivel"))
            }

        }, 1000)
    })
}

async function executar() {
    console.log("carregando...")
    try {
        const resultado = await consultaServidor(true);
        console.log(resultado)
    }catch (error){
        console.error("erro na consulta:", error.massage)
    }finally{
        console.log("consulta finalizada")
    }
}

executar()