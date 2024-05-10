require("./style.scss")

document.getElementById("cadastrar").addEventListener("click", cadastrar)


function cadastrar() {

    console.log("Cadastrando")

    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value

    let livro = {
        title: titulo,
        description: descricao
    }
    fetch("https://api-aula.up.railway.app/livros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livro)
    }).then(response =>{
        console.log(response)
        if(response.status == 201){
            alert("Livro cadastrado com sucesso")
        }

    })
        
       



}

