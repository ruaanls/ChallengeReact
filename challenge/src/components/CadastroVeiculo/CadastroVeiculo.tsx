import styles from "../../CadastroVeiculo.module.css";
import img from "../../img/img-cadastro-veiculos.png"
export default function CadastroVeiculo() {
    return (
        <main>
            {/* 
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
             */}
            


            
            <div className={styles.cadastroGeral}>
                
                <div className={styles.containerExternoForm}>
                    <h1 className={styles.textos}>Cadastre seu Veículo</h1>
                    <div className={styles.divTextosp}>
                        <p className={styles.textosp}>Com seu veículo cadastrado em nosso sistema você tem acesso liberado para agendar consertos e fazer um pré-diagnóstico com nossa IA.</p>
                    </div>
                    
                    <div className={styles.containerForm}>
                        <h1>Cadastro de veículo</h1>
                        <form className={styles.form}>
                            <input type="text" placeholder="Placa" required className={styles.placa}/>
                            <input type="text" placeholder="Marca" required minLength={11} className={styles.celular} />
                            
                        </form>
                        <form className={styles.form}>
                            
                            <input type="text" placeholder="Modelo" required minLength={10} className={styles.nome} />
                            <input type="text" placeholder="Ano" required minLength={10} pattern="[0-9]+$" className={styles.ano}/>
                        </form>
                        <button>Cadastrar Veículo</button>
                        
                    </div>
                    
                </div>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
            </div>
        </main>
    );
}
