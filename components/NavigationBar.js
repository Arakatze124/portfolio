"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "../styles/default.css";
import "../styles/NavigationBar.css";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../media/logo.png";

export default function NavigationBar(active) {
  const [width, setWidth] = useState(500);

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

  if (width <= 769) {
    return buildBurgerMenu();
  } else {
    return buildNavigationBar(active.active, width);
  }
}

function buildBurgerMenu() {
  return (
    <Menu>
      <Link href="/home">Home</Link>
      <a className="dropdown-btn">Interessen</a>
      <div className="container">
        <Link href="/sports">Sport</Link>
        <br></br>
        <br></br>
        <Link href="/bikes">Motorräder</Link>
        <br></br>
        <br></br>
        <Link href="/gaming">Gaming</Link>
        <br></br>
        <br></br>
        <Link href="/aviation">Aviation</Link>
        <br></br>
        <br></br>
        <Link href="/media">Media</Link>
        <br></br>
        <br></br>
      </div>

      <Link href="/career">Karriere</Link>
      <Link href="/contact">Kontakt</Link>
    </Menu>
  );
}

function buildNavigationBar(active, width) {
  return (
    <div id="container">
      <nav className="sticky">
        <div id="logo">
          <Link href={"/home"}>
            <Image width={50} src={logo} />
          </Link>
          <p> ----</p>

          <Link href={"/home"}>Dean Opara</Link>
        </div>
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link className="link" href={"/home"}>
              Home
            </Link>
          </li>
          <li className="dropdown">
            <a href="#">Interessen ▼</a>
            <div class="dd">
              <div id="up_arrow"></div>
              <ul>
                <li className={active === "sports" ? "active" : ""}>
                  <Link href={"/sports"}>Sport</Link>
                </li>
                <li className={active === "bikes" ? "active" : ""}>
                  <Link href={"/bikes"}>Motorräder</Link>
                </li>
                <li className={active === "gaming" ? "active" : ""}>
                  <Link href={"/gaming"}>Gaming</Link>
                </li>
                <li className={active === "aviation" ? "active" : ""}>
                  <Link href={"/aviation"}>Aviation</Link>
                </li>
                <li className={active === "media" ? "active" : ""}>
                  <Link href={"/media"}>Medien</Link>
                </li>
              </ul>
            </div>
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
