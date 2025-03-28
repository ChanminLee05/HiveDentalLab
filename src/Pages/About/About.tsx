import React from 'react'
import Navbar from '../../Components/Nav/Navbar';
import { HiveDental } from '../../Model/HiveInfo';

interface Props {
    info: HiveDental;
}

const About: React.FC<Props> = () => {
    return (
        <>
        <Navbar />
        Hello
        </>
    )
}

export default About;