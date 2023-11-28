import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/about.module.scss'

const AboutSection = () => {
    return (
        <section id='about' className={styles.container}>
            <div className={styles.content}>
                <Reveal>
                    <h3>Sobre mí</h3>
                </Reveal>
                <div className={styles.body}>
                    <div className={styles.text}>
                        <h4>Mi nombre es Manuel Diez de Oñate, soy un Desarrollador Full Stack. Estoy emocionado por asumir nuevos desafíos y seguir creciendo como desarrollador.</h4>
                        <h4>Mi conjunto de habilidades incluye experiencia en:</h4>
                        <h4>HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, Git y WordPress.</h4>
                    </div>
                    <div className={styles.image}></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection