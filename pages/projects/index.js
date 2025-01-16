//Components
import React from "react";
import Layout from "../../components/layout";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import Link from "next/link";
//CSS
import "../../styles/default.css";
//Media 
import projects1 from "../../media/IWasHere.jpg";

const links = [
    new SideLink("I Was Here", "#IWasHere", false), 
];

export default function Projects() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
        <Link href="/projects/IWasHere"> 
          <Banner title={"I Was Here"} img={projects1}></Banner>
        </Link>   
      </Layout>
    </>
  );
}
