
import { useState } from 'react';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import { ITarefas } from '../Components/Compartilhardo/interface/ITarefas';
import styles from './App.module.scss'
import Cornometro from '../Components/Cronometro';

function App() {

  const[tarefas,setTarefas] = useState <ITarefas[]>([])
  const[selecionado, setSelecionado] = useState<ITarefas>()
  

  function selecionarTarefa(tarefaSelecionada:ITarefas){
    console.log(tarefaSelecionada)
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function AddTarefas(tarefa:ITarefas[]){
    let novaLista = [...tarefas]
    novaLista.push(...tarefa)
    setTarefas(novaLista)
  }

  function finalizarTarefa(){
    if(selecionado){
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado:false,
            completado:true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario AddTarefas={AddTarefas}/>
      <Cornometro selecionado={selecionado} finalizarTarefa ={finalizarTarefa}/>
      <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa}/>
    </div>
  );
}

export default App;
