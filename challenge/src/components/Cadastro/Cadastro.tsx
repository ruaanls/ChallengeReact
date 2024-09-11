import React, { useState } from "react";
import styles from "../../Cadastro.module.css"
import img from "../../img/img-login.png";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { number, object, string } from "yup";



export default function Cadastro() {
    const schema = object({
        cpf:string().required("Campo Obrigatório").min(11,"Seu CPF deve ter 11 dígitos ").max(14,"Seu CPF deve ter no máximo 14 dígitos"),
        nome:string().required("Campo Obrigatório").min(3,"Seu deve ter mais que 3 letras "),
        celular:string().required("Campo Obrigatório").min(11,"Seu celular deve ter 11 números "), 
        email:string().required("Campo Obrigatório"),
        senha1:string().required("Campo Obrigatório").min(5, "Sua senha deve ter 5 dígitos ou mais"),
        senha2:string().required("Campo Obrigatório").min(5, "Sua senha deve ter 5 dígitos ou mais")


    })
    
    const {register, handleSubmit: onSubmit, watch, formState: {errors}} = useForm({resolver:yupResolver(schema)});
    const [criarDiv, setCriarDiv] = useState(false);
    const [criarDivSenhas, setDivSenhas] = useState(false);
    
    const handleSubmit = (dados:any) => {

        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const cpfInput = dados.cpf; 

        const cpfExiste = storedUsers.some((user: { cpf: any; }) => user.cpf === cpfInput);
        const senhasIguais = storedUsers.some(()=> dados.senha1 != dados.senha2)
        console.log(senhasIguais)
        console.log(cpfExiste)
        if (cpfExiste || senhasIguais) {
            if(senhasIguais == true)
            {
                setDivSenhas(true);
            }
            else
            {
                setCriarDiv(true);
            }
            
            setTimeout(() => {
                window.location.reload();
            }, 3000);



        
        } else {
            storedUsers.push(dados);
            localStorage.setItem('users', JSON.stringify(storedUsers));
            alert('Usuário adicionado com sucesso!');
        }
        
    
    }
    

    return (
        <main>
            <div className={styles.cadastroGeral}>
                <div className={styles.containerImg}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.containerExternoForm}>
                    <div className={styles.containerForm}>
                        <h1>Crie sua conta Porto</h1>
                        {criarDiv && <h1 className={styles.error}> Cpf Já Cadastrado em Sistema</h1>}
                        {criarDivSenhas && <h1 className={styles.error}>Suas Senhas não são Iguais, Tente Novamente</h1>}

                        <form onSubmit={onSubmit(handleSubmit)} className={styles.form}>
                            <div className={styles.linha}>
                                <div className={styles.formulario}>
                                    <input type="text" placeholder="CPF"   pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="CPF INVÁLIDO, use este padrão: 111.111.111-11"  className={styles.cpf} {...register("cpf")}/>
                                    <p>{errors.cpf?.message}</p>
                                </div>
                                <div className={styles.formulario}>
                                    <input type="text" placeholder="Nome Completo"   className={styles.nome} {...register("nome")} />
                                    <p>{errors.nome?.message}</p>
                                </div>
                                
                            </div>
                            <div className={styles.linha}>
                                <div className={styles.formulario}>
                                    <input type="text" placeholder="Celular"   className={styles.celular} {...register("celular")}/>
                                    <p>{errors.celular?.message}</p>
                                </div>
                                <div className={styles.formulario}>
                                    <input type="email" placeholder="Email"  title="E-MAIL INVÁLIDO, use este padrão: aaaaa@aaaa.aaa.aa" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" {...register("email")}/>
                                    <p>{errors.email?.message}</p>
                                </div>
                                
                            </div>
                            <div className={styles.linha}>
                                <div className={styles.formulario}>
                                    <input type="password" placeholder="Senha"   {...register("senha1")} className={styles.senha}/>
                                    <p>{errors.senha1?.message}</p>
                                </div>
                                <div className={styles.formulario}>
                                    <input type="password" placeholder="Confirmar Senha"   {...register("senha2")}/>
                                    <p>{errors.senha2?.message}</p>
                                </div>
                                
                            </div>
                            
                            <div className={styles.botao}>
                                <button type="submit">Criar Conta</button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </div>
                
            
            
        
        </main >
    );
}
