//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Banner from "../components/banner";
import Link from "next/link";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Media
import media1 from "../media/media1.jpg";

const links = [new SideLink("Musik", "#music", false)];

export default function Media() {
  return (
    <>
      <NavigationBar active={"media"}></NavigationBar>
      <div className="grid">
        <Banner title={"Medien"} img={media1}></Banner>
        <div>
          <SideBar links={links} />
        </div>

        <br id="music"></br>
        <div className="title2 center gridi-center">Musik</div>
        <div className="title3 center gridi-center">Konsum</div>
        <Card
          title={"Meine Top-Tracks"}
          text={
            <p>
              Es vergeht kein Tag an dem ich nicht Musik hör, und ich würde auch
              keinen ohne Überleben. Musik ist mir extrem wichtig und ich höre
              so ziemlich die ganze Zeit. <br></br>
              <br></br>Sich für ein Lieblingslied zu entscheiden ist für mich
              unmöglich, deshalb habe ich eine Playlist mit Liedern erstell, die
              für mich auf verschiedene Art und Weise gut sind
            </p>
          }
          img={null}
          date={"24.7.2023"}
        ></Card>
        <div className="center gridi-center ">
          <iframe
            src="https://open.spotify.com/embed/playlist/3CLwuiZhshnmVHvyAz1pF5?utm_source=generator&theme=0"
            width="80%"
            height={500}
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
