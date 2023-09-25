var ListaRespostas = []

ListaRespostas = JSON.parse(localStorage.getItem('bdPerguntas'))
if (ListaRespostas == null) {
    ListaRespostas = []
}

console.log(ListaRespostas)

function validarResposta(pergunta, resposta1, resposta2, resposta3, resposta4) {
    if (pergunta != '' && resposta1 != '' && resposta2 != '' && resposta3 != '' && resposta4 != '') {
        return true
    } else {
        return false
    }
}

function botaoCadastrar() {
    var pergunta = document.getElementById("pergunta").value
    var resposta1 = document.getElementById("r1").value
    var resposta2 = document.getElementById("r2").value
    var resposta3 = document.getElementById("r3").value
    var resposta4 = document.getElementById("r4").value
    var imgp = document.getElementById("imgPergunta").value

    var possoCadastrar = validarResposta(pergunta, resposta1, resposta2, resposta3, resposta4)
    if (possoCadastrar == false) {
        alert('Verifique as caixas de resposta antes de criar o Quiz')
        return
    }

    var respostas = {
        'p': pergunta,
        'r1': resposta1,
        'r2': resposta2,
        'r3': resposta3,
        'r4': resposta4,
        'imgP': imgp
    }
    ListaRespostas.push(respostas)

    localStorage.setItem('bdPerguntas', JSON.stringify(ListaRespostas))
}

exibirPerguntas()

function exibirPerguntas(){
    document.getElementById('resultado').innerHTML = ''

        ListaRespostas.forEach ( (item,pos) => 
        {
            document.getElementById('resultado').innerHTML +=
            `<div class ="item">
                <p><b>Pergunta numero:  ${pos} ${item.p} 
                <img src="excluir.svg"  onclick= excluirPergunta(${pos})>
            </div>`

        })

    }

    function excluirPergunta(pos)
 {
    if (confirm('Deseja realmente excluir esta Pergunta?')){
        ListaRespostas.splice(pos,1)
        localStorage.setItem( 'bdPerguntas', JSON.stringify (ListaRespostas))
        exibirPerguntas()
    }
}