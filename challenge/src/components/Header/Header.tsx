
import { Link } from "react-router-dom";
import img from "../../../public/img/logo-porto.png";
import style from "../../header.module.css";

export default function Header()
{
    return(
        <header className={style.header}>
            <Link to={"/"}><img src={img} alt="" className={style.img}/></Link>
            <nav className={style.menu}>
                <Link to={"/manutencao"}><p>Agendar</p></Link>
                <Link to={"/CadastroVeiculo"}><p>Cadastrar Veículo</p></Link>
                <Link to={"/manutencao"}><p>Integrantes</p></Link>
            </nav>
            <div className={style.loginHeader}>
                <button className={style.botao}><Link to={"/cadastro"}>Abra sua Conta</Link></button>
                <Link to={"/login"}><p>Login</p></Link>
                
                
            </div>
        </header>
    )
}
