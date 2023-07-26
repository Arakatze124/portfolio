
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
  //Images
  import aviation1 from "../media/aviation1.jpg"
  import aviation2 from "../media/aviation2.jpg"
  import aviation3 from "../media/aviation3.jpg"
  import aviation4 from "../media/aviation4.jpg"

  const links =[
    new SideLink("Segelflug", "#glider", true),
    new SideLink("Raumfahrt", "#space", true),
    new SideLink("Luftstreitkämpfe", "#military", true)
  ]
  
  export default function Aviation() {
    return (
      <>
        <NavigationBar active={"aviation"}></NavigationBar>
        <div className="grid">
          <Banner
             title={"Luft- und Raumfahrt"}
             img={aviation1}>
          </Banner>
          <div className='gridi-sidebar'>
             <SideBar links={links} />
          </div>

            <br id='glider'></br>
            <Card 
              title={"Segelflug"}
              text={<p>Meine erste richtige Flugerfahrung habe ich bei der <Link href={"https://www.flugsportunion.at"} target="_blank">steirischen Flugsportunion</Link> gesammelt</p>}
              img={aviation4}
              position={"left"}>
            </Card>

            <br id='space'></br>
            <Card 
              title={"Raumfahrt"}
              text={<p></p>}
              img={aviation3}
              position={"right"}>
            </Card>

            <br id='military'></br>
            <Card 
              title={"Luftstreitkräfte"}
              text={<p></p>}
              img={aviation2}
              position={"left"}>
            </Card>
          
          
        </div>
      </>
    )
  }
  