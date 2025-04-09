import { useState } from "react";

function DigaSuaIdade() {
  const [idade, setIdade] = useState(""); // idade: guarda o valor que o usuário digita no input.
  const [mostrarIdade, setMostrarIdade] = useState(false); // mostrarIdade: diz se a idade deve ser mostrada na tela (true ou false).

  // Atualiza o valor da idade quando o usuário digita
  function handleMudancaInput(event) {
    setIdade(event.target.value); // é o que foi digitado
  }

  // Alterna entre mostrar ou esconder a idade
  function handleCliqueBotao() {
    // Só mostra a idade se o campo não estiver vazio
    if (idade.trim() !== "") {
      setMostrarIdade(!mostrarIdade);
      setIdade(""); // limpa o input
    }
  }

  return (
    <div>
      <h3>Qual sua idade?</h3>

      <input
        type="number"
        placeholder="Digite sua idade"
        onChange={handleMudancaInput}
        value={idade}
      />

      <button onClick={handleCliqueBotao}>
        {mostrarIdade ? "Ocultar idade" : "Mostrar idade"}
      </button>

      {/* Renderiza a idade apenas se o estado mostrarIdade for true */}
      {mostrarIdade && <p>Sua idade é: {idade} anos</p>}
    </div>
  );
}

export default DigaSuaIdade;
