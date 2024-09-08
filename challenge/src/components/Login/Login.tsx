import styles from '../../style/Login.module.css';

export default function Login() {
    return (
        <main>
            <div className={styles.imagemLogin}>
                <img src="/img/logo-porto.png" alt="Centro Automotivo" />
            </div>

            <div className={styles.AcessoContaConteiner}>
                <div className={styles.LoginDiv}>
                    <div className={styles.Alinhar}>
                    <h2>Acesse sua Conta</h2>
                    <form>
                        <input type="text" placeholder="CPF"/>
                        <input type="password" placeholder="Senha" />
                    </form>
                    <button className={styles.button}>Criar Conta</button>
                    </div>
                </div>
                
                <div className={styles.LoginFooterConteiner}>
                    <div className={styles.EsqueciSenha}>
                        <img src="" alt="" />
                        <h3>Esqueci Minha Senha</h3>
                    </div>
                    <div className={styles.PrecisoAjuda}>
                        <img src="" alt="" />
                        <h3>Preciso de Ajuda</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}
