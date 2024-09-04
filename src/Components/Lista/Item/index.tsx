import { ITarefas } from '../../Compartilhardo/interface/ITarefas'
import styles from './Item.module.scss'

interface ItemProps extends ITarefas{
    selecionarTarefa:(valor:ITarefas)=>void
}

export default function Item({tarefa,tempo,completado,id,selecionado,selecionarTarefa}:ItemProps){
    
    return(
        <li className={`${styles.item} ${selecionado ? styles.itemSelecionado : ""} ${completado ? styles.itemCompletado : ""}`} onClick={()=> !completado && selecionarTarefa({
            tarefa,
            tempo, 
            selecionado,
            completado,
            id})}>
                    <h3>
                        {tarefa}
                    </h3>
                    <span>
                        {tempo}
                    </span>
                    {completado && <span className={styles.concluido}></span>}
                </li>
    )
}