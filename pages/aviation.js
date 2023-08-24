//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Banner from "../components/banner";
import Link from "next/link";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Images
import aviation1 from "../media/aviation1.jpg";
import aviation2 from "../media/aviation2.jpg";
import aviation3 from "../media/aviation3.jpg";
import aviation4 from "../media/aviation4.jpg";

const links = [
  new SideLink("Segelflug", "#glider", true),
  new SideLink("Raumfahrt", "#space", true),
  new SideLink("Luftstreitkämpfe", "#military", true),
];

export default function Aviation() {
  return (
    <>
      <NavigationBar active={"aviation"}></NavigationBar>
      <div className="grid">
        <Banner title={"Luft-Raumfahrt"} img={aviation1}></Banner>
        <div className="gridi-sidebar">
          <SideBar links={links} />
        </div>

        <br id="glider"></br>
        <Card
          title={"Segelflug"}
          text={
            <p>
              Meine erste richtige Flugerfahrung habe ich bei der{" "}
              <Link href={"https://www.flugsportunion.at"} target="_blank">
                steirischen Flugsportunion
              </Link>{" "}
              gesammelt. Dort habe ich n einem 1 wöchigen Kurs teilgenommen und
              2 Flüge gehabt
            </p>
          }
          img={aviation4}
          position={"left"}
          date={"25.7.2023"}
        ></Card>

        <br id="space"></br>
        <Card
          title={"Raumfahrt"}
          text={
            <p>
              Wenn es um Raumfahrt und das Weltall im generellen geht, bin ich
              auch sehr interressiert. So habe ich einige Sandbox Spiele wie KSP
              gespielt, in denen man eigene Raumfahrzeuge baut und
              interplanetare Reisen durchführt
            </p>
          }
          img={aviation3}
          position={"right"}
          date={"25.7.2023"}
        ></Card>

        <br id="military"></br>
        <Card
          title={"Luftstreitkräfte"}
          text={
            <p>
              Gleich vorweg, Krieg = Schlecht, aber Kampfjets = Cool. Was
              Flugzeuge, insbesondere Kampfjets angeht, bin ich meistens der
              Fachmann im Raum. Mein Lieblingsflugzeug ist die F35B-Lighting II,
              ein Mehrzweck-Stealth-Kampfjet des Hauses Locheed Martin. Ich kann
              mir eine Karriere im Luftgeschwarder des Östereichischen
              Bundesheer sehr gut vorstellen, wenn nicht sogar, mein größtes
              Ziel.
            </p>
          }
          img={aviation2}
          position={"left"}
          date={"25.7.2023"}
        ></Card>
      </div>
      <Footer></Footer>
    </>
  );
}
