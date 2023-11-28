"use client"
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'


import styles from '@/styles/components/sidebar.module.scss'
import HamburgerButton from './HamburgerButton'

const Sidebar = () => {

    const [state, setState] = useState(false);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const mainControls = useAnimation()


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <motion.div className={state ? styles.sidebarActive : styles.sidebar}
            variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
        >
            <div className={styles.sidebarBody}>
                <div onClick={() => setState(!state)}>
                    <HamburgerButton state={state} setState={setState} />
                    <p>MD</p>
                </div>
                <ul ref={ref}>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5 }}

                    >
                        <Link href="#home" onClick={() => setState(false)}>Inicio</Link>
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.1 }}

                    >
                        <Link href="#projects" onClick={() => setState(false)}>Proyectos</Link>
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.2 }}

                    >
                        <Link href="#about" onClick={() => setState(false)}>Sobre mí</Link>
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.3 }}

                    >
                        <Link href="#skills" onClick={() => setState(false)}>Habilidades</Link>
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.4 }}

                    >
                        <Link href="#contact" onClick={() => setState(false)}>Contacto</Link>
                    </motion.li>
                </ul>
            </div>
            <div className={styles.bg} onClick={() => setState(false)}></div>
        </motion.div>
    )
}

export default Sidebar