import Mensagem from "./components/Mensagem";
import Frase from "./components/Frase";
import Botao from "./components/Botao";
import MensagemClick from "./components/MensagemClick";
import MostrarOcultar from "./components/MostrarOcultar";
import Input from "./components/Input";
import Contador from "./components/Contador";
import ImagemOculta from "./components/ImagemOculta";

function App(){
  return(
    <div>
      <Mensagem nome = "Raphael" />
      <Frase clima = "chuvoso" />
      <Botao />
      <MensagemClick />
      <Contador />
      <Input />
      <MostrarOcultar />
      <ImagemOculta />
    </div>
  );
}

export default App;