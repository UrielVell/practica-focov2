let switchOnn = false

const btn = document.querySelector(".switch")
const focoArriba = document.querySelector(".foco-arriba")
const focoAbajo = document.querySelector(".foco-abajo")

btn.addEventListener("click", function () {
    if (switchOnn) {
    btn.classList.remove("encendido")
    focoArriba.classList.remove("focoOn")
    focoAbajo.classList.remove("focoOn")
    } else {
    btn.classList.add("encendido");
    focoArriba.classList.add("focoOn")
    focoAbajo.classList.add("focoOn")
    }
    switchOnn = !switchOnn
    });