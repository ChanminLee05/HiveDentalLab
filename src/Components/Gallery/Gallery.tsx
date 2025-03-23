import React from 'react'
import Navbar from '../Nav/Navbar.tsx';
import { HiveDental } from '../Model/HiveInfo.ts';
import Footer from '../Footer/Footer.tsx';

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