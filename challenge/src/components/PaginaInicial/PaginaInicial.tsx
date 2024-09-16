import { Link } from "react-router-dom";
import img from "../../../public/img/img-banner.png";
import bateria from "../../../public/img/img-bateria.png";
import revisao from "../../../public/img/img-revisao.png";
import oleo from "../../../public/img/img-troca-oleo.png";
import styles from "../../Pinicial.module.css";
export default function PaginaInicial() {
    return (
        <main>

            <div className={styles.containerInicio}>
                <div className={styles.inicial}>
                    <p>Centros Automotivos Porto</p>
                    <h1>O <span>lugar perfeito para</span> quem ama <span>carros</span></h1>
                    <p className={styles.textoHome}>Manutenções, revisões e pequenos reparos para quem tem seguro auto quanto para quem não tem.</p>
                    <button className={styles.botaoHome}><Link to={"/manutencao"}><h1>Agende um serviço</h1></Link></button>
                </div>
            </div>

            <div className={styles.containerConteudo}>
                <div className={styles.txtOpcoes}>
                    <h1>O que você quer fazer hoje?</h1>
                    <p>Resolva as questões referentes ao seu veículo</p>
                </div>

                <div className={styles.opcaoPrincipal}>
                    <button className="opcao"><Link to={"/manutencao"}><h1>Marcar Conserto</h1><p>Agende uma visita para consertar ou realizar pequenos reparos no seu veículo</p></Link></button>
                    <button className="opcao"><Link to={"/manutencao"}><h1>Realizar pré-diagnóstico</h1><p>Use nossa IA para ter um pré-diagnóstico e pré-orçamento</p></Link></button>
                    <button className="opcao"><Link to={"/cadastroVeiculo"}><h1>Cadastrar Veículos</h1><p>Cadastre o seu veículo para usar nossas outras funcionalidades</p></Link></button>
                </div>

                <div className={styles.containerMapa}>
                    <div className={styles.containerTxt}>
                        <h1>Encontre o <span>centro automotivo</span> mais próximo de você.</h1>
                        <p>Possuimos centros automotivos e oficinas credenciadas em toda grande São Paulo, confira no mapa ao lado.</p>
                    </div>
                    <div className="mapa">
                        <iframe src="https://www.google.com/maps/d/embed?mid=1_yvhH0-7oqZIQOjvno07EoN6m6mgxvg&ehbc=2E312F&noprof=1"></iframe>
                    </div>
                </div>
                <div className={styles.containerGeral}>
                    <div className={styles.bannerContainer}>
                        <div className={styles.bannerTxt}>
                            <h1>Tenha um <span>pré-diagnóstico</span> do seu problema com <span>orçamento</span> agora.</h1>
                            <p>Conte com o nosso assistente virtual para ter um pré diagnóstico com pré-orçamento</p>
                            <button><Link to={"/manutencao"}><h1>Fazer pré-análise agora.</h1></Link></button>
                        </div>
                        <img src={img} alt="" className={styles.bannerImg} />
                    </div>

                    <h1 className={styles.titulo}>Conheça alguns de nossos serviços</h1>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <img src={oleo} alt="IMG" />
                            <h1>Troca de Óleo</h1>
                            <p>Troca de óleo, lubrificação e freios</p>
                        </div>
                        <div className={styles.card}>
                            <img src={revisao} alt="IMG" />
                            <h1>Revisão Geral</h1>
                            <p>Revisão completa para você viajar com segurança</p>
                        </div>
                        <div className={styles.card}>
                            <img src={bateria} alt="IMG" />
                            <h1>Troca de Baterias</h1>
                            <p>Troca de baterias e demais serviços elétricos</p>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}