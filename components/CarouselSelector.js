//carousel selecter

import React, { useState } from "react";
import "../styles/default.css";
import Image from "next/image";
import "../styles/carousel.css";
export default function CarouselSelector({ items, setSelectedItem }) {
    const [selected, setSelected] = useState(0);
    
    const selectItem = (index) => {
        setSelected(index);
        setSelectedItem(items[index]);
    };
    return (
        <div className="carousel">
        <div className="carousel-selector">
            {items.map((item, index) => (
            <div
                key={index}
                className={index === selected ? "selected" : ""}
                onClick={() => selectItem(index)}
            >
                <Image src={item.img} alt={item.title} width={100} height={100} />
                <h3>{item.title}</h3>
            </div>
            ))}
        </div>
        </div>
    );
    }