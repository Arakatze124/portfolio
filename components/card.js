"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import "../styles/default.css";
import "../styles/card.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, text, img, position, date }) {
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

  const imgWidth = width / 3;
  const cardId = title;

  if (mobile) {
    return (
      <>
        <div
          className={
            img == (null || undefined) ? "card gridi-center" : "grid2 card gridi-center"
          }
        >
          {buildImage(img, width)}
          {buildText(title, text, date, cardId)}
        </div>
      </>
    );
  } else if (position === "left") {
    return (
      <>
        <div
          className={
            img == (null || undefined) ? "card gridi-center" : "grid2 card gridi-center"
          }
        >
          {buildImage(img, imgWidth)}
          {buildText(title, text, date, cardId)}
        </div>
      </>
    );
  } else {
    {
      return (
        <>
          <div
            className={
              img == (null || undefined) ? "card gridi-center" : "grid2 card gridi-center"
            }
          >
            {buildText(title, text, date, cardId)}
            {buildImage(img, imgWidth)}
          </div>
        </>
      );
    }
  }

  function buildImage(img, width) {
    if (img != (null || undefined)) {
      return (
        <div className="center img-container">
          <Image
            src={img}
            width={width}
            alt="There was an error while loading the image"
          ></Image>
        </div>
      );
    } else {
      return <></>;
    }
  }

  function buildText(title, text, date, cardId) {
    return (
      <div style={{ position: "relative" }}>
        <div>
          <div id={`section-${cardId}`} className="center title3">
            {title}
          </div>
          <div className="text-container">{text}</div>
        </div>
        <span
          className="timestamp material-symbols-outlined"
          onMouseEnter={() => {
            document.getElementById(`date-${cardId}`).style.display = "block";
          }}
          onMouseLeave={() => {
            document.getElementById(`date-${cardId}`).style.display = "none";
          }}
        >
          today
        </span>
        <div
          id={`date-${cardId}`}
          className="date"
          style={{ position: "absolute", bottom: 0, right: 0, display: "none" }}
        >
          Verfasst am {date}
        </div>
      </div>
    );
  }
}
