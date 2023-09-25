 function Enviar()
 {
    var Mostrar = document.getElementById('mostrar')
    var Nome = document.querySelector(".Nome")
    var idade = document.querySelector(".Idade")
    var Cidade = document.querySelector(".Cidade")

    Nome.classList.remove("is-invalid")
    idade.classList.remove("is-invalid")
    Cidade.classList.remove("is-invalid")

    Mostrar.innerHTML = ""

    if(Nome.value == "" )
    {
        Mostrar.innerHTML =
        `<div class = "alert alert-danger fade show w-100 mt-3" role="alert">

        <span> Preencha o nome com um valor válido </span>
        <button type="button" classe="btn-close" data-bs-dismiss="alert"></button>
        </div>

        `
        Nome.classList.add("is-invalid")
    }

    if( idade.value == "" || idade.value > 130 || idade.value < 0 )
    {
        Mostrar.innerHTML =
        `<div class = "alert alert-danger fade show w-100 mt-3" role="alert">

        <span> preencha a idade com um numero valido </span>
        <button type="button" classe="btn-close" data-bs-dismiss="alert"></button>
        </div>

        `
        idade.classList.add("is-invalid")

    }

    if(Cidade.value =""   )
    {
        Mostrar.innerHTML =
        `<div class = "alert alert-danger fade show w-100 mt-3" role="alert">

        <span> Preencha a cidade com um valor válido </span>
        <button type="button" classe="btn-close" data-bs-dismiss="alert"></button>
        </div>

        `
        Cidade.classList.add("is-invalid")

    }

    if( idade.value != "" && Cidade.value != "" && Nome.value != "")
    {

        Mostrar.innerHTML =
        `<div class = "alert alert-success fade show w-100 mt-3" role="alert">

        <span> ${Nome}, ${idade},${Cidade} </span>
        <button type="button" classe="btn-close" data-bs-dismiss="alert"></button>
        </div>

        `
    }

 }
