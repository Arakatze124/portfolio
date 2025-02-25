import React from "react";
import Card from "./Card";
import "../styles/default.css";
import Image1 from "../media/sports1.jpg";
import CarouselDetail from "./CarouselDetail";

export default function Carousel(items){
    const [selectedItem, setSelectedItem] = React.useState(items[0]);

    return <>
        <CarouselSelector items={items} setSelectedItem={setSelectedItem}/>
        <CarouselDetail selectedItem={selectedItem}/>
    </>
}