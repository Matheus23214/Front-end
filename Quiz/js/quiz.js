var ListaRespostas = []
var listaSorteados = []

ListaRespostas = JSON.parse(localStorage.getItem('bdPerguntas'))
if (ListaRespostas == null) {
    ListaRespostas = []
}

var respostaCorreta = ''

sorteio()

function sorteio() {

    if (listaSorteados.length == ListaRespostas.length) {
        alert ('Quiz finalizado, sua pontuação foi', contaC)
        location.href = 'index.html'
        return
    }

    var posicao = parseInt(Math.random() * 4) + 1

    do {
        var perguntaSorteada = parseInt(Math.random() * ListaRespostas.length)
    } while (listaSorteados.indexOf(perguntaSorteada) != -1 )
    listaSorteados.push(perguntaSorteada)


    respostaCorreta = ListaRespostas[perguntaSorteada].r4

    switch (posicao) {
        case 1:
            document.getElementById("perguntaResultado").innerHTML = `${ListaRespostas[perguntaSorteada].p}`
            document.getElementById("imgP").src = `${ListaRespostas[perguntaSorteada].imgP}`
            document.getElementById("respostas1").innerHTML = `${ListaRespostas[perguntaSorteada].r4}`
            document.getElementById("respostas2").innerHTML = `${ListaRespostas[perguntaSorteada].r3}`
            document.getElementById("respostas3").innerHTML = `${ListaRespostas[perguntaSorteada].r2}`
            document.getElementById("respostas4").innerHTML = `${ListaRespostas[perguntaSorteada].r1}`
            break
        case 2:
            document.getElementById("perguntaResultado").innerHTML = `${ListaRespostas[perguntaSorteada].p}`
            document.getElementById("imgP").src = `${ListaRespostas[perguntaSorteada].imgP}`
            document.getElementById("respostas1").innerHTML = `${ListaRespostas[perguntaSorteada].r1}`
            document.getElementById("respostas2").innerHTML = `${ListaRespostas[perguntaSorteada].r4}`
            document.getElementById("respostas3").innerHTML = `${ListaRespostas[perguntaSorteada].r3}`
            document.getElementById("respostas4").innerHTML = `${ListaRespostas[perguntaSorteada].r2}`
            break
        case 3:
            document.getElementById("perguntaResultado").innerHTML = `${ListaRespostas[perguntaSorteada].p}`
            document.getElementById("imgP").src = `${ListaRespostas[perguntaSorteada].imgP}`
            document.getElementById("respostas1").innerHTML = `${ListaRespostas[perguntaSorteada].r3}`
            document.getElementById("respostas2").innerHTML = `${ListaRespostas[perguntaSorteada].r2}`
            document.getElementById("respostas3").innerHTML = `${ListaRespostas[perguntaSorteada].r1}`
            document.getElementById("respostas4").innerHTML = `${ListaRespostas[perguntaSorteada].r4}`
            break
        case 4:
            document.getElementById("perguntaResultado").innerHTML = `${ListaRespostas[perguntaSorteada].p}`
            document.getElementById("imgP").src = `${ListaRespostas[perguntaSorteada].imgP}`
            document.getElementById("respostas1").innerHTML = `${ListaRespostas[perguntaSorteada].r1}`
            document.getElementById("respostas2").innerHTML = `${ListaRespostas[perguntaSorteada].r2}`
            document.getElementById("respostas3").innerHTML = `${ListaRespostas[perguntaSorteada].r3}`
            document.getElementById("respostas4").innerHTML = `${ListaRespostas[perguntaSorteada].r4}`
            break
    }
}

var contaC = 0

function validarResposta(el) {
    if (el.innerHTML == respostaCorreta) {
        respostaCerta()
        alert('Parabéns! Você acertou')
    } else {
        respostaErrada()
        alert('Você errou!!')
    }
    sorteio()
}

function respostaCerta() {
    contaC++
    document.getElementById("resultado").innerHTML = `Sua pontuação: ${contaC}`
}

function respostaErrada() {
    contaC--
    document.getElementById("resultado").innerHTML = `Sua pontuação: ${contaC}`
}

