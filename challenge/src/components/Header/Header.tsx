
import { Link } from "react-router-dom";
import img from "../../../public/img/logo-porto.png";
import style from "../../header.module.css";
import { useEffect, useState } from "react";

export default function Header()
{
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem("nomeUsuario"); // Obtém o nome do usuário do localStorage
        if (nome) {
            setNomeUsuario(nome); // Define o estado com o nome do usuário
        }
    }, []);

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
                {nomeUsuario ? (
                    <p>{nomeUsuario}</p> // Exibe o nome do usuário se ele estiver logado
                ) : (
                    <Link to={"/login"}><p>Login</p></Link> // Exibe "Login" caso não tenha usuário logado
                )}
                
                
            </div>
        </header>
    )
}
