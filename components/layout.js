import NavigationBar from "./NavigationBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";
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
      <NavigationBar bgColor={navBackgroundColor} />
      <main>{children}</main>
      {withFooter ? (
      <Footer />
      ) : null}
    </>
  );
}