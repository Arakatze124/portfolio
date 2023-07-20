import React from "react";
//Components
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Card from "../components/card"
import Link from "next/link";
import Banner from "../components/banner";
//CSS
import "../styles/test.css"
import '../styles/default.css'
import '../styles/sideBar.css'
//Images
import Kaindorf1 from "../media/kaindorf1.jpg"
import pmsdobl1 from "../media/pmsdobl1.jpg"
import vslannach1 from "../media/vslannach1.jpg"
import Career1 from "../media/career1.jpg"

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
let schoolYear;

if (currentMonth >= 8) {
  schoolYear = currentYear - 2021 + 1;
} else {
  schoolYear = currentYear - 2021;
}

console.log("Aktuelles Schuljahr:", schoolYear);

const links = [
  new SideLink("Schulen", "#schools", false),
   new SideLink('HTBLA Kaindorf', '#htlKaindorf', true),
   new SideLink('PMS Dobl', '#pmsDobl', true),
   new SideLink('VS Lannach', '#vsLannach', true),
];


function Career(){
return (
<>
<NavigationBar></NavigationBar>

<div className="grid">

<Banner
title={"Karriere"}
img={Career1}>
</Banner>
  <br id="schools"></br>
  <h1 className='center title2 gridi-center'>
      Schulen
  </h1>

        <div className="gridi-sidebar">
          <SideBar links={links} />
        </div>
        
        <br id="htlKaindorf"></br>
        <br></br>
        <Card
          headline={"HTBLA Kaindorf"}
          text={<p>Die <Link href={"https://www.htl-kaindorf.at/"} target="_blank">Höhere Technische Bildungslehranstalt in Kaindorf</Link> ist der aktuelle Ort meiner Ausbildung. Da ich den Fachbereicht Informatik gewählt habe, lerne ich dort einige Themenbezogene Gegenstände. Mehr zu den Lehrinhalten <b><Link href={"https:www.htl-kaindorf.at/abteilungen/informatik"} target="_blank">hier</Link></b>, zusätzlich dazu besuche ich den Freigegenstand Spanisch.<br></br><br></br> Meine Ausblidung habe ich 2021 begonnen und befinde mich demnach im {schoolYear}ten Schuljahr.</p>}
          img={Kaindorf1}
          position={"left"}>
        </Card>

        <br id="pmsDobl"></br>
        <Card
          headline={"PMS Dobl"}
          text={<p>Die <Link href={"https://www.pms-dobl.at/"} target="_blank">Private Mittelschule in Dobl</Link> ist die Schule des Schulvereins der Barmherzigen Schwestern Schloss Dobl. <br></br><br></br> In dieser Schule haben einige meiner jetzigen Hobbys ihren Platz in meinem Leben gefunden. So zum Beispiel habe ich den Freigegenstand Akrobatik besucht welcher mich später zu Parcour brachte oder der Beitritt des Chor, wessen ich zwar wieder zurückgezogen habe, aber Musik immernoch ein großer Teil meines Lebens geblieben ist</p>}
          img={pmsdobl1}
          position={"right"}
        ></Card>

        <br id="vsLannach"></br>
        <Card 
          headline={"VS Lannach"}
          text={<p>Die <Link href={"https://www.vs-lannach.at/"} target="_blank">Volksschule Lannach</Link>. Nun, über die Volksschule kann man ja wohl nicht viel sagen oder? Ich war ein sehr aufgedrehtes Kind, hab den Unterricht gestört, bin auf Sachen geklettert auf die ich nicht hoch durfte und so weiter ... Ich hab meine jungen Jahre voll und ganz ausgelebt</p>}
          img={vslannach1}
          position={"left"}>
        </Card>

        <br></br>
      </div>
    </>
)
}

export default Career;