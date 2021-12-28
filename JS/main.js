import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDelete from "./componentes/deletatarefa.js"
    

    const handleNovoItem = (evento) => {
        evento.preventDefault()
        
        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value//deu um valor para o input

        const calendario = document.querySelector('[data-form-date]')
        const data = moment(calendario.value)

        const dataFormatada= data.format('DD/MM/YYYY')

        const dados = {
            valor,dataFormatada
        }

    const criaTarefa = criarTarefa(dados)

        lista.appendChild(criaTarefa)

        sessionStorage.setItem("tarefas", JSON.stringify(dados))

        input.value = " "
    }

    const criarTarefa = ({valor,dataFormatada}) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${dataFormatada}*${valor}</p>`// esse codigo é uma stringe pois tamos colocando html no js e dando uma stringe com o ${} entre os 'p'.

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDelete())

    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')
 
novaTarefa.addEventListener('click', handleNovoItem)