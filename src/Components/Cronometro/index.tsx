import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../Common/utils/time";
import Botao from "../Botao";
import { ITarefas } from "../Compartilhardo/interface/ITarefas";
import styles from './Cronometro.module.scss'
import Relogio from "./Relogio";

interface CronometroProps{
    selecionado:ITarefas|undefined
    finalizarTarefa:()=>void
}

export default function Cornometro({selecionado,finalizarTarefa}:CronometroProps){
    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicio o cronometro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick = {()=> regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}