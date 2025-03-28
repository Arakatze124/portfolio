import React from "react";
import Card from "./Card";

export default function CarouselDetail({ selectedItem }) {
  if (!selectedItem) {
    return <div>Please select an item from the list.</div>;
  }

  return selectedItem.details
  
}
