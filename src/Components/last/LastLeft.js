import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';





export const LastLeft = ({ toastRef }) => {

    const form = useRef();


    const showSuccess = (msg) => {
        toastRef.current.show({ severity: 'success', summary: 'Success', detail: msg, life: 3000 });
    }

    const showError = (msg) => {
        toastRef.current.show({ severity: 'error', summary: 'Error', detail: msg, life: 3000 });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_ct53cca', 'template_19vuxyw', form.current, {
            publicKey: 'NcMVkYHTwGNnv3odf',
        })
            .then((res) => {
                console.log(res)
                if (res.status === 200)
                    showSuccess("Email Sent Success")
            })
            .catch((error) => {
                console.log('Error sending email:', error);
                showError('Error sending email')
            })
    }


    return (
        <>
            <Toast ref={toastRef} />
            <div className='last-left-topic'>
                <h2>Message Us</h2>
                <div className='line'></div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='last-left-form'>
                <div className='left-form-group'>
                    <input className='input-form-left' name='from_name' type="text" placeholder=' Your Name  ' required />
                </div>
                <div className='left-form-group'>
                    <input className='input-form-left' name='from_mail' type="email" placeholder=' Your Email  ' required />
                </div>
                <div className='left-form-group'>
                    <input className='input-form-left' name='subject' type="text" placeholder=' Subject  ' required />
                </div>
                <div className='left-form-group'>
                    <textarea className='input-form-left form-control' name='message' type="text" rows={5} placeholder=' Message  ' required />
                </div>
                <div className='last-left-button-container'>
                    <button typeof='submit' className='last-left-button' type='submit'> Send Message</button>
                </div>
            </form>
        </>
    )
}
