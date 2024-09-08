import img from "../../../public/img/logo-porto.png"
import styles from "../../footer.module.css"
export default function Footer()
{
    return(
        <footer className={styles.footer}>
            <img src={img} alt="" className={styles.img} />
            <h1> | Centro Automotivo <span>Porto</span></h1>
        </footer>
    )
}