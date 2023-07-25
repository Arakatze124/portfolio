'use client'
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import "../styles/default.css"
import "../styles/card.css"

export default function Card({ title, text, img, position }) {
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    function handleResize() {
      setWidth(document.body.clientWidth / 2);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

    if (position === "left") {
      return (
        <>
            <div className="grid2 card gridi-center">
          {buildImage(img, width / 2)}
          {buildText(title, text)}
          </div>
        </>
      );
    } else {
      return (
        <>
        <div className="grid2 card gridi-center">
          {buildText(title, text)}
          {buildImage(img, width / 1.5)}
          </div>
        </>
      );
    }
  }
  

function buildImage(img, width) {
    return (
      <div className="gridi center">
        <Image 
          src={img} 
          width={width}
          alt="There was an error while loading the image">
        </Image>
      </div>
    );
  }
  
  function buildText(title, text) {
    return (
      <div>
          <h1 id="section-1" className="center title3">{title}</h1>
          <div className=" text-container"> {text}</div>
        </div>
    );
  }
  