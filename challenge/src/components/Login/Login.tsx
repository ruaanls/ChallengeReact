import styles from '../../Login.module.css';
import img from "../../img/img-login.png";

export default function Login() {
    return (
        <main>
            <div className={styles.cadastroGeral}>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.containerExternoForm}>
                    <div className={styles.containerForm}>
                        <h1>Bem-vindo de volta :)</h1>
                        <form className={styles.form}>
                            <input type="text" placeholder="CPF" required minLength={11} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className={styles.cpf}/>
                        </form>
                        <form className={styles.form}>
                            <input type="password" placeholder="Senha" required minLength={5} />
                        </form>
                        <button>Entrar</button>
                        
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
