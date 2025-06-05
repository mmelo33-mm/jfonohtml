// criar uma referencia ao form e as elementos h3 e h4 (resposta)

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


// criar um "ouvinte" de evento, acionado com o botão submit
frm.addEventListener("submit",(e)=>{
    const titulo = frm.inTitulo.value //"frm" vai pegar do formulario, "inTitulo" vai pegar da caixa do titulo e "value" pega o valor digitado
    const duracao = Number(frm.inDuracao.value)
    const horas = Math.floor(duracao/60)
    const minutos = duracao % 60
    resp1.innerText = titulo //exibir as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    e.preventDefault() //evita o envio                            
})