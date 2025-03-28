import React from 'react'
import { HiveDental } from '../../Model/HiveInfo';
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';

interface Props {
    info: HiveDental;
}

const Contact: React.FC<Props> = ({ info }) => {
    return (
        <>
            <Navbar />
            <div className="contact-page">
                Hello
            </div>
            <Footer info={info}/>
        </>
    )
}

export default Contact;