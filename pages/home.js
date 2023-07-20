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
    <h1 className='center headline'>
      Home</h1>
      <Card 
        img={Home1}
        text={
          <p className=''><b>Herzlich Willkommen auf meiner Website!</b><br></br><br></br> Ich habe diese Website auf eigene Hand erstellt und Sie dient dazu, meine Wenigkeit der Öffentlichkeit darzustellen. Hier erfüährt man, was ich in meiner Freizeit mache und wie meine Karriere bisher verlaufen ist. <br></br><br></br>Falls das Interesse besteht Kontakt aufzunehmen, gibt es <Link href={'/contact'}>hier</Link> die Möglickeit.</p>}
        headline={"Vorwort"}
        position={"left"}>
      </Card>
    </>

  )
}
