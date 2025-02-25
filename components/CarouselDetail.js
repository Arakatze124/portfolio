import React from "react";
import Card from "./Card";

export default function CarouselDetail({ selectedItem }) {
  if (!selectedItem) {
    return <div>Please select an item from the list.</div>;
  }

  return (
    <div>
      <Card
        title={selectedItem.title}
        text={selectedItem.text}
        img={selectedItem.img}
        position="left"
        date={selectedItem.date}
      />
    </div>
  );
}
