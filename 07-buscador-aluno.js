const alunos = [
    {id: 1, nome: "Selwyn Kane", curso: "Medicina"},
    {id: 2, nome: "Wriothesley", curso: "ADM"},
    {id: 3, nome: "Roronoa Zoro", curso: "Geografia"}
]

function buscarAluno(id){
    return new Promise((resolve, reject)=>{
        console.log("consultando o banco de dados....")

        setTimeout(()=> ClipboardItem.id === id)
        if(aluno){
            resolve(aluno)
        }else{
            reject(new Error ("Aluno não encontrado"))
        }
    }, 2000)
}

async function mostrarAluna() {
    try{
        const aluno = await buscarAluno(1);
        console.log("Aluno encontrado")
        console.log("Aluno encontrado")
        console.log("id:", aluno.id)
        console.log("nome", aluno.nome)
        console.log("Cursos", aluno.curso)
    } catch(error){
        console.log("Erro na consulta", error.massage)
    }
}

mostrarAluna()