import React, { useEffect, useState } from 'react'
import Sample from '../../Assets/sample.jpg'
import CoverImg from '../../Assets/Cover.png'
import Instagram from "../../Assets/instagram-icon.png"
import Pickup from "../../Assets/pickup.png"
import Delivery from "../../Assets/delivery.png"
import Tooth from "../../Assets/tooth.png"
import Itero from "../../Assets/iTero.png"
import Trios from "../../Assets/trios.png"
import Emax from "../../Assets/emax.png"
import Medit from "../../Assets/medit.png"
import GC from "../../Assets/gc.png"
import Argen from "../../Assets/argen.png"
import Vita from "../../Assets/vita.png"
import Sirona from "../../Assets/sirona.png"
import "./Cover.css"

const Cover: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
      }, []);
    

      useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= 500);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const partners = [
        { src: Itero, name: "Itero" },
        { src: Trios, name: "Trios" },
        { src: Emax, name: "Emax" },
        { src: Medit, name: "Medit" },
        { src: GC, name: "GC" },
        { src: Argen, name: "Argen" },
        { src: Sirona, name: "Sirona" },
        { src: Vita, name: "Vita" },
    ];

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
                {/* Pickup and Delivery Section */}
                <div className="service-highlight">
                    <div className="service-box">
                        <h2>Pickup & Delivery Service</h2>
                        <div className="service-images">
                            <img src={Pickup} alt="pickup-img" className="service-img"/>
                            <img src={Delivery} alt="delivery-img" className="service-img"/>
                        </div>
                        <p>
                            Fast, Accurate, and FREE pickup and delivery service.
                            <br/>
                            We handle all logistics for crowns, implants, and restorations.
                        </p>
                    </div>

                    {/* Custom Crown Section */}
                    <div className="service-box">
                        <h2>Custom Shade Crowns</h2>
                        <img src={Tooth} alt="tooth-img" className="service-img"/>
                        <p>
                            Precisely crafted crowns that match your natural tooth color, ensuring a perfect and realistic fit.
                        </p>
                    </div>
                </div>
                {/* Partner Section*/}
                <div className="partner">
                    <h2>OUR PARTNERS</h2>
                    <div className="partner-slider">
                            {partners.map((partner, index) => (
                                <div className="partner-item" style={{ '--position': index } as React.CSSProperties}>
                                    <img 
                                        key={index} 
                                        src={partner.src} 
                                        alt={partner.name} 
                                        className="partner-img" 
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cover;
