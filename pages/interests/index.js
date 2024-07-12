import Link from "next/link";
import Banner from "../../components/banner";
import animals1 from "../../media/animals1.jpg";
import sports1 from "../../media/sports1.jpg";
import media1 from "../../media/media1.jpg";
import aviation1 from "../../media/aviation1.jpg";
import bikes1 from "../../media/bikes1.jpeg";
import gaming1 from "../../media/gaming1.jpg";
import cooking1 from "../../media/cooking1.jpg";
import SideLink from "../../components/SideLink";
import Layout from "../../components/layout";

export default function Root() {
    const links = [
        new SideLink("Sport", "/interests/sports"),
        new SideLink("Motorräder", "/interests/bikes"),
        new SideLink("Gaming", "/interests/gaming"),
        new SideLink("Luft-Raumfahrt", "/interests/aviation"),
        new SideLink("Medien", "/interests/media"),
        new SideLink("Kochen", "/interests/cooking"),
        new SideLink("Tiere", "/interests/animals"),
      ];
    return (
        <>
         <Layout active={"interests"} sideBarLinks={links}>

        <div id="sports" />
        <Link href="/interests/sports">
        <Banner title={"Sport"} img={sports1}></Banner>
        </Link>

        <div id="bikes" />
        <Link href="/interests/bikes">
        <Banner title={"Motorräder"} img={bikes1}></Banner>
        </Link>

        <div id="gaming" />
        <Link href="/interests/gaming">
        <Banner title={"Gaming"} img={gaming1}></Banner>
        </Link>

        <div id="aviation" />
        <Link href="/interests/aviation">
        <Banner title={"Luft-Raumfahrt"} img={aviation1}></Banner>
        </Link>

        <div id="media" />
        <Link href="/interests/media">
        <Banner title={"Medien"} img={media1}></Banner>
        </Link>

        <div id="cooking" />
        <Link href="/interests/cooking">
        <Banner title={"Kochen"} img={cooking1}></Banner>
        </Link>

        <div id="animals" />
        <Link href="/interests/animals">
        <Banner title={"Tiere"} img={animals1}></Banner>
        </Link>

        </Layout>
        </>
    );
    }