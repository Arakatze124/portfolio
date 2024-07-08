//Components
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import Footer from "../components/footer";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Banner from "../components/banner";
import "../styles/default.css";
import "../styles/sideBar.css";


const links = [
  new SideLink("Rezepte", "#recipes", false)
];

export default function Cooking() {
 
  return (
    <>
      <NavigationBar active={"cooking"}></NavigationBar>
      <div className="grid">
        <Banner title={"Motorräder"} img={null}></Banner>
        <div>
          <SideBar links={links} />
        </div>

        <br id="moped"></br>
        <div className="title2 center gridi-center">Moped</div>
     
        
      </div>
      <Footer></Footer>
    </>
  );
}

