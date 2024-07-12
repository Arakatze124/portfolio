import NavigationBar from "./NavigationBar";
import Sidebar from "./SideBar";
import Footer from "./footer";

export default function Layout({ children, active, sideBarLinks }) {

    return(
        <>
            <NavigationBar active={active}/>
            {sideBarLinks ? <Sidebar links={sideBarLinks}/> : <></>}
            <main>{children}</main> 
            <Footer/>
        </>
    )
}