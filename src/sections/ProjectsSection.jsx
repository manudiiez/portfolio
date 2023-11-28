import ProjectsSliderContainer from '@/components/projectsSlider/ProjectsSliderContainer'
import Apear from '@/components/textAnimation/Apear'
import Reveal from '@/components/textAnimation/Reveal'
import styles from '@/styles/components/projects.module.scss'


const ProjectsSection = () => {
    return (
        <section id='projects' className={styles.container}>
            <div className={styles.content}>
                <Reveal>
                    <h2>Mis proyectos</h2>
                </Reveal>
                <h3>Explora mi trabajo. <span>Cada proyecto es una historia de creatividad y soluciones.</span></h3>
                <Apear width='100%' overflow='visible'>
                    <ProjectsSliderContainer />
                </Apear>
            </div>
        </section>
    )
}

export default ProjectsSection