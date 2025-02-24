"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../styles/default.css";
import "../styles/banner.css";
import { gsap } from "gsap";

const Banner = ({ img, title, subtitle, titleRef, subtitleRef }) => {
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
  }, [subtitle]);

  return (
    <div  className="center gridi-center title1 banner">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="error"
        style={{ filter: "brightness(0.4) blur(3px)" }}
      />
      <h1 ref={titleRef} className="title1 banner-title">{title}</h1>
      <h2 ref={subtitleRef} className="title2 banner-subtitle">{subtitle}</h2>
    </div>
  );
};

export default Banner;
