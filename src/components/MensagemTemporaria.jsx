import {useState, useEffect} from 'react';

function MensagemTemporaria(){
    const [visivel, setVisivel] = useState(true) // começa visível

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisivel(false); // após 3s, oculta
        }, 5000); // 5s = 5000ms

        return () => clearTimeout(timer);
    }, []); // array vazio = executa só uma vez quando o componente for montado

    return(
        <div>
            {visivel && <p>Mensagem visível por 5 segundos</p>}
        </div>
    )
}

export default MensagemTemporaria;