//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import Layout from "../../components/layout";
//CSS
import "../../styles/default.css";
//Media
import animals1 from "../../media/animals1.jpg";

const links = [
  new SideLink("Slushy", "#slushy", false)
];

export default function Animals() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Tiere"} img={animals1}></Banner>

        <div className="flex gridi-center center">

         </div>
      </div>
      </Layout>
    </>
  );
}
