import { useEffect } from "react";

function Alerta(){
    useEffect(() => {
        const sumir = setTimeout(() => {
            alert("Bem vindo ao sistema!")
        }, 3000);

        return () => {
            clearTimeout(sumir);
        }
    }, []);

    return (
        <div></div>
    );
}



export default Alerta;