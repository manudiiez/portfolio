import SkillCard from '@/components/SkillCard'
import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/skills.module.scss'

const SkillsSection = () => {
  return (
    <section id='skills' className={styles.container}>
        <div className={styles.content}>
          <Reveal>
            <h4>Mis habilidades</h4>
          </Reveal>
            <div className={styles.body}>
                <SkillCard image="/skill-icon1.png" title="Desarrollo de Software" desc="Desarrollo de sistemas que sean fáciles de usar, rápidos y accesibles. Desarrollos completamente responsivos para utilizar en todos los dispositivos." />
                <SkillCard image="/skill-icon2.png" title="Diseño de Software" desc="Diseñar sistemas de software eficientes, escalables y seguros, incluyendo la arquitectura de software, la estructura de datos y la planificación de bases de datos" />
                <SkillCard image="/skill-icon4.png" title="Integración de Sistemas" desc="Integración de mejoras y nuevas funcionalidades a sistemas existentes, garantizando que todo el software y los sistemas trabajen en armonía." />
                <SkillCard image="/skill-icon3.png" title="Mantenimiento" desc="Mantenimiento para asegurarse de que los sistemas estén actualizados y funcionando sin problemas." />
            </div>
        </div>
    </section>
  )
}

export default SkillsSection