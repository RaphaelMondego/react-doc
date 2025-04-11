import { useState } from "react";

function Tarefas(){
    const [tarefa, setTarefa] = useState("");

    function mudarTarefa(event){
        setTarefa(event.target.value);
    }

    return(
        <div>
            <h1>Mostrar Tarefas</h1>

            <input type="text" placeholder="Digite aqui" onChange={mudarTarefa} value={tarefa} />
            <p>Sua tarefa: {tarefa}</p>
        </div>
    );
}

export default Tarefas;