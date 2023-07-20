
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
  import aviation1 from "../media/aviation1.jpg"
  
  const links =[
    new SideLink("displayName", "#id", "issubpoint")
  ]
  
  export default function Aviation() {
    return (
      <>
        <NavigationBar></NavigationBar>
        <div className="grid">
          <Banner
             title={"aviation"}
             img={aviation1}>
          </Banner>
          <div>
             <SideBar links={links} />
          </div>
          
        </div>
      </>
    )
  }
  