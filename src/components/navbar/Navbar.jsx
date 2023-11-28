"use client"
import styles from '@/styles/components/navbar.module.scss'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
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
                    <a href='#' target='_blanck'>
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
                    <a href='#' target='_blanck'>
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
                    <a href='#' target='_blanck'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </motion.li>
            </ul>
            <button><span>Mi CV</span></button>
        </div>
    )
}

export default Navbar