//Components
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import SideLink from "../components/SideLink";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
import List from "../components/list";
//Media
import patchNotes1 from "../media/patchNotes1.jpg";
import {Siemreap} from "next/dist/compiled/@next/font/dist/google";

const links = [
    new SideLink("Version: 3", "#3.1", false),
    new SideLink("3.3", "#3.3", true),
    new SideLink("3.2", "#3.2", true),
    new SideLink("3.1", "#3.1", true),
    new SideLink("3.0", "#3.0", true),
    new SideLink("Version: 2", "#2.5", false),
    new SideLink("2.5", "#2.5", true),
    new SideLink("2.4", "#2.4", true),
    new SideLink("2.3", "#2.3", true),
    new SideLink("2.2", "#2.2", true),
];

export default function PatchNotes() {

  return (
      <>
      <Layout sideBarLinks={links} >
      <div className="grid">
          <Banner title={"Patch Notes"} img={patchNotes1}></Banner>
          
          <br id="3.3"></br>
            <Card
                title={"Version 3.3"}
                text={<List
                    data={[
                        "Neue Bilder",
                        "Kein Gaming mehr als Hobby",
                        "PR's hinzugefügt",
                        "Keine Workouts mehr"
                    ]}></List>}
                img={null}
                date={"16.1.2025"}
            ></Card>

                <br id="3.2"></br>
                <Card
                title={"Version 3.2"}
                text={<p><List
                    data={[
                        "Neuer Text Kochen",
                        "Neuer Text Tiere",
                        "Bug Fixing and UX improvements",
                        "Ernährungsplan hinzugefügt",
                    ]}></List></p>}
                
                date={"16.7.2024"}
/>

                <br id="3.1"></br>
                <Card
                title={"Version 3.1"}
                text={<List
                    data={[
                        "Neues Responsive Design",
                        "Interessen Seite überarbeitet",
                        "Kochen und Tiere hinzugefügt",
                    ]}></List>}
                img={null}
                date={"4.2.2024"}
                ></Card>
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
      </Layout>
      </>
  )
      ;
}
