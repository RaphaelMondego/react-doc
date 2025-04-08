import { useState } from "react";

function GerenciarFilmes() {
  // Estado para armazenar o texto do input
  const [novoFilme, setNovoFilme] = useState("");

  // Estado para armazenar a lista de filmes
  const [filmes, setFilmes] = useState([]);

  // .trim() é um método que remove os espaços em branco no inicio e final de uma String.
  // Função que adiciona o filme na lista
  function adicionarFilme() {
    if (novoFilme.trim() !== "") { // Se novoFilme for diferente de vazio... 
      setFilmes([...filmes, novoFilme]); // adiciona o novo filme no array
      setNovoFilme(""); // limpa o campo do input
    }
  }

  return (
    <div>
      <h2>Gerenciador de Filmes 🎬</h2>

      <input
        type="text"
        value={novoFilme}
        onChange={(e) => setNovoFilme(e.target.value)}
        placeholder="Digite o nome do filme"
      />

      <button onClick={adicionarFilme} disabled={novoFilme.trim() === ""}> {/*disabled -> Evita que o botão funcione se o input estiver vazio*/}
        Adicionar Filme
      </button>

      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ul>
    </div>
  );
}

export default GerenciarFilmes;
