
import Cadastro from "./components/Cadastro/Cadastro";
import CadastroVeiculo from "./components/CadastroVeiculo/CadastroVeiculo";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";



import PaginaInicial from "./components/PaginaInicial/PaginaInicial";
import styles from "./style/style"

export default function App()
{
  return(
    <div>
      <Header/>
      <PaginaInicial/>
      <Footer/>
    </div>
  )
}