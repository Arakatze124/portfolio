import React from "react";
//Components
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import Footer from "../components/footer";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Link from "next/link";
import Banner from "../components/banner";
import List from "../components/list";
//CSS
import "../styles/test.css";
import "../styles/default.css";
import "../styles/sideBar.css";
//Images
import Kaindorf1 from "../media/kaindorf1.jpg";
import pmsdobl1 from "../media/pmsdobl1.jpg";
import vslannach1 from "../media/vslannach1.jpg";
import Career1 from "../media/career1.jpg";
import career7 from "../media/career7.png";
import career8 from "../media/career8.png";

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
  new SideLink("Dokumente", "#docs", false),
  new SideLink("Lebenslauf", "#cv", true),
  new SideLink("Zeugnis", "#testimonial", true),
  new SideLink("CCNA", "#ccna", true),
  new SideLink("FCE Exam", "#fce", true),
  new SideLink("Webpeer", "#webpeer", true),
  new SideLink("Schulen", "#schools", false),
  new SideLink("HTBLA Kaindorf", "#htlKaindorf", true),
  new SideLink("PMS Dobl", "#pmsDobl", true),
  new SideLink("VS Lannach", "#vsLannach", true),
];

function Career() {
  return (
    <>
      <NavigationBar active={"career"}></NavigationBar>

      <div className="grid">
        <Banner title={"Karriere"} img={Career1}></Banner>

        <br id="experience"></br>
        <div className="center title2 gridi-center">Erfahrung</div>

        <Card
          title={"Arland Technologies"}
          text={
            <p>
              Im Juli 2023 habe ich ein Ferialpraktikum im Bereich Software
              Development absolviert . Bei{" "}
              <Link href={"https://arland.at"}>Arland Technologies </Link>konnte
              ich das erste mal praktische Erfahrung in diesem Bereich sammeln.
              Zu meinen Aufgaben zählten:
              <List
                data={["Webdesign", "Web-Entwicklung", "Script-Entwicklung"]}
              ></List>
            </p>
          }
          img={career7}
          date={"3.8.2023"}
        ></Card>

        <br id="k&oe"></br>
        <Card
          title={"Kastner & Öhler"}
          text={
            <p>
              Im November, 2022, habe ich im Bereich der Warenkomission
              geringfügig bis Jänner nächsten Jahres bei{" "}
              <Link href={"https://www.kastner-oehler.at"}>
                Kastner & Öhler
              </Link>{" "}
              gearbeitet. Dort habe ich dafür gesorgt, dass die bestellte Ware
              so schnell wie möglich zu der Versandstation gebracht wird, um
              unseren Kunden eine kurze Wartezeit zu bereiten.
            </p>
          }
          img={career8}
          position={"left"}
          date={"3.8.2023"}
        ></Card>

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

        <br id="schools"></br>
        <div className="center title2 gridi-center">Schulen</div>

        <div className="gridi-sidebar">
          <SideBar links={links} />
        </div>

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
              Gegenstände. Außerdem bin ich Abteilungssprecher meines Bereichs. Mehr zu den Lehrinhalten{" "}
              <b>
                <Link
                  href={"https:www.htl-kaindorf.at/abteilungen/informatik"}
                  target="_blank"
                >
                  hier
                </Link>
              </b>
              , zusätzlich dazu besuche ich den Freigegenstand Spanisch.
              <br></br>
              <br></br> Meine Ausblidung habe ich 2021 begonnen und befinde mich
              demnach im {schoolYear}ten Schuljahr.
            </p>
          }
          img={Kaindorf1}
          position={"left"}
          date={"13.7.2023"}
        ></Card>

        <br id="pmsDobl"></br>
        <Card
          title={"PMS Dobl"}
          text={
            <p>
              Die{" "}
              <Link href={"https://www.pms-dobl.at/"} target="_blank">
                Private Mittelschule in Dobl
              </Link>{" "}
              ist die Schule des Schulvereins der Barmherzigen Schwestern
              Schloss Dobl. <br></br>
              <br></br> In dieser Schule haben einige meiner jetzigen Hobbys
              ihren Platz in meinem Leben gefunden. So zum Beispiel habe ich den
              Freigegenstand Akrobatik besucht welcher mich später zu Parcour
              brachte oder der Beitritt des Chor, wessen ich zwar wieder
              zurückgezogen habe, aber Musik immernoch ein großer Teil meines
              Lebens geblieben ist.
            </p>
          }
          img={pmsdobl1}
          position={"right"}
          date={"13.7.2023"}
        ></Card>

        <br id="vsLannach"></br>
        <Card
          title={"VS Lannach"}
          text={
            <p>
              Die{" "}
              <Link href={"https://www.vs-lannach.at/"} target="_blank">
                Volksschule Lannach
              </Link>
              . Nun, über die Volksschule kann man ja wohl nicht viel sagen
              oder? Ich war ein sehr aufgedrehtes Kind, hab den Unterricht
              gestört, bin auf Sachen geklettert auf die ich nicht hoch durfte
              und so weiter ... Ich hab meine jungen Jahre voll und ganz
              ausgelebt.
            </p>
          }
          img={vslannach1}
          position={"left"}
          date={"13.7.2023"}
        ></Card>

        <br></br>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Career;
