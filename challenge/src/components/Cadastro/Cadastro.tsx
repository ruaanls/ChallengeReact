import styles from '../../style/Cadastro.module.css';

export default function Cadastro() {
    return (
        <main>
            <div className={styles.imagemLogin}>
                <img src="/img/logo-porto.png" alt="Centro Automotivo" />
            </div>

            <div className={styles.AcessoContaConteiner}>
                <div className={styles.LoginDiv}>
                    <div className={styles.Alinhar}>
                        <h2>Cadastro de Conta</h2>
                        <div className={styles.GridCadastro}>
                            <form>
                                <input type="text" placeholder="Nome Completo" />
                                <input type="email" placeholder="Email" />
                            </form>
                            <form>
                                <input type="text" placeholder="CPF" />
                                <input type="text" placeholder="Celular" />
                            </form>
                            <form>
                                <input type="password" placeholder="Senha" />
                                <input type="password" placeholder="Confirmar Senha" />
                            </form>
                            <button>Criar Conta</button>
                        </div>
                    </div>
                </div>
                <div className={styles.LoginFooterConteiner}>
                    <div className={styles.EsqueciSenha}>
                        <h3>Esqueci Minha Senha</h3>
                    </div>
                    <div className={styles.PrecisoAjuda}>
                        <h3>Já Possuo Login</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}
