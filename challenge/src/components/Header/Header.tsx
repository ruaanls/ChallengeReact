import img from "../../../public/img/logo-porto.png"

export default function Header()
{
    return(
        <header>
            <img src={img} alt="" />
            <nav>
                <p>Agendar</p>
                <p>Cadastrar Veículo</p>
                <p>Integrantes</p>
            </nav>
            <div>
                <button>Abra sua Conta</button>
                <p>Login</p>
            </div>
        </header>
    )
}
