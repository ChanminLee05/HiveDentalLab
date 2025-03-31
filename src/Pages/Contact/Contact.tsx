import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Contact.css';
import {Bounce, toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';
import { HiveDental } from '../../Model/HiveInfo';

interface Props {
    info: HiveDental
}

const Contact:React.FC<Props> = ({ info }) => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6,10)}`;
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedPhoneNumber);
    }

    const handleSubmit = async (e: React.FormEvent)=> {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = {
            service_id: 'service_d81mncs',
            template_id: 'template_r4n8hxn',
            user_id: '0nvJhzv3ynWsfR13-',
            template_params: {
                'name': formData.get('name'),
                'email': formData.get('email'),
                'phoneNumber': formData.get('phoneNumber'),
                'subject': formData.get('subject'),
                'message': formData.get('message')
            }
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Message sent successfully');
                toast.success('Message sent successfully. We will respond to you as soon as possible.', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
                setTimeout(() => {
                    navigate('/')
                }, 5000);
            } else {
                console.error('Error sending message');
                toast.error('Error sending message', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <>
            <Navbar />
            <ToastContainer/>
            <div className="contact-page">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3 className="form-title">CONTACT US</h3>
                    <div className="form-left">
                        <h4>Drop Us a line!</h4>
                        <div className="contact-message-container">
                            <input type="text" id="name" name="name" placeholder="Name" className="contact-input" required={true}/>
                            <input type="email" id="email" name="email" placeholder="Email" className="contact-input" required={true}/>
                            <input type="tel" id="tel" name="phoneNumber" placeholder="Phone Number" className="contact-input"
                                value={phoneNumber} onChange={handlePhoneNumberChange} required={true}/>
                            <input type="text" id="subject" name="subject" placeholder="Subject" className="contact-input" required={true}/>
                            <textarea id="message" name="message" placeholder="Create a message here" className="contact-input message-input" required={true}/>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </div>
                    </div>
                    <div className="form-right">
                        <h4>Better yet, see us in person!</h4>
                        <p>We love our customers, so feel free to visit during normal business hours.</p>
                        <h4>Got a question?</h4>
                        <p>We're here to help! Fill out the form and we'll respond shortly.</p>
                    </div>
                </form>
            </div>
            <Footer info={info}/>
        </>
    );
};

export default Contact;
