import { ITarefas } from "../Compartilhardo/interface/ITarefas"
import Item from "./Item"
import styles from './Lista.module.scss'

interface listaProps{
  tarefas:ITarefas[]
  selecionarTarefa:(valor:ITarefas)=>void
}

export default function Lista({tarefas,selecionarTarefa}:listaProps){
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul >
            {tarefas.map((tarefa, index) => 
            <Item {...tarefa} key={index} selecionarTarefa={selecionarTarefa}/>
            )}
            </ul>
        </aside>
    )
}