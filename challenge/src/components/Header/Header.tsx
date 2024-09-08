
import img from "../../../public/img/logo-porto.png";
import style from "../../header.module.css";

export default function Header()
{
    return(
        <header className={style.header}>
            <img src={img} alt="" />
            <nav className={style.menu}>
                <a href="#"><p>Agendar</p></a>
                <a href="#"><p>Cadastrar Veículo</p></a>
                <a href="#"><p>Integrantes</p></a>
            </nav>
            <div className={style.loginHeader}>
                <button>Abra sua Conta</button>
                <a href="#"><p>Login</p></a>
                
            </div>
        </header>
    )
}
