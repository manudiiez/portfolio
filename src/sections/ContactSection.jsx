import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/contact.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Form from '@/components/Form'

const ContactSection = () => {
    return (
        <section id='contact' className={styles.container}>
            <div className={styles.content}>
                <Reveal>
                    <h6>Contáctame</h6>
                </Reveal>
                <div className={styles.body}>
                    <Form />
                    <Reveal width='100%' overflow='visible'>
                        <div className={styles.info}>
                            <div className={styles.card}>
                                <h6>Información</h6>
                                <div className={styles.media}>
                                    <a href='https://mail.google.com/mail/' target='blanck'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <p>manudiiez123@gmail.com</p>
                                    </a>
                                    <a href='https://github.com/manudiiez' target='blanck'>
                                        <FontAwesomeIcon icon={faGithub} />
                                        <p>manudiiez</p>
                                    </a>
                                    <a href='https://www.linkedin.com/in/manuel-diez-de-o%C3%B1ate-31a322234/' target='blanck'>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                        <p>Manuel Diez de Oñate</p>
                                    </a>
                                    <a href={`${process.env.NEXT_PUBLIC_URI}/cv.pdf`} download="CVManuelDiezDeOñate">
                                        <FontAwesomeIcon icon={faFile} />
                                        <p>CV</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default ContactSection