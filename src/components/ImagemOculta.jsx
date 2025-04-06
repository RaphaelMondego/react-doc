import { useState } from "react";

function MostrarImagem(){
    const [mostrarImagem, setMostrarImagem] = useState(true);

    function alternarImagem(){
        setMostrarImagem(!mostrarImagem);
    }

    return(
        <div>
            <button onClick = {alternarImagem}>
                {mostrarImagem ? "Ocultar imagem" : "Mostrar imagem"}
            </button>

            {mostrarImagem && (
                <img src="/img/paisagem.jpeg" alt="Imagem exemplo" style={{marginTop: "20px"}}/>
            )}
        </div>
    );
}

export default MostrarImagem;