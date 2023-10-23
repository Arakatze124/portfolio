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


const links = [
 
  
];

export default function Sports() {
  return (
    <>
      <Card
        title={"Welcome to the Backrooms!"}
        text={<p>Wenn du hier bist, bedeuted das entweder das ich dir diese url gegeben habe, oder das du Glück beim eingeben hattest.<br></br><br></br>
        Auf dieser Seite befinden sich Information die möglicherweise "unseriös" wirken könnten weswegen ich sie nicht einfach so auf meiner normalen Homepage zur Verfügung stellen kann. Deshalb ist sie auch nicht ganz so schön und strukturiert, ich hoffe, dass macht dir nix aus.<br></br>
        <br></br>Viel Spaß</p>}
        img={null}
      ></Card>
      <Card
        title={"Meine Mopedzeit"}
        text={<p><h1>Tuning</h1>
        Wie so ziemlich jeder Moped besitzer mit einer Supermoto hat sein Moped nicht ganz im originalen Zustand gelassen. In meiner Umgebung allerdings, war ich, ohne anzugeben, der wohl extremste. Dabei war mein Moped nicht so stark modifiziert wie manch andere. Genaue Details mit der Zeitlinie befinden sich auf der nächsten Seite.
        <br></br><br></br><br></br>
        <h1>Die erste Woche</h1>
        Am 15.8.22, 2 Tage nach meinem Geburtstag, erhielt ich meinen vorläufigen Führerschein. Die Woche zuvor hat ein guter Freund von mir leider sein Kennzeichen abgenommen bekommen und musst zurück zum Originalzustand bauen. Dadurch hatte er einen Sportauspuff von Radical Racing zu vergeben. Welchen ich ihm in seiner Not, 1 Woche nach Erhalt meines Führerscheins, abgenommen habe. Als ich besagten Freund dann einmal auf meinem Moped mitnahm, hatt ich derzeit eine sehr kurze Übersetzung, was bedeuted, dass mein Motor sehr hoch dreht, dazu kommt das wir einen Berg hochgefahren sind. Mein Kolben konnte der Hitze nichtmehr stand halten und hat sich im Zylinder ausgedehnt wodurch es zum stillstand des Motors und Schaden an Kolben- und Zylinderwand kam.
        <br></br><br></br><br></br>
        <h1>1 Monat nach Führerscheinerhalt</h1>
        Ca. 1 Monat danach habe ich mir, aufgrund von mangelnder Leistung und erneutem anreiben des Kolbens wegen zu hoher Hitze, einen 70ccm Grauguss Zylinder der Marke Radical Racing zugelegt. Zu dieser Zeit hatte ich auch den ersten Unfall in meiner Laufbahn. Dieser war selbstverschuldet und es wurden keine anderen Personen außer mit verletzt. Dabe habe während eines gefährlichen Stunts den Kontakt zu meinem Moped verloren und bin... naja... runter gefallen. Mein Moped hat den Unfall mit einpaar kleinen Kratzern überlebt und ich hatte auch nur 1-2 Prellungen.
        <br></br><br></br><br></br>
        <h1>Der Felgen Vorfall</h1>
        Einige Zeit später musste ich auch von diesem Zylinder abschied nehmen, da man Graguss Zylinder immer warm fahren muss, und ich dies ausnahmsweise aus lies, wurde er total vernichtet. Darauf habe ich einen 70ccm Airsal Sportzylinder eingebaut, welcher bis zum Ende ohne weitere Reiber überlebte. An einem Schicksal haften Tag fuhr ich in die Schule, ganz normal. Plözlich blockierte mein Hinterrad, aber nicht wie es normalerweise bei Kolbenklemmern geschieht, sondern nur kurz und dann ging wieder alles normal Ab diesem Zeitpunkt entschied ich mich den restlichen Weg zur Schule zu schieben. Auf dem Weg blockiert immer wieder mein Hinterrad obwohl ich die Kupplung zog. Dann fiel es mir auf. Die Schrauben, die den Kettenkranz mit der Felge verbinden, haben sich gelockert und sind an der Schwinge angestanden. Teile der Felge wurden dabei ausgerissen. Ein netter Mann, bot mir an mich zur Schule zu fahren, da der Weg noch weit war und ich schon zu spät war, zögerte ich nicht lang und stieg in seinen weißen Transporter. Mein Moped ließ ich währenddessen im Wald stehen. Nach der Schule schob ich es den restlichen Weg zur SChule und dort stellte ich es ab, bis ich die Felge vor Ort reparieren konnte
        <br></br><br></br><br></br>
        <h1>Das Ende</h1>
        Der letzte Punkt in unserer Geschichte. So zusagen, der Anfang vom Ende. Ende März des Jahres 2023 legt ich mir einen Blaze Racing 70 zu, dieser Auspuff steigert durch seine besondere Bauweise erheblich die Leistung. Dadurch konnte ich problemlos mit meinen Freunden mithalten, die zu dieser Zeit schon ihre 125er hatten. Am 11.4.2023 hielt mich ein Zivilpolizist an und hat einen Motorradspezialisten angefordert, welcher mir die Zulassung für mein Moped entzog. Es folgte eine Strafe von 470€ (ursprünglich 770€). Das Moped wird am 11.8 der Landesprüfhalle vorgeführt
        </p>}
        img={null}
      ></Card>
      <Footer></Footer>
    </>
  );
}
