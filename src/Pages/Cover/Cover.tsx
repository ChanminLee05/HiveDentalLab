import React, { useEffect, useState } from 'react'
import Sample from '../../Components/Assets/sample.jpg'
import CoverImg from '../../Assets/Cover.png'
import Instagram from "../../Assets/instagram-icon.png"
import "./Cover.css"

const Cover: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Trigger animation on mount
      }, []);
      
    return (
        <>
            <div className="cover-page">
                <div className="cover-top">
                    <img src={CoverImg} alt="cover-img" className='cover-page-img'/>
                    <button className='instagram-btn' onClick={() => window.open('https://www.instagram.com/hivedental', '_blank')}>
                        <img src={Instagram} alt="instagram-img" className='instagram-img' />
                    </button>
                    <a href="#greet" className="more-link">Learn More</a>
                </div>
                <div className="cover-mid" id="greet">
                    <div className="cover-mid-left">
                        <h1 className='cover-mid-txt1'>Edmonton’s Premier Dental Lab – Precision, Expertise, and Excellence</h1>
                        <p className='cover-mid-txt2'>With over 20 years of experience, Hive Dental Laboratory is committed to delivering exceptionally accurate and expertly crafted dental restorations. Our dedication to precision, durability, and aesthetics ensures the highest quality solutions for every smile</p>
                    </div>
                    <div className="cover-mid-right">
                        <img src={Sample} alt="profile-img" className={`profile-img ${isVisible ? 'show' : ''}`}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cover;
