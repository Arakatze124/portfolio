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
      setWidth(document.body.clientWidth * 0.6);
      if(width*2 < 769){
        setMobile(true);
      }
      else{
        setMobile(false)
      }
    }
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

    if (mobile) {
      return (
        <>
        
          <div className="grid2 card gridi-center">
          {buildImage(img, width)}
          {buildText(title, text)}
          </div>
        </>
      );
    } else if(position === "left"){
      return (
        <>
            <div className="grid2 card gridi-center">
          {buildImage(img, width / 2)}
          {buildText(title, text)}
          </div>
        </>
      );
    }
      else{
    {
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
          <div id="section-1" className="center title3">{title}</div>
          <div className=" text-container"> {text}</div>
        </div>
    );
  }
}
  