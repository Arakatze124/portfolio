//Components
import React from "react";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Link from "next/link";
import List from "../components/list";
//CSS
import "../styles/default.css";
//Images
import Kaindorf1 from "../media/kaindorf1.jpg";
import pmsdobl1 from "../media/pmsdobl1.jpg";
import vslannach1 from "../media/vslannach1.jpg";
import career7 from "../media/career7.png";
import career8 from "../media/Spark7.jpeg";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let schoolYear;

if (currentMonth >= 8) {
  schoolYear = currentYear - 2021 + 1;
} else {
  schoolYear = currentYear - 2021;
}

const links = [
  new SideLink("Erfahrung", "#experience", false),
  new SideLink("Arland", "#arland", true),
  new SideLink("K&Ö", "#k&oe", true),
  /*
  new SideLink("Dokumente", "#docs", false),
  new SideLink("Lebenslauf", "#cv", true),
  new SideLink("Zeugnis", "#testimonial", true),
  new SideLink("CCNA", "#ccna", true),
  new SideLink("FCE Exam", "#fce", true),
  new SideLink("Webpeer", "#webpeer", true),
  */
  new SideLink("Schulen", "#schools", false),
  new SideLink("HTBLA Kaindorf", "#htlKaindorf", true),
  new SideLink("PMS Dobl", "#pmsDobl", true),
  new SideLink("VS Lannach", "#vsLannach", true),
];

function Career() {
  return (
    <>
      <div className="grid">
        <div id="career" className="title1 center gridi-center">Karriere</div>
        <br id="experience"></br>
        <div className="center title2 gridi-center">Erfahrung</div>
        <Card
          title={"Arland Technologies"}
          text={
            <div>
              Im Juli 2023 habe ich ein Ferialpraktikum im Bereich Software
              Development absolviert . Bei{" "}
              <Link href={"https://arland.at"} target="_blank">Arland Technologies </Link>konnte
              ich das erste mal praktische Erfahrung in diesem Bereich sammeln.
              Zu meinen Aufgaben zählten:
              <List
                data={["Webdesign", "Web-Entwicklung"]}
              ></List>
              Derzeit bin ich dort geringfügig als Web-Developer eingestellt.
            </div>
          }
          img={career7}
          date={"20.10.2023"}
        ></Card>

        <br id="spark7"></br>
        <Card
          title={"Spark7 Markebotschafter"}
          text={
            <p>
              Seit August 2025 darf ich für Spark7 freiberuflich als Markebotschafter agieren. Dabei konnte ich in einer völlig anderen Branche Fuß fassen und
              vor der Kamera arbeiten.
            </p>
          }
          position={"left"}
          date={"21.10.2025"}
        ></Card>

       {/* 
        <br id="docs"></br>
        <div className="center title2 gridi-center">Dokumente</div>
        <br id="cv"></br>
        <Card
          title={"Lebenslauf"}
          text={
            <iframe
              src="https://onedrive.live.com/embed?resid=999107596EE3D11B%21220626&authkey=!AOynmI1Cw2fIIYA&em=2"
              width="100%"
              height="1200"
              frameborder="0"
              scrolling="no"
            ></iframe>
          }
          img={null}
          date={"3.8.2023"}
        ></Card>

        <br id="testimonial"></br>
        <Card
          title={"Zeugnis"}
          text={
            <iframe
              src="https://onedrive.live.com/embed?resid=999107596EE3D11B%21237811&authkey=!AEKDd3y7Z9915LA&em=2"
              width="100%"
              height="1200"
              frameborder="0"
              scrolling="no"
            ></iframe>
          }
          img={null}
          date={"3.8.2023"}
        ></Card>

        <br id="ccna"></br>
        <Card
          title={" Cisco Certified Network Associate Zertifikat"}
          text={
            <img
              src="https://onedrive.live.com/embed?resid=999107596EE3D11B%21237837&authkey=%21AGlc3HNB8rTHf_0&width=1653&height=1075"
              width="100%"
              height=""
            />
          }
          img={null}
          date={"3.8.2023"}
        ></Card>

        <br id="fce"></br>
        <Card
          title={"First Cambridge Exam"}
          text={
            <iframe
              src="https://onedrive.live.com/embed?resid=999107596EE3D11B%21237851&authkey=!AC6BOXxEp7-cdIs&em=2"
              width="100%"
              height="1000"
              frameborder="0"
              scrolling="no"
            ></iframe>
          }
          img={null}
          date={"3.8.2023"}
        ></Card>

        <br id="webpeer"></br>
        <Card
          title={"Webpeer"}
          text={
            <iframe
              src="https://onedrive.live.com/embed?resid=999107596EE3D11B%21237826&authkey=!AAfJY4Axc6BRIGs&em=2"
              width="100%"
              height="1200"
              frameborder="0"
              scrolling="no"
            ></iframe>
          }
          date={"3.8.2023"}
          img={null}
        ></Card>
          */}
        <br id="schools"></br>
        <div className="center title2 gridi-center">Ausbildung</div>

        <br id="htlKaindorf"></br>
        <br></br>
        <Card
          title={"HTBLA Kaindorf"}
          text={
            <p>
              Die{" "}
              <Link href={"https://www.htl-kaindorf.at/"} target="_blank">
                Höhere Technische Bildungslehranstalt in Kaindorf
              </Link>{" "}
              ist der aktuelle Ort meiner Ausbildung. Da ich den Fachbereicht
              Informatik gewählt habe, lerne ich dort einige Themenbezogene
              Gegenstände. Ich habe schon vieles gelernt, durfte sowohl als Abteilungssprecher, als auch stv. Schulsprecher agieren. Zusätzlich dazu besuche ich den Freigegenstand Spanisch und das Wahlfplichtfach Entrepreneurship.
              <br></br>
              <br></br> Meine Ausblidung habe ich 2021 begonnen und befinde mich
              demnach in der Maturaklasse.
            </p>
          }
          img={Kaindorf1}
          position={"left"}
          date={"21.10.2025"}
        ></Card>

        <br></br>
      </div>
    </>
  );
}

export default Career;
