import React from 'react';
import "./Footer.css";
import {HiveDental} from "../../Model/HiveInfo";

interface FooterProps {
    info: HiveDental;
}
const Footer:React.FC<FooterProps> = ({ info }) => {
    return (
        <div className="footer" id="footer">
            <div className="footer-left">
                <div className="footer-operation-container">
                    <h4>Hours of Operation</h4>
                    <ul className="operation-list">
                        {info.hours.map(({ day, time }, index) => (
                            <li key={index} className="operation-item row">
                                <p className="col-4 day">{day}</p>
                                <p className="col-8 time">{time}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-contact-container">
                    <h4 className="mb-4">VISIT US</h4>
                    <div className="contact-info-container">
                        <div className="contact-info-address">
                            <h6 className="contact-info-label address-label">ADDRESS:</h6>
                            <p className="label-address label-txt">{info.address.streetNumber}, {info.address.city}, {info.address.province}, {info.address.zipCode}</p>
                        </div>
                        <div className="contact-info-phone">
                            <div className="phone-container">
                                <h6 className="contact-info-label">PHONE:</h6>
                                <p className="label-phone label-txt">+1 {info.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="contact-info-email">
                            <div className="email-container">
                                <h6 className="contact-info-label">EMAIL:</h6>
                                <p className="label-email label-txt">{info.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-map">
                <h4 className="location-label">Our Location</h4>
                <iframe
                    title='hive-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.7789985866543!2d-113.51391492300482!3d53.50814316260469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0239249cf7ac3%3A0xc8955a7bf6ec841a!2sHive%20dental%20lab!5e0!3m2!1sen!2sca!4v1742757928788!5m2!1sen!2sca"
                    className="google-map"
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Footer;
