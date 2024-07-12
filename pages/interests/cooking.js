//Components
import React from "react";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
//CSS
import "../../styles/default.css";
//Media
import cooking1 from "../../media/cooking1.jpg";
import Layout from "../../components/layout";

const links = [
  new SideLink("Ernährungsplan", "#mplan", false)
];

export default function Cooking() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        <Banner title={"Kochen"} img={cooking1}></Banner>

        <div className="flex gridi-center center">

         </div>
      </div>
      </Layout>
    </>
  );
}
