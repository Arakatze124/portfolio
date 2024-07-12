"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "../styles/default.css";
import "../styles/NavigationBar.css";
import Image from "next/image";
import logo from "../media/logo.png";

export default function NavigationBar(active) {
  const [width, setWidth] = useState(500);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWidth(document.body.clientWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  }

  const buildBurgerMenu = () => {
  return (
    <div className="bgMenuContainer"> 
          <button className="bgButton" onClick={handleOpenMenu}>☰</button>
          {menuOpen ? <>
          <div>
            Hello
          </div>
          </>: <></>}
    </div>
  );
}

const buildNavigationBar = (active, width) => {
  return (
    <div id="container">
      <nav className="sticky">
        <div id="logo">
          <Link href={"/home"}>
            <Image width={50} src={logo} />
          </Link>
        </div>
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link className="link" href={"/home"}>
              Home
            </Link>
          </li>
          <li className={active === "interests" ? "active" : ""}>
            <Link href={"/interests"}>Interessen</Link>
          </li>
          <li className={active === "career" ? "active" : ""}>
            <Link href={"/career"}>Karriere</Link>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <Link href={"/contact"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}


  if (width <= 769) {
    return buildBurgerMenu();
  } else {
    return buildNavigationBar(active.active, width);
  }
}




