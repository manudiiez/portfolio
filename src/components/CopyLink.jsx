
"use client"
import { NEXT_PUBLIC_URI } from '@/utils/config.js'
import Swal from 'sweetalert2'

const CopyLink = ({ children }) => {

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
        console.log(NEXT_PUBLIC_URI);
    }

    return (
        <div onClick={copyToClipBoard}>
            {children}
        </div>
    )
}

export default CopyLink
