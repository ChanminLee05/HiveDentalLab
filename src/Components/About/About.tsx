import React from 'react'
import Navbar from '../Nav/Navbar.tsx';
import { HiveDental } from '../Model/HiveInfo.ts';

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