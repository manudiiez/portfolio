import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/contact.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const ContactSection = () => {
    return (
        <section id='contact' className={styles.container}>
            <div className={styles.content}>
                <Reveal>
                    <h6>Contáctame</h6>
                </Reveal>
                <div className={styles.body}>
                    <div className={styles.text}>
                        <p>No dudes en contactarme en cualquier momento. Te responderé tan pronto como sea posible.</p>
                        <form>
                            <div>
                                <input type="text" required name='name' />
                                <label htmlFor="name">Nombre</label>
                            </div>
                            <div>
                                <input type="text" required name='email' />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div>
                                <textarea required rows="5"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button>ENVIAR</button>
                        </form>
                    </div>
                    <Reveal width='100%' overflow='visible'>
                        <div className={styles.info}>
                            <div className={styles.card}>
                                <h6>Información</h6>
                                <div className={styles.media}>
                                    <a href='#' target='blanck'>
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
                                    <a href='http://localhost:3000/cv.pdf' download="CVManuelDiezDeOñate">
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