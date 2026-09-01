function fazerLogin(email, senha){
    return new Promise((resolver,reject)=>{
        setTimeout(()=>{
            if(email === "SelwynKane.com" && senha === "6669"){

            }else{
                reject(new Error("E-mail ou senha incorreta"))
            }
        }, 1500)
    })
}

async function entrar() {
    try {
        console.log("Realizando login....");
        const usuario = await fazerLogin("SelwynKane.com");
        console.log("login realizado com sucesso")
        console.log("bem vindo", usuario.nome)
    }catch (error) {
        console.log("não foi possivel")
        console.log(error.massage)
    }
}

entrar()