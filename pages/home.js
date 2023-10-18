import React from "react";
import "../styles/default.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import Image from "next/image";
import Home1 from "../media/home1.jpg";
import Card from "../components/card";
import "../styles/card.css";
import Link from "next/link";

const currentDate = new Date();
const birthday = new Date('2007-08-13')
const age = Math.floor((currentDate - birthday) / (1000 * 60 * 60 * 24 * 365.25));

export default function Home() {
  return (
    <>
      <NavigationBar active={"home"}></NavigationBar>
      <h1 className="center title1 home">Dean Opara</h1>
      <Card
        img={Home1}
        text={
          <p className="">
            <b>Herzlich Willkommen auf meiner Website!</b>
            <br></br>
            <br></br>
            Ich habe diese Website selbst erstellt, um dir einen besseren
            Einblick in meine Person zu ermöglichen. <br></br>
            <br></br>
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
        position={"left"}
        date={"6.7.2023"}
      ></Card>

      <Card
        img={null}
        text={
          <p className="">
            Mein Name ist Dean Opara und ich bin ein {age}-Jähriger aus Lannach.
            Ich bin jemand, der schwer ist von einer Sache abzubringen wenn ich
            erstmal davon überzeugt bin, auch wenn das oft bedeutet gegen den
            Strom zu schwimmen. Mein Ziel ist es, die beste Version von mir
            selbst zu werden, dabei aber immer noch Spaß am Leben zu haben. Ich
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
        title={"Wer bin ich?"}
        position={""}
        date={"8.10.2023"}
      ></Card>
      <Footer></Footer>
    </>
  );
}
