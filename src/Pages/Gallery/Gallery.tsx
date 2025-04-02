import React, { useEffect } from 'react'
import Navbar from '../../Components/Nav/Navbar';
import { HiveDental } from '../../Model/HiveInfo';
import Footer from '../../Components/Footer/Footer';
import "./Gallery.css"
import Before from "../../Assets/Before.png"
import After from "../../Assets/After.png"
import BackgroundImage from "../../Assets/Gallery.png";

interface Props {
    info: HiveDental;
}


const Gallery: React.FC<Props> = ({ info }) => {
    const images = new Array(4).fill(null);

    useEffect(() => {
        document.body.style.background = `url(${BackgroundImage}) no-repeat bottom`;
        document.body.style.backgroundSize = "cover";

        return () => {
            document.body.style.background = ""; // 원래 상태로 되돌리기
        };
    }, []);
    
    return (
        <>
        <Navbar />
        <div className="gallery-container">
            <h1 className="gallery-title">Before and After</h1>
            <div className="gallery">
                {images.map((_, index) => (
                    <div key={index} className="gallery-item">
                        <div className="image-container">
                            <img src={Before} alt={`Before ${index + 1}`} className="gallery-img before" />
                            <img src={After} alt={`After ${index + 1}`} className="gallery-img after" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer info={info} />
        </>
    )
}

export default Gallery;