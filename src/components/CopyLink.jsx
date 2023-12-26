
"use client"
import styles from '@/styles/components/contact.module.scss'
import { faCopy, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

const CopyLink = () => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText('manudiiez123@gmail.com')
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Texto copiado"
        });
    }

    return (
        <div className={styles.copyLink} onClick={copyToClipBoard}>
            <span>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>manudiiez123@gmail.com</p>
            </span>
            <FontAwesomeIcon icon={faCopy} />
        </div>
    )
}

export default CopyLink
