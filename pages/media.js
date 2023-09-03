//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Footer from "../components/footer";
import Card from "../components/card";
import Banner from "../components/banner";
import Link from "next/link";
import List from "../components/list.js";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Media
import media1 from "../media/media1.jpg";
import media2 from "../media/media2.jpg";
import media3 from "../media/media3.jpg";

const links = [
  new SideLink("Musik", "#music", false),
  new SideLink("Konsum", "#consumption", true),
  new SideLink("Produktion", "#production", true),
  new SideLink("Filme/Serien", "#movies", false),
  new SideLink("Fotos", "#pictures", false),
];

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
        <br id="consumption"></br>
        <Card
          title={"Konsum"}
          text={
            <p>
              Es vergeht kein Tag an dem ich nicht Musik hör, und ich würde auch
              keinen ohne überleben. Musik ist mir extrem wichtig und ich höre
              sie so ziemlich die ganze Zeit. <br></br>
              <br></br>Sich für ein Lieblingslied zu entscheiden ist für mich
              unmöglich, deshalb habe ich eine Playlist mit Liedern erstellt,
              die für mich auf verschiedene Art und Weise gut sind
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

        <br id="production"></br>
        <Card
          title={"Produktion"}
          text={
            <p>
              Mit meinem großen Konsum von Musik kommt das Bedürfnis mit, selbst
              etwas zu produzieren. Nicht falsch verstehen, ich komponiere
              (jedenfalls noch) keine eigenen Songs. Ich möchte nur in der Lage
              sein meine Lieblingslieder auf einem Instrument spielen zu können.
              <br></br>
              <br></br>
              Anfang August habe ich mir deshalb eine E-Gitarre gekauft. Zu
              diesem Zeitpunkt bin ich noch nicht sehr gut, aber ich denke mit
              täglichem Üben wird sich das schnell ändern.
            </p>
          }
          img={media2}
          date={"9.8.2023"}
        ></Card>

        <br id="movies"></br>
        <div className="title2 center gridi-center">Filme und Serien</div>
        <Card
          title={"Filme und Serien"}
          text={
            <p>
              Wenn es nur hin und wieder wäre, würde ich diesen Punkt nicht
              auflisten. Denn Fakt ist, das ich jedentag zumindest eine Folge
              oder einen Film schaue. Ich liebe es, wenn dich etwas so in den
              Bann reißt, das du Raum und Zeit vergisst und in einer ganz
              anderen Welt bist. <br></br>
              <br></br>Hier ein paar meiner Favoriten:
              <List
                data={[
                  "Serien:",
                  "The Boys",
                  "Haus des Geldes",
                  "Sword Art Online",
                  "Filme:",
                  "Interstellar",
                  "Tenet",
                  "Inception",
                  "Whiplash",
                  "The Truman Show",
                ]}
              ></List>
            </p>
          }
          img={null}
          date={"9.8.2023"}
        ></Card>
        <br id="pictures"></br>

        <div className="title2 center gridi-center">Fotos</div>
        <Card
          title={"Fotos"}
          text={
            <p>
              Dieses Hobby ist bei mir noch sehr unausgeprägt und hält sich nur
              klein. Ich habe einfach Spaß daran schöne Fotos zu machen, am
              meisten von mir selbst in verschiedenen Posen. Vorallem für diese
              Website musste ich so einige Fotos machen und es hat durchaus Spaß
              gemacht auch wenn sie nur mit meinem Handy, unprofessionell,
              aufgenommen wurden.
            </p>
          }
          img={media3}
          date={"9.8.2023"}
        ></Card>
      </div>
      <Footer></Footer>
    </>
  );
}
