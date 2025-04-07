import { useState } from "react";

function Form(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");

    function mudarNome(event){
        setNome(event.target.value);
    }

    function mudarEmail(event){
        setEmail(event.target.value);
    }

    function mudarIdade(event){
        setIdade(event.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Digite seu nome" onChange={mudarNome} value={nome}/>
            <input type="email" placeholder="Digite seu email" onChange={mudarEmail} value={email}/>
            <input type="number" placeholder="Digite sua idade" onChange={mudarIdade} value={idade} />
            {nome && email && idade && (
            <p>Olá, {nome}! Seu email é {email} e você tem {idade} anos.</p> 
            )} {/*a frase só aparece quando a pessoa realmente digitar em todos os inputs*/}
        </div>
    );
}

export default Form;