
import { useState } from "react";
import Botao from "../Botao";
import { ITarefas } from "../Compartilhardo/interface/ITarefas"
import styles from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid'; 
interface FormularioProps{
    AddTarefas:(valor:ITarefas[])=>void
    
}

export default function Formulario({AddTarefas}:FormularioProps){

    const [tarefa,setTarefa] = useState('')
    const [tempo,setTempo]=useState("00:00:00")
    const[selecionado] = useState(false)
    const[completado] = useState(false)
    const[id, setID] = useState(uuidv4())


    function aoSalvar(evento:React.FormEvent<HTMLFormElement>){
        evento.preventDefault()
        AddTarefas([{
            tarefa,
            tempo, 
            selecionado,
            completado,
            id,
        }])
        setTarefa('')
        setTempo('')
        setID(uuidv4())
    }



    return(
        <form onSubmit={evento => aoSalvar(evento)} className={styles.novaTarefa}>
            <div className={styles.inputContainer}>
                <label htmlFor="tarefa">
                    Adicionar tarefa
                </label>
                <input 
                type="text" name="tarefa"
                id="tarifa"
                placeholder="o que você quer estudar"
                required
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <label>
                    Tempo
                </label>
                <input 
                type="time" 
                step= "1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                value={tempo}
                onChange={e => setTempo(e.target.value)}/>
            </div>
            <Botao>
                Adicionar
            </Botao>
        </form>
    )
}
