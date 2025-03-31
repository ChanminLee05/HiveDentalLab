import React, {useEffect, useState} from 'react';
import "./Navbar.css";
import Hive from "../../Assets/Hive.png"
import pdf from "../../Assets/RX_FORM.pdf"

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDownload = (event: React.MouseEvent) => {
        event.preventDefault();
        const userConfirmed = window.confirm('Do you want to download the RX FORM?');

        if (userConfirmed) {
            const link = document.createElement('a');
            link.href = pdf;
            link.download = 'Hive Prescription.pdf';
            link.click();
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} fixed-top`}>
            <div className="container-fluid">
                <a className={`navbar-brand ${isScrolled ? 'scrolled' : ''}`} href="/">
                    {isScrolled ?
                        <img src={Hive} alt="" className="logo-img" />
                        : <img src={Hive} alt="" className="logo-img" />
                    }
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className={`navbar-nav ${isScrolled ? 'scrolled' : ''}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/digital">DIGITAL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={handleDownload}>RX FORM</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
