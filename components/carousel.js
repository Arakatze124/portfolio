import React from "react";
import Card from "./Card";
import "../styles/default.css";
import CarouselDetail from "./CarouselDetail";
import CarouselSelector from "./CarouselSelector";

export default function Carousel(items){
    const [selectedItem, setSelectedItem] = React.useState(items[0]);
    console.log(items[0]);
    return <>
    {
        //<CarouselSelector items={items} setSelectedItem={setSelectedItem}/>
        //<CarouselDetail selectedItem={selectedItem}/>
        }
    </>
}