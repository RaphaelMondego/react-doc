import { useState } from "react";

function Contagem(){
    const [contagem,setContagem] = useState(0);

    function diminuir(){
        setContagem(contagem- 1);
    }

    function aumentar(){
        setContagem(contagem + 1);
    }

    return(
        <div>
            <p>Você clicou {contagem} vezes.</p>
            <button onClick={diminuir}>Diminua</button>
            <button onClick={aumentar}>Aumente</button>
        </div>
    );
}

export default Contagem;