import { useEffect, useState } from "react";

function CarregarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);       // Dados simulados da "API"
  const [carregando, setCarregando] = useState(true); // Mostra o "Carregando..."
  const [erro, setErro] = useState(false);            // Mostra erro se falhar

  useEffect(() => {
    const timer = setTimeout(() => {
      const sucesso = Math.random() > 0.3; // 70% de chance de sucesso

      if (sucesso) {
        setUsuarios([
          { id: 1, nome: "Alice" },
          { id: 2, nome: "Bob" },
          { id: 3, nome: "Charlie" },
        ]);
        setErro(false);
      } else {
        setErro(true); // Simula erro
      }

      setCarregando(false); // Finaliza o carregamento
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Renderização condicional:
  if (carregando) {
    return <p>🔄 Carregando usuários...</p>;
  }

  if (erro) {
    return <p>❌ Erro ao carregar os usuários. Tente novamente mais tarde.</p>;
  }

  return (
    <div>
      <h3>👥 Lista de Usuários:</h3>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarregarUsuarios;
