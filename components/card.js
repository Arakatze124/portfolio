'use client'
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import "../styles/default.css"
import "../styles/card.css"
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, text, img, position }) {
  const [width, setWidth] = useState(1000);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      const newWidth = document.body.clientWidth;
      setWidth(newWidth);
      setMobile(newWidth < 769);
    }
    
    
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(mobile)
  console.log(width)
  
    const imgWidth = width / 3;

    if (mobile) {
      return (
        <>
        
        <div className={img === null ? "card gridi-center" : "grid2 card gridi-center"}>
          {buildImage(img, width)}
          {buildText(title, text)}
          </div>
        </>
      );
    } else if(position === "left"){
      return (
        <>
          <div className={img === null ? "card gridi-center" : "grid2 card gridi-center"}>
          {buildImage(img, imgWidth)}
          {buildText(title, text)}
          </div>
        </>
      );
    }
      else{
    {
      return (
        <>
          <div className={img === null ? "card gridi-center" : "grid2 card gridi-center"}>
          {buildText(title, text)}
          {buildImage(img, imgWidth)}
          </div>
        </>
      );
    }
  }
  

function buildImage(img, width) {
  if(img != null){
    return (
      <div className="center img-container">
        <Image 
          src={img} 
          width={width}
          alt="There was an error while loading the image">
        </Image>
      </div>
    );
  }else{
    return <></>
  }
  }
  
  function buildText(title, text) {
    return (
      <div>
          <div id="section-1" className="center title3">{title}</div>
          <div className=" text-container"> {text}</div>
        </div>
    );
  }
}
  