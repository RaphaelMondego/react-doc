import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div>
      <p>Você clicou {contador} {contador === 1 ? "vez" : "vezes"}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

export default Contador;
