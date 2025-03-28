import React from 'react'
import Navbar from '../../Components/Nav/Navbar';
import { HiveDental } from '../../Model/HiveInfo';
import Footer from '../../Components/Footer/Footer';

interface Props {
    info: HiveDental;
}

const Gallery: React.FC<Props> = ({ info }) => {
    return (
        <>
        <Navbar />
        Hello
        <Footer info={info} />
        </>
    )
}

export default Gallery;