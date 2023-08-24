//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Link from "next/link";
import List from "../components/list";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Media
import gaming1 from "../media/gaming1.jpg";
import gaming2 from "../media/gaming2.jpg";
import gaming3 from "../media/gaming3.jpg";

const links = [
  new SideLink("Games", "#games", false),
  new SideLink("Setup", "#setup", false),
];

export default function Gaming() {
  return (
    <>
      <NavigationBar active={"gaming"}></NavigationBar>
      <div className="grid">
        <Banner title={"Gaming"} img={gaming1}></Banner>
        <div>
          <SideBar links={links} />
        </div>

        <br id="games"></br>
        <Card
          title={"Games"}
          text={
            <p>
              Das erste Spiel, das ich aktiv und lang gespielt hab, war, wie man
              es sich denken kann, Fortnite.<br></br>
              <br></br> Mittlerweile hab ich mehr Geschmack. Alle Spiele
              aufzulisten würde wohl zu lange daueren daher habe ich ein paar
              meiner Lieblingsspiele und die aktuellsten aufgelistet:<br></br>
              <br></br>
              <List
                data={[
                  "Star Citizen",
                  "Ace Combat 7",
                  "Madden NFL",
                  "Spiderheck",
                  "GTA V",
                  "...",
                ]}
              ></List>
            </p>
          }
          img={gaming2}
          position={"left"}
          date={"22.7.2023"}
        ></Card>

        <br id="setup"></br>
        <Card
          title={"Setup"}
          text={
            <p>
              Abgesehen von Handy war die erste Plattform, auf der ich spielte,
              die Nintendo Switch. Danach wechselte ich auf die Xbox One S und
              schließlich hab ich mir einen PC zusammengebaut. <br></br>
              In meinem PC verbaut sind:<br></br>
              <br></br>
              <List
                data={[
                  "GPU: NVIDIA RTX 3060",
                  "CPU: Intel i5-12600K",
                  "SSD: SN850 1TB",
                  "RAM: 4x8GB DDR4 Kingston FURY 3200",
                  "Motherboard: Gigabyte B660 DS3H",
                  "Netzteil: Thermaltake Smart 600W",
                ]}
              ></List>
              Außerdem besitze ich eine Oculus Quest 2 und ein Thrustmaster
              T16000M FCS HOTAS.
            </p>
          }
          img={gaming3}
          position={"right"}
          date={"22.7.2023"}
        ></Card>
      </div>
      <Footer></Footer>
    </>
  );
}
