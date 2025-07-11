//Components
import React from "react";
import SideLink from "../../components/SideLink.js";
import Card from "../../components/card.js";
import Banner from "../../components/banner.js";
import Link from "next/link";
import Embed from "../../components/embed.js";
//CSS
import "../../styles/default.css";
//Media
import sports1 from "../../media/sports1.jpg";
import sports2 from "../../media/sports2.gif";
import sports3 from "../../media/sports3.jpg";
import sports4 from "../../media/sports4.gif";
import sports5 from "../../media/sports5.gif";
import sports6 from "../../media/sports6.gif";
import sports7 from "../../media/sports7.gif";
import sports8 from "../../media/sports8.jpg";
import football1 from "../../media/football1.jpg";
import Layout from "../../components/layout.js";

const currentDate = new Date();
const october21 = new Date("2021-10-21");
const timeDiff = currentDate.getTime() - october21.getTime();
const daysDiff = timeDiff / (1000 * 3600 * 24);

const links = [
  new SideLink("Sportarten", "#sports", false),
  new SideLink("American Football", "#football", true),
  new SideLink("Parkour", "#parcour", true),
  new SideLink("Mountainbiking", "#mountainbiking", true),
  new SideLink("Fußball", "#soccer", true),
  new SideLink("Calisthenics", "#calisthenics", true),
  new SideLink("Brettsportarten", "#boardsports", false),
  new SideLink("Snowboarding", "#snowboarding", true),
  new SideLink("Skaten", "#skateboarding", true),
  new SideLink("Wakeboarding", "#wakeboarding", true),
  new SideLink("Krafttraining", "#strength", false),
  new SideLink("Personal Records", "#prs", true),
];

export default function Sports() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Sport"} img={sports1}></Banner>

        <br id="sports"></br>
        <div className="title2 center gridi-center">Sportarten</div>

        <div className="title3 center gridi-center">American Football</div>
        <br id="football"></br>
        <Card
         
          text={
            <p>
              Seit Juli, 2023 bin ich stolzes Mitglied der{" "}
              <Link href={"https://www.grazgiants.at"} target="_blank">Thalheim Graz Giants</Link>,
              einem österreichischen Football Team in Graz. Dort spiele ich als starting Runningback in der U18.
              <br/><br/>
              In meiner ersten Saison konnte ich mich als Rookie beweisen. Mit
              über 1000 Yards in der gesamten Season und mind. 1 Touchdown pro
              Game wurde mir als Ausnahmetalent der Award des Rookie of the Year
              der Graz Giants verliehen.
              Nach einer zwar persönlich erfolgreichen Season ist es mein Ziel mich 
              stetig weiter zu verbessern und das Land Österreich im Nationalteam zu vertreten.
            </p>
          }
          img={football1}
          position={"right"}
          date={"14.7.2023"}
        ></Card>

        <Embed url={"https://www.hudl.com/embed/video/3/20153906/6737285ad51e98451a07fd23"} />

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
          position={"left"}
          date={"9.12.2023"}
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
                }target="_blank"
              >
                Trailpark Lannach
              </Link>{" "}
              muss ich diese Chance natürlich nutzen und gehe regelmäßig
              Mountainbiken. <br></br>
              <br></br>So richtig damit begonnen habe ich aber erst durch einen
              meiner besten Freunde,{" "}
              <Link href={"http://markus.prietl.eu"} target="_blank">Markus. </Link>Er
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
              spiele ich mittlerweile nicht mehr im Verein.
              <br/><br/>
              Im Verein habe ich meistens als Verteidiger gespielt oder
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
              App, heute mit selbst erstellten Trainingsplan der laufend
              angepasst wird.
              <br/><br/>
              Falls die unten angebotenen Daten nicht reichen, könnt ihr auf meinem <Link target="_blank" href={"https://hevy.com/user/deanus_124"}>Hevy Profil</Link> aktuelle Trainingsdaten ansehen, oder ihr 
              könnt mich <Link  href={"#contact"}>kontaktieren</Link>.
            </p>
          }
          img={null}
          position={"left"}
          date={"5.8.2023"}
        ></Card>
{
        /*
        <br id="plan"></br>
        <div className="title3 center gridi-center">Trainingsplan</div>
        <Embed
          url={
            "https://onedrive.live.com/embed?resid=999107596EE3D11B%21156160&authkey=!ACywZ-H57i6egwE&em=2"
          }
        ></Embed>
        */
}
        <br id="prs"></br>
        <div className="title3 center gridi-center">Personal Records</div>
        <Embed
          url={
            "https://onedrive.live.com/embed?resid=999107596EE3D11B%21253528&authkey=%21ANHLvzxQ9xwfZqQ&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
          }
          height={100}
        ></Embed>
      </div>
      </Layout>
    </>
  );
}
