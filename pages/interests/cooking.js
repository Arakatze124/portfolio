//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Card from "../../components/card";
//CSS
import "../../styles/default.css";
//Media
import cooking1 from "../../media/cooking1.jpg";

const links = [
  new SideLink("Kochen", "#cooking", false),
  new SideLink("Ernährungsplan", "#mplan", false)
];

export default function Cooking() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Kochen"} img={cooking1}></Banner>

          <Card
          title={"Kochen"} 
          text={<p>
                Zu einem gesunden Lifestyle gehört auch eine gesunde Ernährung.
                deshalb habe ich mir schon sehr früh die Fähigkeit angeeignet,
                selber zu kochen. Ich koche zwar meistens nur einfache Gerichte,
                aber ich finde es sehr wichtig, dass man sich selbst versorgen kann.
          </p>}
          date={"16.7.2024"}
          />

         </div>
     
      </Layout>
    </>
  );
}
