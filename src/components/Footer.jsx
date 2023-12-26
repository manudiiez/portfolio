import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import CopyLink from './CopyLink'


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

                        <Link href="/#home">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/#projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/#about">Sobre mí</Link>
                    </li>
                    <li>
                        <Link href="/#skills">Habilidades</Link>
                    </li>
                    <li>
                        <Link href="/#contact">Contacto</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://github.com/manudiiez" target="blank" >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <CopyLink className={styles.svg}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </CopyLink>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/manuel-diez-de-o%C3%B1ate-31a322234/" target="blank" >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer