//Components
import React from "react";
import SideLink from "../../components/SideLink.js";
import Card from "../../components/card.js";
import Banner from "../../components/banner.js";
import List from "../../components/list.js";
//CSS
import "../../styles/default.css";
//Media
import media1 from "../../media/media1.jpg";
import media2 from "../../media/media2.png";
import media3 from "../../media/media3.jpg";
import Layout from "../../components/layout.js";

const links = [
  new SideLink("Musik", "#music", false),
  new SideLink("Konsum", "#consumption", true),
  new SideLink("Produktion", "#production", true),
  new SideLink("Filme/Serien", "#movies", false),
    new SideLink("Fotos/Videos", "#pictures", false),
    new SideLink("Bücher", "#books", false),
];

export function getData() {
    const title = "Media";
    const img = media1;
    const details = (
    <>
        <div className="grid">

            <br id="music"></br>
            <div className="title2 center gridi-center">Musik</div>
            
            <br id="consumption"></br>
            <Card
                title={"Musik hören"}
                text={
                    <p>
                        Musik hat eine große Bedeutung in meinem Leben und einen starken Einfluss auf meine Stimmung.
                        <br></br>Sich für ein Lieblingslied zu entscheiden ist für mich
                        unmöglich, es kommt ganz auf die Situation an.
                    </p>
                }
                img={null}
                date={"21.10.2025"}
            ></Card>
           {/*
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
            */}

            <br id="production"></br>
            <Card
                title={"Gitarre & Klavier"}
                text={
                    <p>
                        Neben Sport schafft Musik für mich einen guten Ausgleich und Entspannung. Deshalb habe ich
                        angefangen, Gitarre zu lernen. Dabei hat sich das Interesse von Solos in Richtung Akkorden entwickelt.
                    
                        <br></br>
                        Daher sich mein Geschmack auch auf das Klavier ausweitet, habe ich damit auch begonnen.
                        <br></br>
                    </p>
                }
                img={media2}
                date={"21.10.2025"}
            ></Card>

            <br id="movies"></br>
            <div className="title2 center gridi-center">Filme und Serien</div>
            <Card
                title={"Filme und Serien"}
                text={
                    <p>
                        Wenn der Alltag mal eine Pause gönnt, genieße ich es, in die Welt der Filme und Serien einzutauchen. Ich liebe es, wenn dich etwas so in den
                        Bann reißt, dass du Raum und Zeit vergisst und in einer ganz
                        anderen Welt bist. <br></br>
                    </p>
                }
                img={null}
                date={"21.10.2025"}
            ></Card>
            <br id="pictures"></br>

            {/*
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

            */}
        </div>
        </>
    );
    const media = { title, img, details };
    return media;
}

export default function MediaPage() {
    const data = getData();
    return <Layout sideBarLinks={links} active={"interests"}>{data.details}</Layout>;
}
