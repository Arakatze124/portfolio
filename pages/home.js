import React from "react";
import "../styles/default.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import Image from "next/image";
import Home1 from "../media/home1.jpg";
import Card from "../components/card";
import "../styles/card.css";
import Link from "next/link";

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
            meine Hobbies und Interessen und wie man mich auf allen möglichen
            Plattformen
            <Link href={"/contact"}> kontaktieren</Link> kann. <br></br>
            <br></br>
            <span style={{ color: "red" }}>
              <b>
                Behalte im Kopf, dass diese Website noch nicht fertiggestellt
                ist!
              </b>
            </span>
            <br></br>
            Die Entwicklung hat Anfang Juni begonnen und ist sehr zeitaufwändig.
            Falls du Fehler findest, kannst du sie mir gerne melden!
          </p>
        }
        title={"Vorwort"}
        position={"left"}
        date={"6.7.2023"}
      ></Card>
      <Footer></Footer>
    </>
  );
}
