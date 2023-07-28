
  //Components
  import React from 'react'
  import NavigationBar from '../components/NavigationBar'
  import SideBar from "../components/SideBar";
  import SideLink from "../components/SideLink";
  import Card from "../components/card"
  import Banner from "../components/banner"
  import Link from 'next/link';
  import Carousel from '../components/carousel.js';
  import 'react-responsive-carousel/lib/styles/carousel.min.css'
  //CSS
  import '../styles/default.css'
  import '../styles/sideBar.css'
  //Media
  import bikes1 from "../media/bikes1.jpeg"
  import bikes2 from "../media/bikes2.jpeg"
  import bikes3 from "../media/bikes3.jpg"
  import bikes4 from "../media/bikes4.png"


  const links =[
    new SideLink("displayName", "#id", "issubpoint"),
  ]
  
  export default function Bikes() {
    return (
      <>
        <NavigationBar active={"bikes"}></NavigationBar>
        <div className="grid">
          <Banner
             title={"Motorräder"}
             img={bikes1}>
          </Banner>
          <div>
             <SideBar links={links} />
          </div>

          <div className='title1 center gridi-center'>Mein Moped</div>
          <div className='title2 center gridi-center'>Modell</div>
          <Card
            title={"Daten"}
            text={<p>Im Juni 2022 habe ich eine Beta RR 50 Track, Baujahr 2017 erworben, und mit ihm so einiges erlebt.</p>}
            img={bikes2}
            position={"right"}
          ></Card>

          <div className='title2 center gridi-center'>Geschichte</div>
          <Card
            title={"Tuning"}
            text={<p>Wie so ziemlich jeder Moped besitzer mit einer Supermoto hat sein Moped nicht ganz im originalen Zustand gelassen.
               In meiner Umgebung allerdings, war ich, ohne anzugeben, der wohl extremste. Dabei war mein Moped nicht so stark modifiziert wie manch andere.
                Genaue Details mit der Zeitlinie befinden sich auf der nächsten Seite</p>}
            img={bikes3}
            position={"left"}
          ></Card>

          <Card
            title={"Die erste Woche"}
            text={<p>Am 15.8.22, 2 Tage nach meinem Geburtstag, erhielt ich meinen vorläufigen Führerschein. 
              Die Woche zuvor hat ein guter Freund von mir leider sein Kennzeichen abgenommen bekommen und musst zurück zum Originalzustand bauen. 
              Dadurch hatte er einen Sportauspuff von Radical Racing zu vergeben. Welchen ich ihm in seiner Not, 1 Woche nach Erhalt meines Führerscheins, 
              abgenommen habe. Als ich besagten Freund dann einmal auf meinem Moped mitnahm, hatt ich derzeit eine sehr kurze Übersetzung, was bedeuted,
              dass mein Motor sehr hoch dreht, dazu kommt das wir einen Berg hochgefahren sind. Mein Kolben konnte der Hitze nichtmehr stand halten 
              und hat sich im Zylinder ausgedehnt wodurch es zum stillstand des Motors und Schaden an Kolben- und Zylinderwand kam.</p>}
            img={null}
            position={"right"}
          ></Card>

          <Card
          title={"1 Monat nach Führerschein Erhalt"}
          text={<p>Ca. 1 Monat danach habe ich mir, aufgrund von mangelnder Leistung und erneutem anreiben des Kolbens wegen zu hoher Hitze,
            einen 70ccm Grauguss Zylinder der Marke Radical Racing zugelegt. Zu dieser Zeit hatte ich auch den ersten Unfall in meiner Laufbahn.
            Dieser war selbstverschuldet und es wurden keine anderen Personen außer mit verletzt.
            Dabe habe während eines gefährlichen Stunts den Kontakt zu meinem Moped verloren und bin... naja... runter gefallen.
            Mein Moped hat den Unfall mit einpaar kleinen Kratzern überlebt und ich hatte auch nur 1-2 Prellungen.</p>}
          position={"left"}
          img={null}
          ></Card>

          <Card
          title={"Der Felgen Vorfall"}
          text={<p>Einige Zeit später musste ich auch von diesem Zylinder abschied nehmen, da man Graguss Zylinder immer warm fahren muss,
            und ich dies ausnahmsweise aus lies, wurde er total vernichtet. Darauf habe ich einen 70ccm Airsal Sportzylinder eingebaut,
            welcher bis zum Ende ohne weitere Reiber überlebte. An einem Schicksal haften Tag fuhr ich in die Schule, ganz normal.
            Plözlich blockierte mein Hinterrad, aber nicht wie es normalerweise bei Kolbenklemmern geschieht, sondern nur kurz und dann ging wieder alles normal
            Ab diesem Zeitpunkt entschied ich mich den restlichen Weg zur Schule zu schieben. Auf dem Weg blockiert immer wieder mein Hinterrad obwohl ich die Kupplung zog.
            Dann fiel es mir auf. Die Schrauben, die den Kettenkranz mit der Felge verbinden, haben sich gelockert und sind an der Schwinge angestanden.
            Teile der Felge wurden dabei ausgerissen. Ein netter Mann, bot mir an mich zur Schule zu fahren, da der Weg noch weit war und ich schon zu spät war,
            zögerte ich nicht lang und stieg in seinen weißen Transporter. Mein Moped ließ ich währenddessen im Wald stehen.
            Nach der Schule schob ich es den restlichen Weg zur SChule und dort stellte ich es ab, bis ich die Felge vor Ort reparieren konnte</p>}
          img={null}
          position={"left"}
          ></Card>

          <Card
          title={"Das Ende"}
          text={<p>Der letzte Punkt in unserer Geschichte. So zusagen, der Anfang vom Ende. Ende März des Jahres 2023 legt ich mir einen Blaze Racing 70 zu,
            dieser Auspuff steigert durch seine besondere Bauweise erheblich die Leistung. Dadurch konnte ich problemlos mit meinen Freunden mithalten,
            die zu dieser Zeit schon ihre 125er hatten. Am 11.4.2023 hielt mich ein Zivilpolizist an und hat einen Motorradspezialisten angefordert,
            welcher mir die Zulassung für mein Moped entzog. Es folgte eine Strafe von 470€ (ursprünglich 770€). Das Moped wird am 11.8 der Landesprüfhalle vorgeführt</p>}
          position={"left"}
          img={null}
          ></Card>

          <div className='title2 center gridi-center'>Gallerie</div>
          <div className='center gridi-center'>
          <Carousel>
                <div>
                    <img src={bikes1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            </div>
        </div>
      </>
    )
  }
  