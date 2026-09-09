//carousel selecter

import React, { use, useState } from "react";
import "../styles/default.css";
import Image from "next/image";
import "../styles/carousel.css";
import Carousel from "./carousel";
import CarouselDetail from "./CarouselDetail";
import { useEffect } from "react";

export default function CarouselSelector({ items, setSelectedItem }) {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelectedItem(items[selected]);
    }, [selected]);

    const toggleSelected = (index) => {
        setSelected(prev => prev === index ? null : index);
    };

    return (
        <div className="carousel-selector">
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-card ${selected === index ? "selected" : ""}`}
                    onClick={() => toggleSelected(index)}
                >
                    <div className="carousel-image-container">
                        <Image className="carousel-img" src={item.img} alt={item.title} />
                        <h3 className="carousel-title">{item.title}</h3>
                    </div>
                    <div className="carousel-details">
                        {selected === index && <CarouselDetail selectedItem={item} />}
                    </div>
                </div>
            ))}
        </div>
    );
}
