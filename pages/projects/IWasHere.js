//Components
import React from "react";
import Layout from "../../components/layout";
import SideLink from "../../components/SideLink";
import Banner from "../../components/banner";
import PinBoard from "../../components/PinBoard";
import { useState, useEffect } from 'react';
import Card from "../../components/card";
//CSS
import "../../styles/default.css";
//Media 
import projects1 from "../../media/IWasHere.jpg";
const links = [
    new SideLink("I Was Here", "#IWasHere", false), 
];

export default function Projects() {
    const [reload, setReload] = React.useState(false);
    const [entrys, setEntrys] = useState([{name: "Test", text: "Test", date: "Test"}]);

    useEffect(() => {
        fetch("http://localhost:3000/api/IWasHere/getEntrys")
        .then(res => res.json())
        .then(data => {
            setEntrys(data.entrys);
        });
    }
    ), [];

    const onAddEntry = () => {
        fetch("http://localhost:3000/api/IWasHere/postEntry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                text: document.getElementById("text").value
            })
        })
    }
  return (
    <>
      <Layout sideBarLinks={links} active={"interests"}>
      <div className="grid">
        
        <Banner title={"I Was Here"} img={projects1}></Banner>
        <Card text={<>
        <PinBoard entrys={entrys}/>
         <input type="text" placeholder="Name" id="name" />
            <input type="text" placeholder="Text" id="text" />
            <button onClick={onAddEntry} >Submit</button>
            </>}
            />
      </div>
      </Layout>
    </>
  );
}
