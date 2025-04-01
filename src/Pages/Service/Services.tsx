import React, { useState } from 'react'
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
          title: "Dental Implant",
          description: [
            "Are you missing a tooth? Instead of a bridge, consider getting an Implant. No need to trim natural teeth.",
            "Brands we use: Straumann, Hiossen, Nobel Biocare, Megagen, etc.",
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
          description:
            "Grinding zirconia may cause microcracks. We always perform a regeneration step for maximum strength.",
        },
        {
          img: Lithium,
          title: "Lithium Disilicate",
          description:
            "Beautiful Glass Ceramic! We use the best materials: E-max, GC LiSi, Amber, etc.",
        },
        {
          img: PFM,
          title: "Porcelain Fused Metal Crown",
          description:
            "Metal-supported porcelain was the best material for a long time before zirconia.",
        },
        {
            img: Gold,
            title: "Gold & Metal Crown",
            description:
                "Gold is highly durable and biocompatible, offering perfect occlusion and longevity.",
        },
        {
            img: Onlay,
            title: "Inlay & Onlay",
            description:
                "Choose your preferred material: Zirconia, Lithium Disilicate, or Gold.",
        },
      ],
    },
    {
      title: "Orthodontics",
      services: [
        {
          img: Gold,
          title: "Night Guard",
          description:
            "Gold is highly durable and biocompatible, offering perfect occlusion and longevity.",
        },
        {
          img: Onlay,
          title: "Essix Retainer",
          description:
            "Choose your preferred material: Zirconia, Lithium Disilicate, or Gold.",
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
        <button className="filter-btn" onClick={() => filterServices("Implant")}>
          Implant
        </button>
        <button className="filter-btn" onClick={() => filterServices("Restoration")}>
          Restoration
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