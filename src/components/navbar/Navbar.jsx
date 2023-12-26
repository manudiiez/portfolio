"use client"
import styles from '@/styles/components/navbar.module.scss'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {

    const dowloadFileAtURL = () => {
        const pdf_file = 'http://localhost:3000/cv.pdf'
        const aTag = document.createElement('a')
        aTag.href = pdf_file
        aTag.setAttribute('download', 'CVManuelDiezDeOñate')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <div className={styles.main}>
            <ul>
                <motion.li
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                >
                    <a href='#' target='blanck'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </motion.li>
                <motion.li
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <a href='https://github.com/manudiiez' target='blanck'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </motion.li>
                <motion.li
                    variants={{
                        hidden: { opacity: 0, y: -75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a href='https://www.linkedin.com/in/manuel-diez-de-o%C3%B1ate-31a322234/' target='blanck'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </motion.li>
            </ul>
            <button onClick={dowloadFileAtURL}><span>Mi CV</span></button>
        </div>
    )
}

export default Navbar