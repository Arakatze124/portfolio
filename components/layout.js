import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Sidebar from "./SideBar";
import Footer from "./footer";
import { useState, useEffect, useRef } from "react";

export default function Layout({ children, active, sideBarLinks, withFooter }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent");
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if(currentScrollY > 100){
        //set background to black
        setNavBackgroundColor("black");
      }
      else{
        setNavBackgroundColor("transparent");
      }
      setLastScrollY(currentScrollY);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Head>
        <title>Dean Opara - Athlet und Software-Developer</title>
        <meta name="description" content="Diese Website ist über Dean Opara, ein junger österreichischer Software Entwickler und Athlet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar bgColor={navBackgroundColor} />
      <main>{children}</main>
      {withFooter ? (
      <Footer />
      ) : null}
    </>
  );
}