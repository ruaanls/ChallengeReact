import styles from "../../CadastroVeiculo.module.css";
import img from "../../img/img-cadastro-veiculos.png"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { number, object, string } from "yup";


export default function CadastroVeiculo() {

    const schema = object({
        placa:string().required("Campo Obrigatório").min(7,"Sua Placa deve ter pelo menos 7 dígitos ").max(8,"Sua Placa deve ter 7 dígitos "),
        marca:string().required("Campo Obrigatório").min(2, "O nome da marca deve ter 2 ou mais caracteres"),
        modelo:string().required("Campo Obrigatório").min(1, "O nome do modelo deve ter mais que 1 caractere"),
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
                            <div className={styles.linhaContainer}>
                                <div className={styles.linha}>
                                    <input type="text" placeholder="Placa"  pattern="^(?:[A-Z]{3}-\d{4}|[A-Z]{3}[0-9][0-9A-Z ][0-9]{2})$" title="PLACA INVÁLIDA, digite sua placa corretamente conforme o padrão detran/Mercosul" className={styles.placa} {...register("placa")}/>
                                    <p>{errors.placa?.message}</p>
                                </div>
                                <div className={styles.linha}>
                                    <input type="text" placeholder="Marca"   className={styles.celular}  {...register("marca")}/>
                                    <p>{errors.marca?.message}</p>
                                </div>
                                
                            </div>

                            <div className={styles.linhaContainer}>
                                <div className={styles.linha}>
                                    <input type="text" placeholder="Modelo"  className={styles.nome}  {...register("modelo")}/>
                                    <p>{errors.modelo?.message}</p>
                                </div>
                                <div className={styles.linha}>
                                    <input type="text" placeholder="Ano"  pattern="[0-9]+$" className={styles.ano} {...register("ano")}/>
                                    <p>{errors.ano?.message}</p>
                                </div>
                                
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
