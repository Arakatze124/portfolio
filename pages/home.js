import React from "react";
import "../styles/default.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import Home1 from "../media/home2.jpg";
import Home3 from "../media/home3.jpg";
import Home4 from "../media/home4.jpg";
import Card from "../components/card";
import "../styles/card.css";
import Link from "next/link";
import Banner from "../components/banner";

const currentDate = new Date();
const birthday = new Date('2007-08-13')
const age = Math.floor((currentDate - birthday) / (1000 * 60 * 60 * 24 * 365.25));

export default function Home() {
  return (
    <>
      <NavigationBar active={"home"}></NavigationBar>
      <Banner
       img={Home1}
       title={"Dean Opara"}
       />
      <Card
        img={Home3}
        text={
          <p className="">
            <b>Herzlich Willkommen auf meiner Website!</b>
            <br/><br/>
            Ich freue mich über dein Interesse und hoffe, dass du hier findest wonach du suchst.
            <br/><br/>
            Hier findest du alles relevante über mich. Meine bisherige Karriere,
            meine Interessen und wie man mich
            <Link href={"/contact"}> kontaktieren</Link> kann. <br></br>
            <br></br>
            <br></br>
            Die Entwicklung hat Anfang Juni begonnen und läuft immer weiter.
            Falls du Fehler findest, kannst du sie mir gerne melden!
          </p>
        }
        title={"Vorwort"}
        date={"4.7.2024"}
      ></Card>

      <Card
        img={Home4}
        position={"left"}
        text={
          <p className="">
            Mein Name ist Dean Opara und ich bin {age} Jahre alt.
            Wenn ich mir erstmal etwas in den Kopf gesetzt habe, ist es schwer 
            mich davon abzubringen, auch wenn das oft bedeutet gegen den
            Strom zu schwimmen. Mein Ziel ist es, die beste Version von mir
            selbst zu werden, dabei aber nicht auf Spaß zu verzichten. Ich
            bin eher extrovertiert, das heißt ich hab kein Problem damit auf
            Leute zuzugehen und schließe prinzipiell schnell neue
            Freundschaften. Ich bin offen und ehrlich, habe also kein Problem
            damit Fragen zu beantworten und lüge ungern jemanden an. Ich bin
            sehr energiegeladen und wer in meiner Nähe ist, merkt das auch. Wenn
            es wichtig ist, kann ich mich natürlich konzentrieren. Ich bin ein
            totaler Listenmensch und schreibe mir so gut wie alles auf und plane
            meinen Alltag durch. Wenn es allerdings um Schule geht, bin ich eher
            der Improvisationskünstler. Außerdem bin ich ein großer Fan von
            Adrenalin und Geschwindigkeit. Ich bin ein Poweruser, das bedeutet
            ich liebe es wenn einfache Sachen viele Funktionen haben und ich sie
            in ganzer Breite benutzen kann.{" "}
          </p>
        }
        title={"Wie würde ich mich beschreiben?"}
        date={"3.7.2024"}
      ></Card>
      <Footer></Footer>
    </>
  );
}
