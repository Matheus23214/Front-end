var Respostas = []
var perguntas 

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null){
    listaFilmes = []
}
exibirFilmes()

console.log(listaFilmes)

function validarCadastro(nomeFilme, imagemFilme, Sobreofilme, gif){
    if (nomeFilme != '' && imagemFilme != '' && Sobreofilme != '' && gif != '') {
        return true
    } else {
        return false
    }
}

function botaoFilmes() {
    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("imagem").value
    var Sobreofilme = document.getElementById("resumo").value
    var gif = document.getElementById("gif").value
    
    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme, Sobreofilme, gif)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var filme = {
        'nome': nomeFilme,
        'link': imagemFilme,
        'resu': Sobreofilme,
        'gf': gif
    }
    listaFilmes.push(filme)

    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes)) 

    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("resumo").value = ''
    document.getElementById("gif").value = ''
    document.getElementById("nome").focus()
  
}



function exibirFilmes(){
    document.getElementById('resultado').innerHTML = ''
    console.log(listaFilmes)
    
    for (var i in listaFilmes) {
        document.getElementById('resultado').innerHTML +=
            `<div id="u">
            <p class = "lista">${listaFilmes[i].nome}</p>
                <img src='${listaFilmes[i].link}' class='img'> 
            </div>`
    }
}

function botaoLimpar(){
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )
    exibirFilmes()
}