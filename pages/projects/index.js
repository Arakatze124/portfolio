//Components
import React from "react";
import Layout from "../../components/Layout";
import SideLink from "../../components/SideLink";
import Banner from "../../components/Banner";
import Link from "next/link";
//Media
//import projects1 from "../../media/projects1.jpg";
//CSS
import "../../styles/default.css";
//Media 

const links = [
    new SideLink("I Was Here", "#IWasHere", false), 
];

export default function Projects() {
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
        <Link href="/projects/IWasHere"> 
          <Banner title={"I Was Here"} img={""}></Banner>
        </Link>   
      </Layout>
    </>
  );
}
