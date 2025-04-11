import { useState } from "react";

function Tarefas(){
    const [tarefa, setTarefa] = useState("");
    const [listaTarefas, setListaTarefas] = useState([]);

    function adicionarTarefa(){
        if(tarefa.trim() !== ""){ // se tarefa for diferente de vazio...
            setListaTarefas([...listaTarefas, tarefa]);
            setTarefa(""); //limpa o input
        }
    }

    return(
        <div>
            <h1>Mostrar Tarefas</h1>

            <input type="text" placeholder="Digite aqui" onChange={(e) => setTarefa(e.target.value)} value={tarefa} />
            
            <button onClick={adicionarTarefa} disabled={tarefa.trim() === ""}> {/*disabled -> Evita que o botão funcione se o input estiver vazio*/}
                Adicionar Tarefa
            </button>

            <ul>
                {listaTarefas.map((tarefass, index) =>
                    <li key = {index}>{tarefass}</li>
                )}
            </ul>

        </div>
    );
}

export default Tarefas;