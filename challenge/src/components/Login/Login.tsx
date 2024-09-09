import styles from '../../Login.module.css';
import img from "../../img/img-login.png";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { number, object, string } from "yup";

export default function Login() {

    const schema = object({
        cpf:string().required("Campo Obrigatório").min(14,"Seu CPF deve ter 14 dígitos ").max(14,"Seu CPF deve ter 14 dígitos"),
        senha2:string().required("Campo Obrigatório").min(5, "Sua senha deve ter 5 dígitos ou mais")


    })
    
    const {register, handleSubmit: onSubmit, watch, formState: {errors}} = useForm({resolver:yupResolver(schema)});
    
    const handleSubmit = (dados:any) => {
           console.log(dados);
    }

    return (
        <main>
            <div className={styles.cadastroGeral}>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.containerExternoForm}>
                    <div className={styles.containerForm}>
                        <h1>Bem-vindo de volta :)</h1>
                        <form onSubmit={onSubmit(handleSubmit)}>
                            <div className={styles.linha}>
                                <input type="text" placeholder="CPF"   pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className={styles.cpf} {...register("cpf")}/>
                                <p>{errors.cpf?.message}</p>
                            </div>
                            <div className={styles.linha}>
                                <input type="password" placeholder="Senha"  {...register("senha2")}/>
                                <p>{errors.senha2?.message}</p>
                            </div>
                            <button type='submit'>Entrar</button>
                        </form>
                        
                        
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
