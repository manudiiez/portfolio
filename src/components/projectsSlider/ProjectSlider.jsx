"use client"
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './projectSlider.css'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

const ProjectSlider = ({ listProjects, selected, onNext, onPrev }) => {

    return (
        <div id='slider'>
            <div className='head'>
                <SwitchTransition>
                    <CSSTransition classNames="fade" key={selected} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                        <h3>{listProjects[selected].title}</h3>
                    </CSSTransition>
                </SwitchTransition>
                {/* <button>
                    <span>VER</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button> */}
                <Link href={listProjects[selected].live} target="blanck"  >
                    <span>VER</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
            </div>
            <div className='content'>
                <SwitchTransition>
                    <CSSTransition classNames="fade__img" key={selected} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                        <div className='img'>
                            <Image src={listProjects[selected].img_phone} className="img__phone" fill alt="Proyecto Ruca Textil desarrollado con React, Sass y Framer motion" />
                            <Image src={listProjects[selected].img_desk} className="img__desk" fill alt="Proyecto Ruca Textil desarrollado con React, Sass y Framer motion" />
                            <div className="text">
                                <h3>{listProjects[selected].tech}</h3>
                                <p>{listProjects[selected].description}</p>

                                <div className="links">
                                    <p>Links del proyecto<span>.</span></p>
                                    <div>
                                        {
                                            listProjects[selected].links.map((item, index) => (
                                                <Link key={index} href={item.link} target="_blank" ><span>{item.name}</span> <FontAwesomeIcon icon={item.icon === 'github' ? faGithub : faFigma} /></Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className="controls">
                    <div>
                        <button onClick={onPrev}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button onClick={onNext}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                    <Link href={listProjects[selected].live} target="blanck" className='more' >
                        <span>VER</span>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectSlider