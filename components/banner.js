"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/default.css";
import "../styles/banner.css";

export default function Banner({ title, img }) {
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

  return (
    <div className="center gridi-center title1 banner">
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt="error"
        style={{ filter: "brightness(0.4) blur(3px)" }}
      />
      <h1 className="title1 banner-title ">{title}</h1>
    </div>
  );
}
