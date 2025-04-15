import {useState, useEffect} from 'react';

function BotaoVisivel(){
    const [botao, setBotao] = useState(true);

    useEffect(() => {
        const sumir = setTimeout(() => {
            setBotao(false);
        }, 5000);

        return () => clearTimeout(sumir); 
    }, []);

    return (
        <div>
            {botao && <button>Sumindo em 5s</button>}
        </div>
    );
}

export default BotaoVisivel;