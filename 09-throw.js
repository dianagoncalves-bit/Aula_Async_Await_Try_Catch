async function cadastroUsuario(nome, idade){
    try {
        if(!nome){
            throw new error("o nome e obrigatorio")
        }

        if (idade < 18){
            throw new error("o usuario precisa ter 18 anos ou masi")
        }

        console.log("usuario cadastrado com sucesso!")
        console.log("nome:", nome)
        console.log("idade:", idade)
    }catch(e){
        console.log("error no cadastro:", e.message)
    }
}

cadastroUsuario("Matheus", 17)
