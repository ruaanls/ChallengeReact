import styles from "../../CadastroVeiculo.module.css";
import img from "../../img/img-cadastro-veiculos.png"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { number, object, string } from "yup";


export default function CadastroVeiculo() {

    const schema = object({
        placa:string().required("Campo Obrigatório").min(7,"Sua Placa deve ter 7 dígitos ").max(7,"Sua Placa deve ter 7 dígitos "),
        marca:string().required("Campo Obrigatório").min(3, "O nome da marca deve ter mais que 3 caracteres"),
        modelo:string().required("Campo Obrigatório").min(3, "O nome do modelo deve ter mais que 3 caracteres"),
        ano:string().required("Campo Obrigatório").min(4, "O ano deve ter 4 dígitos").max(4, "O ano deve ter 4 dígitos")
    })
    
    const {register, handleSubmit: onSubmit, watch, formState: {errors}} = useForm({resolver:yupResolver(schema)});
    
    const handleSubmit = (dados:any) => {
           console.log(dados);
    }



    return (
        <main>
           
            <div className={styles.cadastroGeral}>
                
                <div className={styles.containerExternoForm}>
                    <h1 className={styles.textos}>Cadastre seu Veículo</h1>
                    <div className={styles.divTextosp}>
                        <p className={styles.textosp}>Com seu veículo cadastrado em nosso sistema você tem acesso liberado para agendar consertos e fazer um pré-diagnóstico com nossa IA.</p>
                    </div>
                    
                    <div className={styles.containerForm}>
                        <h1>Cadastro de veículo</h1>
                        <form onSubmit={onSubmit(handleSubmit)} className={styles.form}>
                            <div className={styles.linha}>
                                <input type="text" placeholder="Placa"  className={styles.placa}/>
                                <p>{errors.placa?.message}</p>
                                <input type="text" placeholder="Marca"   className={styles.celular} />
                                <p>{errors.marca?.message}</p>
                            </div>
                            <div className={styles.linha}>
                                <input type="text" placeholder="Modelo"  className={styles.nome} />
                                <p>{errors.modelo?.message}</p>
                                <input type="text" placeholder="Ano"  pattern="[0-9]+$" className={styles.ano}/>
                                <p>{errors.ano?.message}</p>
                            </div>
                            <button type="submit">Cadastrar Veículo</button>
                        </form>
                        
                        
                        
                    </div>
                    
                </div>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
            </div>
        </main>
    );
}
