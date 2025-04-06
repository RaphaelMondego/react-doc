import { useState } from "react";

function Contador() {
  // Criando um estado chamado "contador", que começa em 0
  const [contador, setContador] = useState(0);

  // Função que será chamada ao clicar no botão
  function aumentar() {
    setContador(contador + 1); // atualiza o valor
  }

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={aumentar}>Clique aqui</button>
    </div>
  );
}

export default Contador;
