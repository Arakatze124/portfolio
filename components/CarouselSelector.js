//carousel selecter

import React, { useState } from "react";
import "../styles/default.css";
import Image from "next/image";
import "../styles/carousel.css";
export default function CarouselSelector({ items, setSelectedItem }) {
    const [selected, setSelected] = useState();
   
    const selectItem = (index) => {
        setSelected(index);
        setSelectedItem(items[index]);
    };
    
    return (
        <div className="carousel">
        <div className="carousel-selector">
            {items ? items.map((item, index) => (
                
            <div 
                key={index}
                className={"carousel-card" + " " + (index === selected ? "selected" : "")}
                onClick={() => selectItem(index)}
            >
                <Image className="carousel-img" src={item.img} alt={item.title}  />
                <h3 className="carousel-title">{item.title}</h3>
            </div>
            )) : null}
        </div>
        </div>
    );
    }