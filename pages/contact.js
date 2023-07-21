
  //Components
  import React from 'react'
  import NavigationBar from '../components/NavigationBar'
  import SideBar from "../components/SideBar";
  import SideLink from "../components/SideLink";
  import Card from "../components/card"
  import Banner from "../components/banner"
  //CSS
  import '../styles/default.css'
  import '../styles/sideBar.css'
  //Images
  import contact1 from "../media/contact1.jpg"
  
  const links =[
    new SideLink("displayName", "#id", "issubpoint")
  ]
  
  export default function Contact() {
    return (
      <>
        <NavigationBar></NavigationBar>
        <div className="grid">
          <Banner
             title={"Kontakt"}
             img={contact1}>
          </Banner>
          <div>
             <SideBar links={links} />
          </div>

          <Card
             title=""
             text={<a href='dean@opara.at'>E-Mail</a>}
          ></Card>
          
        </div>
      </>
    )
  }
  