import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDelete from "./componentes/deletatarefa.js"
    
    const criarTarefa = (evento) => {
    
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value//deu um valor para o input

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`// esse codigo é uma stringe pois tamos colocando html no js e dando uma stringe com o ${} entre os 'p'.

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDelete())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
 
novaTarefa.addEventListener('click', criarTarefa)