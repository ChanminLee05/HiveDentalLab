import React from 'react'
import Navbar from '../../Components/Nav/Navbar';
import "./Service.css"
import Implant from "../../Assets/Implant.png"
import Zirconia from "../../Assets/Zirconia.png"
import Lithium from "../../Assets/Lithium.png"
import PFM from "../../Assets/PFM.png"
import Gold from "../../Assets/Gold.png"
import Onlay from "../../Assets/Onlay.png"
import Footer from '../../Components/Footer/Footer';
import { HiveDental } from '../../Model/HiveInfo';

interface Props {
    info: HiveDental;
}

const Services: React.FC<Props> = ({ info }) => {
    return (
        <>
            <Navbar />
            <div className="services-page">
                <div className="service-category">
                    <div className="card">
                        <img src={Implant} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Implant</h2>
                            <p className="card-text">
                                Are you missing a tooth?
                                Instead of bridge, consider getting an Implant. As You wouldn't need to trim natural teeth for an implant.
                                Straumann, Hiossen, Nobel-biocare, Megagen. Etc.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Zirconia} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Zirconia</h2>
                            <p className="card-text">
                                Are you aware that grinding zirconia could lead to a microcrack?
                                That is why a thermal treatment for zirconia as a necessity.
                                We always do regeneration step. That is an essential step for strong zirconia.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Lithium} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Lithiumdisilicate</h2>
                            <p className="card-text">
                                Beautiful Glass Ceramic !! 
                                E-max, Gc LiSi , Amber,  
                                We use best materials.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={PFM} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Porcelain Fused Metal Crown</h2>
                            <p className="card-text">
                                Metal support Porcelain. 
                                Before Zirconia came to dental market, this was the best material for long time.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Gold} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Gold & Metal Crown</h2>
                            <p className="card-text">
                                Gold is the most suitable material for making prosthetics among existing materials ever. 
                                It is ductile and does not break or doesn't worn-out, and it fits well into the occlusion of the opposing 
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Onlay} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2>Inlay & Onlay</h2>
                            <p className="card-text">
                                You can choose material whatever you want : 
                                Zirconia, Lithium disilicate, Gold.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer info={info}/>
        </>
    )
}

export default Services;