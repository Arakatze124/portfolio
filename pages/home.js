import React from 'react'
import '../styles/default.css'
import NavigationBar from '../components/NavigationBar'
import Image from "next/image";
import Home1 from "../media/home1.jpg"
import Card from "../components/card"
import "../styles/card.css"
import "../styles/default.css"
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <h1 className='center title2'>
      Dean Opara</h1>
      <Card 
        img={Home1}
        text={
          <p className=''><b>Herzlich Willkommen auf meiner Website!</b><br></br><br></br>Ich habe diese Website selbst erstellt, um dir einen besseren Einblick in meine Person zu ermöglichen. <br></br><br></br>Hier findest du alles relevante über mich, meine bisherige (und zukünftige?) Karriere, meine Hobbies und Interessen und wie man mich<Link href={'/contact'}>kontaktieren</Link> die Möglichkeit.</p>}
        headline={"Vorwort"}
        position={"left"}>
      </Card>
    </>

  )
}
