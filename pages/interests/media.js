//Components
import React from "react";
import SideLink from "../../components/SideLink.js";
import Card from "../../components/Card.js";
import Banner from "../../components/Banner.js";
import List from "../../components/list.js";
//CSS
import "../../styles/default.css";
//Media
import media1 from "../../media/media1.jpg";
import media2 from "../../media/media2.jpg";
import media3 from "../../media/media3.jpg";
import Layout from "../../components/Layout.js";

const links = [
  new SideLink("Musik", "#music", false),
  new SideLink("Konsum", "#consumption", true),
  new SideLink("Produktion", "#production", true),
  new SideLink("Filme/Serien", "#movies", false),
    new SideLink("Fotos/Videos", "#pictures", false),
    new SideLink("Bücher", "#books", false),
];

export default function Media() {
    const title = "Media";
    const img = media1;
    const details = 
  (
    <>
        <div className="grid">

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
                        die für mich auf verschiedene Art und Weise gut sind.
                        Hauptsächlich besteht die Playlist aus Indie Rock, meist leicht melancholisch.
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
                        Seit August 2023 spiele ich E-Gitarre. Ich schon die ein oder
                        anderen einfachen Songs spielen. So konnte ich, zum Beispiel,
                        eines meiner Lieblingslieder, Freaks, ohne große Probleme spielen.
                    </p>
                }
                img={media2}
                date={"3.9.2023"}
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

            <div className="title2 center gridi-center">Fotos/Videos</div>
            <Card
                title={"Fotos/Videos"}
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

            <br id="books"></br>
            <div className="title2 center gridi-center">Bücher</div>
            <Card
                title={"Bücher"}
                text={
                    <p>
                        Um meine Zeit effektiv zu nutzten und meinen Konsum von Tiktok zu minimierern habe ich begonnen
                        regelmäßig zu lesen. Vor allem im Gym während ich raste lese ich oft Bücher. Dabei handelt es
                        sich meistens um Selbsthifle Bücher, sprich etwas, was dich wirklich weiterbringt und nützlich
                        ist. 
                    </p>
                }
                img={null}
                date={"4.7.2024"}
            ></Card>
        </div>
    </>
  );
    const media = { title, img, details };
    return media;
}
