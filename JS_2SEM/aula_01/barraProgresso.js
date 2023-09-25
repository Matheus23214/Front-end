var barraProgresso = document.querySelector('.progress')
barraProgresso.style.display = "none";

 function animarBarraProgresso()
 {
    var progress = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function()
    {
        if(progress > 100)
        {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML =
            `<div class="alert alert-success fade show" role="alert">
            <span>  Bem vindo ao sesi </span>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button
            </div>
            ` 
        }
        else
        {
            progress++;
            barra.style.width =progress +"%";
        }
    }, 50);
 }