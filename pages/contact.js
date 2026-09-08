//Components
import React from "react";
import SideLink from "../components/SideLink";
//CSS
import "../styles/default.css";
//Media
import Reference from "../components/reference";
import iconMail from "../media/iconMail.png";
import iconInstagram from "../media/iconInstagram.png";

const links = [
  new SideLink("E-Mail", "#mail", false),
  new SideLink("Github", "#github", false),
  new SideLink("Instagram", "#instagram", false),
];

export default function Contact() {
  return (
    <>
      <div className="grid">
        <div id="contact" className="title1 center gridi-center">Kontakt</div>
        <div className="flex gridi-center center">
          <div className="center flex-ignore"></div>

          <br id="mail"></br>
          <Reference
            link={"mailto:dean@opara.at"}
            text={"dean@opara.at"}
            icon={iconMail}
            title={"E-Mail"}
          ></Reference>

          {/*          <br id="github"></br>
          <Reference
            title={"Github"}
            text={"Arakatze124"}
            link={"https://github.com/Arakatze124"}
            icon={iconGithub}
          ></Reference> 
          */}


          <br id="instagram"></br>
          <Reference
            title={"Instagram"}
            text={"opara_dean"}
            link={"https://www.instagram.com/opara_dean/"}
            icon={iconInstagram}
          ></Reference>
        </div>
      </div>
    </>
  );
}
