import Mensagem from "./components/Mensagem";
import Frase from "./components/Frase";
import Botao from "./components/Botao";
import MensagemClick from "./components/MensagemClick";

function App(){
  return(
    <div>
      <Mensagem nome = "Raphael" />
      <Frase clima = "chuvoso" />
      <Botao />
      <MensagemClick />
    </div>
  );
}

export default App;