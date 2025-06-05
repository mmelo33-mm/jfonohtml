const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")
const resp3 = document.querySelector("h5")

frm.addEventListener("submit",(e)=>{
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)
    const entrada = Math.floor(preco/2)
    const parcela = Math.floor(entrada/12)
    resp1.innerText = `Veículo: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de: R$${parcela.toFixed(2)}`
    e.preventDefault()

})