//Selecionando o botão pelo ID
const contadorElemento = document.querySelector("#contador");
const aumentarN = document.querySelector("#aumentar");
const diminuirN = document.querySelector("#diminuir");
const zerarN = document.querySelector("#zerar");


//inicializando contador
let contador = 0;

//função que sera chamada quando o botao for clicado
aumentarN.addEventListener("click", aumentar);
function aumentar() {
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento paea clique do botão
diminuirN.addEventListener("click", diminuir);
function diminuir() {
    contador--;
    alerta() 
    contadorElemento.textContent = contador;
}

zerarN.addEventListener("click", zerar);
function zerar() {
    contador = 0;
    contadorElemento.textContent = contador;
}

function alerta() 
{
  if( contador < 0)
  {
    document.querySelector("#mostrar").innerHTML =
    `<div class="alert alert-danger fade show" role="alert">
    <span>  Não é possivel diminuir </span>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button
    </div>
    ` 
    contador = 0;
  }   
}