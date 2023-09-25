//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Banner from "../components/banner";
import Link from "next/link";
import Footer from "../components/footer.js";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Media
import sports1 from "../media/sports1.jpg";
import sports2 from "../media/sports2.gif";
import sports3 from "../media/sports3.jpg";
import sports4 from "../media/sports4.gif";
import sports5 from "../media/sports5.gif";
import sports6 from "../media/sports6.gif";
import sports7 from "../media/sports7.gif";
import sports8 from "../media/sports8.jpg";
import Table from "../components/Table";
import football1 from "../media/football1.jpeg";

const currentDate = new Date();
const october21 = new Date("2021-10-21");
const timeDiff = currentDate.getTime() - october21.getTime();
const daysDiff = timeDiff / (1000 * 3600 * 24);

const links = [
  new SideLink("Sportarten", "#sports", false),
  new SideLink("Parkour", "#parcour", true),
  new SideLink("American Football", "#football", true),
  new SideLink("Mountainbiking", "#mountainbiking", true),
  new SideLink("Fußball", "#soccer", true),
  new SideLink("Calisthenics", "#calisthenics", true),
  new SideLink("Brettsportarten", "#boardsports", false),
  new SideLink("Snowboarding", "#snowboarding", true),
  new SideLink("Skaten", "#skateboarding", true),
  new SideLink("Wakeboarding", "#wakeboarding", true),
  new SideLink("Krafttraining", "#strength", false),
  new SideLink("Workouts", "#workouts", true),
  new SideLink("Trainingsplan", "#plan", true),
];

export default function Sports() {
  return (
    <>
      <NavigationBar active={"sports"}></NavigationBar>
      <div className="grid">
        <Banner title={"Sport"} img={sports1}></Banner>
        <div>
          <SideBar links={links} />
        </div>

        <br id="sports"></br>
        <div className="title2 center gridi-center">Sportarten</div>
        <br id="parcour"></br>
        <Card
          title={"Parkour/Freerunning"}
          text={
            <p>
              Ich bin ein sehr energetischer Mensch. Ein Weg, das zum Ausdruck
              zu bringen sind coole Parcour Tricks wie z.b. Flips. <br></br>
              <br></br>In meiner Volksschulzeit habe ich einen Parkour-Kurs
              besucht und so die Basics gelernt, weiter ging es in der
              Mittelschule mit Akrobatik und heute, heute bringe ich mir selbst
              ein paar Tricks bei.
            </p>
          }
          img={sports2}
          position={"right"}
          date={"19.7.2023"}
        ></Card>

        <br id="football"></br>
        <Card
          title={"American Football"}
          text={
            <p>
              Seit Juli, 2023 bin ich stolzes Mitglied der{" "}
              <Link href={"https://www.grazgiants.at"}>Grazer Giants</Link>,
              einem österreichischen Football Team in Graz. Dort fungiere ich
              als Punter und Starting Running Back in der U16.<br></br>
              <br></br>Ich habe schon viele verschiedene Sportarten in meinem
              Leben ausprobiert, aber nichts konnte mich bisher so begeistern
              wie Football. Von den athletischen Ansprüchen her perfekt auf
              meine Stärken angepasst und nirgendwo sonst gibt es einen
              stärkeren Teamgeist.
            </p>
          }
          img={football1}
          position={"left"}
          date={"14.7.2023"}
        ></Card>

        <br id="mountainbiking"></br>
        <Card
          title={"Mountainbiking"}
          text={
            <p>
              Durch meinen Hauptwohnsitz in Lannach und dem damit nur 1 Minute
              entfernten{" "}
              <Link
                href={
                  "https://www.lannach.gv.at/page/79/bike-trail-park-lannach"
                }
              >
                Trailpark Lannach
              </Link>{" "}
              muss ich diese Chance natürlich nutzen und gehe regelmäßig
              Mountainbiken. <br></br>
              <br></br>So richtig damit begonnen habe ich aber erst durch einen
              meiner besten Freunde,{" "}
              <Link href={"http://markus.prietl.eu"}>Markus. </Link>Er
              praktiziert schon eine ganze Weile jegliche Radsportarten.
            </p>
          }
          img={sports4}
          position={"right"}
          date={"19.7.2023"}
        ></Card>

        <br id="soccer"></br>
        <Card
          title={"Fußball"}
          text={
            <p>
              Mein Vater hat eine große Leidenschaft für Fußball, daher habe ich
              schon in sehr jungen Jahren mit dem Training begonnen, allerdings
              spiele ich mittlerweile nicht mehr im Verein. <br></br>
              <br></br>Im Verein habe ich meistens als Verteidiger gespielt oder
              wurde im Mittelfeld eingesetzt. In der Klassenmannschaft fungiere
              ich allerdings als Tormann.
            </p>
          }
          img={sports3}
          position={"left"}
          date={"19.7.2023"}
        ></Card>

        <br id="calisthenics"></br>
        <Card
          title={"Calisthenics"}
          text={
            <p>
              Im Gegensatz zu vielen anderen, präferiere ich das trainieren zu
              Hause mit dem eigenen Körpergewicht statt ins Fitnessstudio zu
              gehen. <br></br>
              <br></br>Calisthenics bringen ihre eigenen Vorteile mit, so bleibt
              man viel agiler und kann mehr Übungen ausführen als ein normaler
              Kraftsportler, wie z.B ein L-Sit to Handstand wie man es hier
              sieht.
            </p>
          }
          img={sports5}
          position={"right"}
          date={"19.7.2023"}
        ></Card>

        <br id="boardsports"></br>
        <div className="title2 center gridi-center">Brettsportarten</div>

        <br id="snowboarding"></br>
        <Card
          title={"Snowboarding"}
          text={
            <p>
              Im Winter mach ich gerne die Pisten unsicher. Mein Fahrstil ist
              sehr... schnell. Ich bin ein großer Fan von Geschwindigkeit
              deshalb fahre meistens Schuss. Oder ich versuche mich an
              unterschiedlichen Tricks, zum Beispiel an einer 360° Drehung, die
              dann einbisschen schief gegangen ist.
            </p>
          }
          img={sports6}
          position={"left"}
          date={"19.7.2023"}
        ></Card>

        <br id="skateboarding"></br>
        <Card
          title={"Skateboarding"}
          text={
            <p>
              Eines meiner Hauptfortbewegungsmittel, wenn ich kurze Strecken
              zurücklegen muss, ist mein Skateboard.<br></br>
              <br></br>Das Skateboard das ich fahre hat einiges überstanden, mit
              dabei von einem Auto überfahren werden (streng genommen ist das
              Deck kaputt gewesen, aber es wurde ausgetauscht). Früher
              elektrisch angetrieben, mittlerweile pure Muskelkraft wegen einem
              defekten Akku.
            </p>
          }
          img={sports8}
          position={"right"}
          date={"19.7.2023"}
        ></Card>

        <br id="wakeboarding"></br>
        <Card
          title={"Wakeboarding"}
          text={
            <p>
              Wenn es zu heiß zum Snowboarden ist, ist es warm genug zum
              Wakeboarden!<br></br>
              <br></br>Im Sommer nehme ich mir immer eine Woche Zeit um täglich
              Wakeboarden zu gehen.
            </p>
          }
          img={sports7}
          position={"left"}
          date={"19.7.2023"}
        ></Card>

        <br id="strength"></br>
        <br></br>
        <br></br>
        <div className="title2 center gridi-center">Krafttraining</div>

        <Card
          title={"Info"}
          text={
            <p>
              Seit den Herbstferien 2021 (27.10) trainiere ich fast täglich. Das
              sind bis heute {Math.round(daysDiff)} Tage. Angefangen mit einer
              App, heute mit selbst erstellten{" "}
              <Link href={"#plan"}>Trainingsplan</Link> der jeden Monat
              geupdated wird.<br></br>
              <br></br>Wer sich für meine Ernährung interessiert, kann sich auf
              die nächste Version freuen.
            </p>
          }
          img={null}
          position={"left"}
          date={"5.8.2023"}
        ></Card>

        <br id="workouts"></br>
        <br></br>
        <br></br>
        <div className="title3 center gridi-center">Workouts</div>
        <Table
          url={
            "https://onedrive.live.com/embed?resid=999107596EE3D11B%21112950&authkey=!ABECRSUBJZSHP48&em=2"
          }
        ></Table>

        <br id="plan"></br>
        <div className="title3 center gridi-center">Trainingsplan</div>
        <Table
          url={
            "https://onedrive.live.com/embed?resid=999107596EE3D11B%21156160&authkey=!ACywZ-H57i6egwE&em=2"
          }
        ></Table>
      </div>
      <Footer></Footer>
    </>
  );
}
