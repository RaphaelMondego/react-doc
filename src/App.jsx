import Mensagem from "./components/Mensagem";
import Frase from "./components/Frase";
import Botao from "./components/Botao";
import MensagemClick from "./components/MensagemClick";
import MostrarOcultar from "./components/MostrarOcultar";
import Input from "./components/Input";
import Contador from "./components/Contador";
import ImagemOculta from "./components/ImagemOculta";
import Contagem from "./components/Contagem";
import DesafioInputIdade from "./components/DesafioInputIdade";
import FormularioCadastro from "./components/FormularioCadastro";
import Fruta from "./components/Fruta";
import ListaFilmes from "./components/ListaFilmes";
import GerenciarFilmes from "./components/GerenciarFilmes";
import Times from "./components/Time";
import MostrarIdade from "./components/MostrarIdade";
import MudarTarefa from "./components/MostrarTarefa";
import Relogio from "./components/Relogio";
import MensagemTemporaria from "./components/MensagemTemporaria";
import BotaoVisivel from "./components/BotaoVisivel";
import Alerta from "./components/Alerta";
import Saudacao from "./components/Saudacao";
import CarregarUsuarios from "./components/CarregarUsuarios";

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
      <Contagem />
      <DesafioInputIdade />
      <FormularioCadastro />
      <Fruta />
      <ListaFilmes />
      <GerenciarFilmes />
      <Times />
      <MostrarIdade />
      <MudarTarefa />
      <Relogio />
      <MensagemTemporaria />
      <BotaoVisivel />
      <Alerta />
      <Saudacao nome = "Raphael"/>
      <CarregarUsuarios />
    </div>
  );
}

export default App;