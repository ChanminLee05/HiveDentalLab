import React from 'react'
import { HiveDental } from '../Model/HiveInfo.ts';
import Navbar from '../Nav/Navbar.tsx';
import Footer from '../Footer/Footer.tsx';

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