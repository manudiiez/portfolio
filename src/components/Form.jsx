"use client"
import styles from '@/styles/components/contact.module.scss'
import { useState } from 'react';
import Swal from 'sweetalert2'

const Form = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const data = new FormData(e.target)
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json'
            }
        })

        const result = await response.json()
        if (!response.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: result.error.map(error => error.message).join(', '),
                showConfirmButton: false,
                timer: 1500
            });
            return false
        }
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Correo enviado correctamente"
        });
        setLoading(false)
    }

    return (
        <div className={styles.text}>
            <p>No dudes en contactarme en cualquier momento. Te responderé tan pronto como sea posible.</p>
            <form
                action="https://formspree.io/f/xyyrgaqr"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div>
                    <input type="text" required name='name' />
                    <label htmlFor="name">Nombre</label>
                </div>
                <div>
                    <input type="text" required name='email' />
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <textarea required rows="5" name='message'></textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <button disabled={loading}>
                    {loading ? 'ENVIANDO...' : 'ENVIAR'}
                </button>
            </form>
        </div>
    )
}

export default Form