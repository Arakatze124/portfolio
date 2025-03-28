//carousel selecter

import React, { use, useState } from "react";
import "../styles/default.css";
import Image from "next/image";
import "../styles/carousel.css";
import Carousel from "./carousel";
import CarouselDetail from "./CarouselDetail";
import { useEffect } from "react";

export default function CarouselSelector({ items, setSelectedItem }) {
    const [selected, setSelected] = useState();

   useEffect(() => {
         setSelectedItem(items[selected]);
    
    }, [selected]);


    return (
        <div className="carousel">
            <div className="carousel-selector">
                {items ? items.map((item, index) => (
                    <div 
                        key={index}
                        className={"carousel-card" + " " + (index === selected ? "selected" : "")}
                        onMouseOver={() => setSelected(index)}
                        onClick={() => setSelected(index)}
                        onMouseOut={() => setSelected(undefined)}
                    >
                        <Image className="carousel-img" src={item.img} alt={item.title} />
                        <h3 className="carousel-title">{item.title}</h3>
                        <div className="carousel-details">
                            {selected === index && <CarouselDetail selectedItem={item} />}
                        </div>
                    </div>
                )) : null}
            </div>
        </div>
    );
}