
  //Components
  import React from 'react'
  import NavigationBar from '../components/NavigationBar'
  import SideBar from "../components/SideBar";
  import SideLink from "../components/SideLink";
  import Card from "../components/card"
  import Banner from "../components/banner"
  import Link from 'next/link';
  //CSS
  import '../styles/default.css'
  import '../styles/sideBar.css'
  //Media
  import sports1 from "../media/sports1.jpg"
  import Table from '../components/Table';
  import football1 from "../media/football1.jpg"
 
  
  const links =[
    new SideLink("Sportarten", "#sports", false),
    new SideLink("American Football", "#football", true),
    new SideLink("Krafttraining", "#strength", false),
    new SideLink("Workouts", "#workouts", true),
    new SideLink("Trainingsplan", "#plan", true),
  ]
  
  export default function Sports() {
    return (
      <>
        <NavigationBar active={"sports"}></NavigationBar>
        <div className="grid">
          <Banner
             title={"Sport"}
             img={sports1}>
          </Banner>
          <div>
             <SideBar links={links} />
          </div>

          <br id='sports'></br>
          <div className='title2 center gridi-center'>Sportarten</div>
            <br id='football'></br>
            <Card
              title={"American Football"}
              text={<p>Seit Juli, 2023 bin ich stolzes Mitglied der <Link href={"https://www.grazgiants.at"}>Grazer Giants</Link>, einem österreichischen Football Team in Graz. Dort fungiere ich als Running Back in der U16.<br></br><br></br>Ich habe schon viele verschiedene Sportarten in meinem Leben ausprobiert, aber nichts konnte mich bisher so begeistern wie Football. Von den athletischen Ansprüchen her perfekt auf meine Stärken angepasst und nirgendwo sonst ein stärkerer Teamgeist.</p>}
              img={football1}
              position={"right"}
            ></Card>

          <br id='strength'></br><br></br><br></br>
          <div className='title2 center gridi-center'>Krafttraining</div>
         
            <br id='workouts'></br><br></br><br></br>
            <div className='title3 center gridi-center'>Workouts</div>
            <Table
              url={"https://onedrive.live.com/embed?resid=999107596EE3D11B%21112950&authkey=!ABECRSUBJZSHP48&em=2"}
            ></Table>

            <br id='plan'></br>
            <div className='title3 center gridi-center'>Trainingsplan</div>
            <Table
              url={"https://onedrive.live.com/embed?resid=999107596EE3D11B%21156160&authkey=!ACywZ-H57i6egwE&em=2"}
            ></Table>

          

        </div>
      </>
    )
  }
  