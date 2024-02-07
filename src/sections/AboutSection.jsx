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
                        <div>
                            <h4>Mi conjunto de habilidades incluye experiencia en:</h4>
                            <ul>
                                <li>
                                    <h4><strong>Front-end:</strong> HTML, CSS, JavaScript, React.js, Next.js, Tailwind, Astro y  Wordpress</h4>
                                </li>
                                <li>
                                    <h4><strong>Back-end:</strong> Node.js, Strapi, PHP, MongoDB y MySQL</h4>
                                </li>
                                <li>
                                    <h4><strong>Otros:</strong> Git, Notion y Figma</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection