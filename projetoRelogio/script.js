const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const funcionarRelogio = setInterval(() => {
    const dataAtual = new Date()
    horas.textContent = dataAtual.getHours()
    minutos.textContent = dataAtual.getMinutes()
    segundos.textContent = dataAtual.getSeconds()
})