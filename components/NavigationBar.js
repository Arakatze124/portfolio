"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import "../styles/default.css";
import "../styles/NavigationBar.css";
import Image from "next/image";
import logo from "../media/logo.png";

export default function NavigationBar(active) {

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
          {
          /*
          <li className={active === "projects" ? "active" : ""}>
            <Link href={"/projects"}>Projekte</Link>
          </li>
          */
          }
          <li className={active === "career" ? "active" : ""}>
            <Link href={"/career"}>Karriere</Link>
          </li>
          <li className={active === "interests" ? "active" : ""}>
            <Link href={"/interests"}>Interessen</Link>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <Link href={"/contact"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}



