import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/home.module.scss'
import Link from 'next/link'

const HomeSection = () => {
    return (
        <section id='home' className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div>
                        <p>Hola,</p>
                        <p>Soy Manuel,</p>
                        <Reveal>
                            <p className='subtitle'>Full Stack Developer</p>
                        </Reveal>
                    </div>
                    <h1>Diseñando soluciones digitales con pasión, precisión y el deseo de marcar la diferencia en el mundo.</h1>
                    <Link href='/#contact'>CONTÁCTAME</Link>
                </div>
                <div className={styles.image}></div>
            </div>
        </section>
    )
}

export default HomeSection