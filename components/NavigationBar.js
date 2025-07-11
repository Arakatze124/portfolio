"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import "../styles/default.css";
import "../styles/NavigationBar.css";
import Image from "next/image";
import logo from "../media/logo.png";

export default function NavigationBar() {


  return (
    <>
    <div id="logo">
      <Link href={"#home"}>
        <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
        </div>
          
    <div id="container">
      
      <nav className="sticky" >
        
        <ul>
          <li>
            <Link href={"#home"}>
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
          <li >
            <Link href={"#career"}>Karriere</Link>
          </li>
          <li >
            <Link href={"#interests"}>Interessen</Link>
          </li>
          <li>
            <Link href={"#contact"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}



