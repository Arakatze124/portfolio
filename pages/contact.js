//Components
import React from "react";
import SideLink from "../components/SideLink";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
//CSS
import "../styles/default.css";
//Media
import contact1 from "../media/contact1.jpg";
import Reference from "../components/reference";
import iconMail from "../media/iconMail.png";
import iconInstagram from "../media/iconInstagram.png";
import iconGithub from "../media/iconGithub.png";

const links = [
  new SideLink("E-Mail", "#mail", false),
  new SideLink("Github", "#github", false),
  new SideLink("Instagram", "#instagram", false),
];

export default function Contact() {
  return (
    <>
      <Layout sideBarLinks={links} active={"contact"}>
      <div className="grid">
        <Banner title={"Kontakt"} img={contact1}></Banner>

        <div className="flex gridi-center center">
          <div className="center flex-ignore"></div>

          <br id="mail"></br>
          <Reference
            link={"mailto:dean@opara.at"}
            text={"dean@opara.at"}
            icon={iconMail}
            title={"E-Mail"}
          ></Reference>

          <br id="github"></br>
          <Reference
            title={"Github"}
            text={"Arakatze124"}
            link={"https://github.com/Arakatze124"}
            icon={iconGithub}
          ></Reference>

          <br id="instagram"></br>
          <Reference
            title={"Instagram"}
            text={"deanus_124_"}
            link={"https://www.instagram.com/deanus_124_/"}
            icon={iconInstagram}
          ></Reference>
        </div>
      </div>
      </Layout>
    </>
  );
}
