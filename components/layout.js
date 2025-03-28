import NavigationBar from "./NavigationBar";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Layout({ children, active, sideBarLinks }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBackgroundColor, setNavBackgroundColor] = useState("transparent");
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        gsap.to(navbarRef.current, { y: currentScrollY, duration: 0.1, ease: "power1.out" });
      } 
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
      <div ref={navbarRef}>
        <NavigationBar bgColor={navBackgroundColor} />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}