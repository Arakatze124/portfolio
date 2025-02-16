//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Card from "../../components/card";
import Embed from "../../components/embed";
//CSS
import "../../styles/default.css";
//Media
import cooking1 from "../../media/cooking1.jpg";

const links = [
  new SideLink("Kochen", "#cooking", false),
  new SideLink("Ernährungsplan", "#plan", false)
];

export default function Cooking() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Kochen"} img={cooking1}></Banner>

          <br id="cooking"/>
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
            
            <br id="plan"/>
            <Card
            title={"Ernährungsplan"}
            text={<p>
                Kurze Anmerkung, das ist nur ein Plan. Ich geb mein bestes mich daran zu halten, aber Fehler sind menschlich.
                </p>}
            date={"16.7.2024"}
            />
            <Embed url="https://onedrive.live.com/embed?resid=999107596EE3D11B%21240576&authkey=%21ANEI82iSqS5FeyE&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"/>
      </Layout> 
    </>
  );
}
