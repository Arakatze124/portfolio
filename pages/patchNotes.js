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
import {Siemreap} from "next/dist/compiled/@next/font/dist/google";
import Layout from "../components/layout";

const links = [
    new SideLink("Version: 3", "#3.0", false),
    new SideLink("3.0", "#3.0", true),
    new SideLink("Version: 2", "#2.5", false),
    new SideLink("2.5", "#2.5", true),
    new SideLink("2.4", "#2.4", true),
    new SideLink("2.3", "#2.3", true),
    new SideLink("2.2", "#2.2", true),
];

export default function Contact() {
  return (
      <>
      <Layout sideBarLinks={links} >
      <div className="grid">
          <Banner title={"Patch Notes"} img={patchNotes1}></Banner>

          <div className="flex gridi-center center">
              <div className="center flex-ignore"></div>

                <br id="3.0"></br>
                <Card
                    title={"Version 3.0"}
                    text={<List
                    data={[
                        "Animationen hinzugefüght",
                        "Sidebar ist nun Ein- und Ausklappbar",
                       " 125er bei Motorrädern hinzugefügt",
                      "  Landing Page überarbeitet",
                     "   Sämtliche Texte angepasst",
                       " Dokumente entfernt"
                    ]}
                        />}
                    img={null}
                    date={"4.2.2024"}/>

              <br id="2.5"></br>
              <Card
                  title={"Version 2.5"}
                  text={<List data={["Bücher zu Medien hinzugefügt"]}></List>}
                  img={null}
                  date={"4.2.2024"}
              ></Card>

              <br id="2.4"></br>
              <Card
                  title={"Version 2.4"}
                  text={<List data={["American Football Text aktualisiert"]}></List>}
                  img={null}
                  date={"9.12.2023"}
              ></Card>


              <br id="2.3"></br>
              <Card
                  title={"Version 2.3"}
                  text={
                      <List
                          data={["Musik Text überarbeitet", "Neues Sport Banner"]}
                      ></List>
                  }
                  img={null}
                  date={"20.10.2023"}
              ></Card>


              <br id="2.2"></br>
              <Card
                  title={"Version 2.2"}
                  text={
                      <List
                          data={[
                              "Erstellung der Patch Notes Seite",
                              "Text Update Arland",
                          ]}
                      ></List>
                  }
                  img={null}
                  date={"20.10.2023"}
              ></Card>


          </div>
      </div>

      </Layout>
      </>
  )
      ;
}
