import React from 'react'
import Sample from '../../Assets/sample.jpg'
import "./Cover.css"

const Cover: React.FC = () => {
    return (
        <>
            <div className="cover-page">
                <div className="cover-top">
                    <div className="cover-top-left">
                        <h1 className='cover-top-txt1'>Edmonton’s Premier Dental Lab – Precision, Expertise, and Excellence</h1>
                        <p className='cover-top-txt2'>With over 20 years of experience, Hive Dental Laboratory is committed to delivering exceptionally accurate and expertly crafted dental restorations. Our dedication to precision, durability, and aesthetics ensures the highest quality solutions for every smile</p>
                    </div>
                    <div className="cover-top-right">
                        <img src={Sample} alt="cover-img" className='cover-img'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cover;
