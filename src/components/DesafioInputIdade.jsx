import { useState } from "react";

function Idade(){
    const [ano, setAno] = useState(""); // começa com a idade vazia

    function mudarIdade(event){
        setAno(event.target.value);  //pega o valor atual do input
    }

    return(
        <div>
            <input type="number" 
            placeholder="Digite sua idade"
            onChange={mudarIdade} // toda vez que digita no input, chama a função
            value={ano} />
            
            <p>{ano && <p>Você tem {ano} anos de idade!</p>} {/*a mensagem só aparece quando a pessoa realmente digitar algo*/}
            </p>
        </div>
    );
}

export default Idade;