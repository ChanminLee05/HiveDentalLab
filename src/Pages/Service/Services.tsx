import React, { useState } from 'react'
import Navbar from '../../Components/Nav/Navbar';
import "./Service.css"
import Implant from "../../Assets/Implant.png"
import Zirconia from "../../Assets/Zirconia.png"
import Lithium from "../../Assets/Lithium.png"
import PFM from "../../Assets/PFM.png"
import Gold from "../../Assets/Gold.png"
import Onlay from "../../Assets/Onlay.png"
import NG from "../../Assets/NG.jpg"
import Retainer from "../../Assets/Essix-Retainers.jpg"
import Flipper from "../../Assets/Flipper.png"
import Footer from '../../Components/Footer/Footer';
import { HiveDental } from '../../Model/HiveInfo';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

interface Props {
    info: HiveDental;
}

const categories = [
    {
      title: "Implant",
      services: [
        {
          img: Implant,
          title: "Implant",
          description: [
            "Why Choose Dental Implants?",
            "Prevents Bone Deterioration",
            "Natural Look & Feel",
            "Straumann, Hiossen, Nobel Biocare, Megagen, etc.",
            "Production time: 7-10 days.",
            "5 year warranty.",
          ],
        },
      ],
    },
    {
      title: "Restoration",
      services: [
        {
          img: Zirconia,
          title: "Zirconia",
          description: [
            "Why Choose Zirconia?",
            "Unmatched Durability",
            "Premium Aesthetics",
            "Lightweight & Comfortable",
            "3-7 days Production time",
            "5 year warranty"
          ]
        },
        {
          img: Lithium,
          title: "Lithium Disilicate",
          description: [
            "Why Choose Lithium Disilicate?",
            "Unmatched Strength",
            "More Natural Color & Translucency",
            "Ideal for Esthetic Zones",
            "4-10 days Production time",
            "5 year warranty"
          ]
        },
        {
          img: PFM,
          title: "PFM",
          description: [
            "Why Choose PFM?",
            "Unmatched Strength",
            "Natural Aesthetics",
            "Reliable & Proven",
            "4-10 days Production time",
            "5 year warranty"
          ]
        },
        {
            img: Gold,
            title: "Gold / Metal Crown",
            description: [
              "Why Choose Gold / Metal Crowns?",
              "Exceptional Strength",
              "Superior Longevity",
              "Biocompatible & Corrosion-Resistant",
              "4-10 days Production time",
              "5 year warranty"
            ]
        },
        {
            img: Onlay,
            title: "Inlay & Onlay",
            description: [
              "Why Choose Inlays & Onlays?",
              "Stronger Than Fillings",
              "Minimally Invasive",
              "Seamless Aesthetics",
              "3-7 days Production time",
              "5 year warranty"
            ]
        },
      ],
    },
    {
      title: "Orthodontics",
      services: [
        {
          img: NG,
          title: "Night Guard",
          description: [
            "Protect Your Smile While You Sleep",
            "Improves Sleep & Reduces Jaw Pain",
            "Customized for Comfort",
            "Dual / Thermoflex / Hard Night Guard",
            "3-7 days Production time",
            "5 year warranty"
          ]
        },
        {
          img: Retainer,
          title: "Essix Retainer",
          description: [
            "Why Choose an Essix Retainer?",
            "Custom-Fit Comfort",
            "Easy to Wear & Remove",
            "Prevents Teeth Shifting",
            "3-7 days Production time",
            "5 year warranty"
          ]
        },
        {
          img: Flipper,
          title: "Flipper",
          description: [
            "Temporary Smile Solution with Long-Lasting Benefits",
            "Comfortable Fit",
            "Easy to Maintain",
            "Non-invasive & Reversible",
            "3-7 days Production time",
            "5 year warranty"
          ]
        },
      ],
    },
  ];

const Services: React.FC<Props> = ({ info }) => {
    const [filteredCategory, setFilteredCategory] = useState("");

  const filterServices = (categoryTitle: string) => {
    if (categoryTitle === "All") {
      setFilteredCategory("");
    } else {
      setFilteredCategory(categoryTitle);
    }
  };
  
    return (
        <>
            <Navbar />
            <h1 className="fw-bold dental-service-title">Our Dental Services</h1>

      {/* filter buttons */}
      <div className="filter-buttons">
        <button className="filter-btn" onClick={() => filterServices("All")}>
          All
        </button>
        <button className="filter-btn" onClick={() => filterServices("Restoration")}>
          Restoration
        </button>
        <button className="filter-btn" onClick={() => filterServices("Implant")}>
          Implant
        </button>
        <button className="filter-btn" onClick={() => filterServices("Orthodontics")}>
          Orthodontics
        </button>
      </div>

      {/* category services */}
      <div className="service-container">
        {categories
          .filter((category) => filteredCategory === "" || category.title === filteredCategory)
          .map((category, index) => (
            <div key={index} className="service-category">
              <div className="service-row">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`service-card ${idx % 2 === 0 ? "order-1" : "order-2"}`}
                  >
                    <img src={service.img} alt={service.title} className="service-img" />
                    <div className="service-body">
                      <h3 className="service-title">{service.title}</h3>
                      {Array.isArray(service.description) ? (
                        <ul className="service-description">
                          {service.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="service-description">{service.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
            <Footer info={info}/>
        </>
    )
}

export default Services;