import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <Image
                    src="/logo.png"
                    alt='logo de mi marca personal'
                    width={75}
                    height={34}
                />
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/">Sobre mí</Link>
                    </li>
                    <li>
                        <Link href="/">Habilidades</Link>
                    </li>
                    <li>
                        <Link href="/">Contacto</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" >
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer