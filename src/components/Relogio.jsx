import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Limpeza (quando o componente for destruído)
    return () => clearInterval(intervalo);
  }, []); // array vazio = executa apenas 1 vez (como componentDidMount)

  return (
    <div>
      <h2>Horário atual:</h2>
      <p>{hora}</p>
    </div>
  );
}

export default Relogio;
