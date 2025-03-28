//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import List from "../../components/List";
import Layout from "../../components/Layout";
//CSS
import "../../styles/default.css";
//Media
import gaming1 from "../../media/gaming1.jpg";
import gaming2 from "../../media/gaming2.jpg";
import gaming3 from "../../media/gaming3.jpg";
import { La_Belle_Aurore } from "next/dist/compiled/@next/font/dist/google";

const links = [
  new SideLink("Games", "#games", false),
  new SideLink("Setup", "#setup", false),
];

export default function Gaming() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        

        <br id="games"></br>
        <Card
          title={"Games"}
          text={
            <p>
              Das erste Spiel, das ich aktiv und lang gespielt hab, war, wie man
              es sich denken kann, Fortnite.<br></br>
              <br></br> Mittlerweile hab ich mehr Geschmack. Alle Spiele die ich gerne spiele
              aufzulisten würde wohl zu lange daueren daher habe ich die meist gespielten Spiele aufgelistet:<br></br>
              <br/><br/>
              <List
                data={[,
                  "GTA V",
                  "Valorant",
                  "Bloons TD 6",
                  "Spiderheck",
                  "..."
                ]}
              ></List>
            </p>
          }
          img={gaming2}
          position={"left"}
          date={"4.7.2024"}
        ></Card>

        <br id="setup"></br>
        <Card
          title={"Setup"}
          text={
            <p>
              Abgesehen vom Handy war die erste Plattform, auf der ich spielte,
              die Nintendo Switch. Danach wechselte ich auf die Xbox One S und
              schließlich habe ich mir einen PC zusammengebaut. <br></br>
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
              T16000M FCS HOTAS. (Ein Steuerknüppel und Schubregler)
            </p>
          }
          img={gaming3}
          position={"right"}
          date={"22.7.2023"}
        ></Card>
      </div>
      </Layout>
    </>
  );
}
