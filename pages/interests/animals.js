//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Card from "../../components/card";
//CSS
import "../../styles/default.css";
//Media
import animals1 from "../../media/animals1.jpg";
import animals2 from "../../media/animals2.jpg";

const links = [
  new SideLink("Slushy", "#slushy", false)
];

export default function Animals() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Tiere"} img={animals1}></Banner>

        <br id="slushy"></br>
        <div className="flex gridi-center center">
        <Card
          title={"Slushy"}
          text={<p>Schon seit ich klein bin, habe ich mir eine Katze gewünscht. 
            Ich habe mich schon immmer sehr verbunden mit Tieren gefühlt, 
            deshlab war ich umso glücklicher als 2017 mein Wunsch in Erfüllung ging. 
            Ich habe eine Katze bekomm und sie hat sich den Namen Slushy ausgesucht. 
            Sie ist ein wichtiger Teil meines Lebens und ich bin sehr dankbar, dass sie bei mir ist.
            </p>}
          img={animals2}
          date={"16.7.2024"}
        />
         </div>
      </div>
      </Layout>
    </>
  );
}
