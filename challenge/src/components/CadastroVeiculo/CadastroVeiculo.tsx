import styles from '../../style/CadastroVeiculo.module.css';

export default function CadastroVeiculo() {
    return (
        <main>
            <div className={styles.AcessoContaConteiner}>
                <div className={styles.textVeiculo}>
                    <h1>Cadastre seu Veículo</h1>
                    <h3>Com o seu veículo cadastrado em nosso sistema<br />Você pode agendar consertos e usar o pré-diagnóstico com nossa IA.</h3>
                </div>
                <div className={styles.LoginDiv}>
                    <div className={styles.Alinhar}>
                        <h2>Cadastro de Veículo</h2>
                        <div className={styles.GridCadastro}>
                            <form>
                                <input type="number" placeholder="Placa do Veículo" />
                                <input type="text" placeholder="Modelo" />
                            </form>
                            <form>
                                <input type="text" placeholder="Marca" />
                                <input type="number" placeholder="Ano" />
                            </form>
                            <button>Cadastrar Veículo</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
