//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Footer from "../components/footer";
import Card from "../components/card";
import Banner from "../components/banner";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
import List from "../components/list";
//Media
import patchNotes1 from "../media/patchNotes1.jpg";

const links = [
  new SideLink("Version: 2", "#patchNotes", false),
  new SideLink("2.2", "#2", true)
];

export default function Contact() {
  return (
    <>
      <NavigationBar active={"contact"}></NavigationBar>
      <div className="grid">
        <Banner title={"Patch Notes"} img={patchNotes1}></Banner>

        <SideBar links={links} />

        <div className="flex gridi-center center">
          <div className="center flex-ignore"></div>
            
          <br id="2"></br>
          <Card
            title={"Version 2.2"}
            text={<List
                data={[
                    "Erstellung der Patch Notes Seite",
                    "Text Update Arland"
                ]}></List>}
            img={null}
            date={"20.10.2023"}
          ></Card>

<Card
            title={"Version 2.3"}
            text={<List
                data={[
                    "Musik Text überarbeitet",
                    "Neues Sport Banner"
                ]}></List>}
            img={null}
            date={"20.10.2023"}
          ></Card>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
