import Image from 'next/image'

import styles from '@/styles/components/skills.module.scss'
import Apear from './textAnimation/Apear'


const SkillCard = ({ image, title, desc }) => {


    return (
        <div className={styles.card}>
            <Apear>
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                />
                <h5>{title}</h5>
                <h6>{desc}</h6>
            </Apear>
        </div>
    )
}

export default SkillCard

