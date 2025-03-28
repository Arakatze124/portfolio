import React from "react";
import "../styles/default.css";
import CarouselDetail from "./CarouselDetail";
import CarouselSelector from "./CarouselSelector";

export default function Carousel({items}){
    const [selectedItem, setSelectedItem] = React.useState();
    
    return (
    
        <>
        <CarouselSelector items={items} setSelectedItem={setSelectedItem}/>
        
        </>
        );
    
}