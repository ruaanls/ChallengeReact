import styles from "../../Cadastro.module.css"
import img from "../../img/img-login.png";

export default function Cadastro() {
    return (
        <main>
            <div className={styles.cadastroGeral}>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.containerExternoForm}>
                    <div className={styles.containerForm}>
                        <h1>Crie sua conta Porto</h1>
                        <form className={styles.form}>
                            <input type="text" placeholder="CPF" required minLength={11} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className={styles.cpf}/>
                            <input type="text" placeholder="Nome Completo" required minLength={10} className={styles.nome} />
                            
                        </form>
                        <form className={styles.form}>
                            <input type="text" placeholder="Celular" required minLength={11} className={styles.celular} />
                            <input type="email" placeholder="Email" required minLength={10} pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
                        </form>
                        <form className={styles.form}>
                            <input type="password" placeholder="Senha" required minLength={5} />
                            <input type="password" placeholder="Confirmar Senha" />
                        </form>
                        <button>Criar Conta</button>
                        
                    </div>
                    
                </div>
            </div>
                
            
            
        
        </main >
    );
}
