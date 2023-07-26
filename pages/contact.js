
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
  //Media
  import contact1 from "../media/contact1.jpg"
  import Reference from '../components/reference';
  import iconMail from "../media/iconMail.png";
  import iconPhone from "../media/iconPhone.png";
  import iconPaypal from "../media/iconPaypal.png"
  import iconInstagram from "../media/iconInstagram.png"
  import iconGithub from "../media/iconGithub.png"
  import iconDiscord from "../media/iconDiscord.png"

  const links =[
    new SideLink("E-Mail", "#mail", false),
    new SideLink("Telefon", "#number", false),
    new SideLink("Github", "#github", false),
    new SideLink("Instagran", "#instagram", false),
    new SideLink("Paypal", "#paypal", false),
    new SideLink("Discord", "#discord", false),

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
          
             <SideBar links={links} />
          
        <div className='flex gridi-center center'>
          <div className='center flex-ignore'>
          </div>

          <br id='mail'></br>
          <Reference
            link={"mailto:dean@opara.at"}
            text={"dean@opara.at"}
            icon={iconMail}
            title={"E-Mail"}
          ></Reference>

          <br id='number'></br>
          <Reference
            link={"tel:+43 660 8663522"}
            text={"+43 660 8663522"}
            icon={iconPhone}
            title={"Telefon"}
          ></Reference>

          <br id='github'></br>
          <Reference
            title={"Github"}
            text={"Arakatze124"}
            link={"https://github.com/Arakatze124"}
            icon={iconGithub}
          ></Reference>

          <br id='instagram'></br>
          <Reference
            title={"Instagram"}
            text={"deanus_124_"}
            link={"https://www.instagram.com/deanus_124_/"}
            icon={iconInstagram}
          ></Reference>

          <br id='paypal'></br>
          <Reference
            title={"Paypal"}
            text={"deanopara"}
            link={""}
            icon={iconPaypal}
          ></Reference>

          <br id='discord'></br>
          <Reference
            title={"Discord"}
            text={"Arakatze124"}
            link={""}
            icon={iconDiscord}
          ></Reference>

        </div>
        </div>
      </>
    )
  }
  