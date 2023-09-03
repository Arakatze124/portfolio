//Components
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";
import Footer from "../components/footer";
import SideLink from "../components/SideLink";
import Card from "../components/card";
import Banner from "../components/banner";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
//CSS
import "../styles/default.css";
import "../styles/sideBar.css";
//Media
import bikes1 from "../media/bikes1.jpeg";
import bikes2 from "../media/bikes2.jpg";
import bikes3 from "../media/bikes3.jpg";
import bikes4 from "../media/bikes4.jpg";

const links = [new SideLink("Moped", "#moped", false)];

export default function Bikes() {
  const [width, setWidth] = useState(1000);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      const newWidth = document.body.clientWidth;
      setWidth(newWidth);
      setMobile(newWidth < 769);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <NavigationBar active={"bikes"}></NavigationBar>
      <div className="grid">
        <Banner title={"Motorräder"} img={bikes1}></Banner>
        <div>
          <SideBar links={links} />
        </div>

        <br id="moped"></br>
        <div className="title2 center gridi-center">Moped</div>
        <Card
          title={"Meine Mopedzeit"}
          text={
            <p>
              Mein Moped ist eine Beta, Modell: RR 50 Track vom Jahr 2017. Ich
              habe es im Juli 2022 erworben. Am 15. August habe ich dann meinen
              Führerschein erhalten und damit hat sich für mich eine ganz neue
              Welt eröffnet. Mit meinem Moped habe ich so einiges erlebt und
              viel dazu gelernt.<br></br>
              <br></br> Immer wenn etwas kaputt war hab ich es selbst repariert
              und so mein technisches Verständnis gestärkt und gelernt mit
              wenigen Mittel zu improvisieren.
            </p>
          }
          img={bikes4}
          position={"right"}
          date={"28.7.2023"}
        ></Card>

        <div className="title2 center gridi-center">Gallerie</div>
        <div className="center gridi-center carousel">
          <Carousel
            infiniteLoop={true}
            width={mobile ? width * 0.95 : width * 0.72}
            autoPlay={true}
            interval={5000}
            showArrows={false}
            showThumbs={false}
          >
            <div>
              <Image src={bikes1} width={width}></Image>
            </div>
            <div>
              <Image src={bikes2} width={width}></Image>
            </div>
            <div>
              <Image src={bikes3} width={width}></Image>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
