const visor = document.querySelector("#visor");

// adicionando ouvinte de eventos para tecla precionada
// e exibindo qual tecla foi precionada
document.addEventListener("keypress", (event) => {
    if (event.key === "d" || event.key === "D") {
        visor.textContent = `Tecla D precionada`
    } else if (event.key === "a" || event.key === "A") {
        visor.textContent = `Tecla A precionada`
    }else{
        visor.textContent = `Tecla ${event.key} Precionada`
    }
})