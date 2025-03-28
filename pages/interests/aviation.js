//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Link from "next/link";
//CSS
import "../../styles/default.css";
//Images
import aviation1 from "../../media/aviation1.jpg";
import aviation2 from "../../media/aviation2.jpg";
import aviation3 from "../../media/aviation3.jpg";
import aviation4 from "../../media/aviation4.jpg";
import Layout from "../../components/Layout";

const links = [
  new SideLink("Segelflug", "#glider", true),
  new SideLink("Raumfahrt", "#space", true),
  new SideLink("Luftstreitkämpfe", "#military", true),
];

export default function Aviation() {
  const title = "Aviation";
  const img = aviation1;
  const details = (
    <>
      <Layout active={"interests"} sideBarLinks={links}>
      <div className="grid">
       

        <br id="glider"></br>
        <Card
          title={"Segelflug"}
          text={
            <p>
              Meine erste richtige Flugerfahrung habe ich bei der{" "}
              <Link href={"https://www.flugsportunion.at"} target="_blank">
                steirischen Flugsportunion
              </Link>{" "}
              gesammelt. Dort habe ich in einem einwöchigen Kurs an 2 Flügen
              teilgenommen.
            </p>
          }
          img={aviation4}
          position={"left"}
          date={"25.7.2023"}
        ></Card>

        <br id="space"></br>
        <Card
          title={"Raumfahrt"}
          text={
            <p>
              Wenn es um Raumfahrt und das Weltall im generellen geht, bin ich
              auch sehr interessiert. So habe ich einige Sandbox Spiele wie
              Kerbal Space Program gespielt, in denen man eigene Raumfahrzeuge
              baut und interplanetare Reisen durchführt.
            </p>
          }
          img={aviation3}
          position={"right"}
          date={"25.7.2023"}
        ></Card>

        <br id="military"></br>
        <Card
          title={"Luftstreitkräfte"}
          text={
            <p>
              Gleich vorweg möchte ich klarstellen, dass ich absolut kein Fan von 
              Krieg und Gewalt bin. Allerdings bin ich fasziniert von der Technik 
              rund um Kampfjets. Was mich wirklich begeistert ist die Höhe, die Schnellichkeit und 
              einfach das Gefühl von Freiheit. Und für steht klar, dass Kampfflugzeuge eben um ein vielfaches 
              cooler sind als Passagierflugzeuge. Und auch wenn ich gern eine Karriere in der Luftfahrt
              anstreben würde, werde ich das nicht können wenn es nicht mit meinem ethnischen Werten übereinstimmt.
            </p>
          }
          img={aviation2}
          position={"left"}
          date={"4.7.2024"}
        ></Card>
      </div>
      </Layout>
    </>
  );

  return { title, img, details };
}
