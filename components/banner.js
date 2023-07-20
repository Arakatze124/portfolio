import React from "react";
import Image from "next/image";
import "../styles/default.css";
import "../styles/banner.css"

export default function Banner({ title, img }) {

  return (
    <div className='center gridi-center title1 banner' >
     <Image
  src={img} 
  layout="fill"
  objectFit="cover"
  alt="error"
  style={{ filter: 'brightness(0.4) blur(3px)' }}
/>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}
