import React from "react";
import Head from "next/head";
import SideLink from "../components/SideLink";
import Banner from "../components/banner";
import Layout from "../components/layout";
import Reference from "../components/reference";
import "../styles/default.css";
import contact1 from "../media/contact1.jpg";
import iconMail from "../media/iconMail.png";
import iconInstagram from "../media/iconInstagram.png";
import iconGithub from "../media/iconGithub.png";
import iconPaypal from "../media/iconPaypal.png";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const links = [
    new SideLink(t.contact.mail, "#mail", false),
    new SideLink(t.contact.github, "#github", false),
    new SideLink(t.contact.instagram, "#instagram", false),
    new SideLink(t.contact.paypal, "#paypal", false),
  ];

  return (
    <>
      <Head>
        <title>{t.meta.contact.title}</title>
        <meta name="description" content={t.meta.contact.description} />
      </Head>
      <Layout sideBarLinks={links} active={"contact"}>
        <div className="grid">
          <Banner title={t.contact.heroTitle} img={contact1}></Banner>

          <div className="title3 center gridi-center">{t.contact.subtitle}</div>
          <div className="flex gridi-center center">
            <div className="center flex-ignore"></div>

            <br id="mail"></br>
            <Reference link={"mailto:dean@opara.at"} text={"dean@opara.at"} icon={iconMail} title={t.contact.mail}></Reference>

            <br id="github"></br>
            <Reference
              title={t.contact.github}
              text={"Arakatze124"}
              link={"https://github.com/Arakatze124"}
              icon={iconGithub}
            ></Reference>

            <br id="instagram"></br>
            <Reference
              title={t.contact.instagram}
              text={"opara_dean"}
              link={"https://www.instagram.com/opara_dean/"}
              icon={iconInstagram}
            ></Reference>

            <br id="paypal"></br>
            <Reference
              title={t.contact.paypal}
              text={"paypal.me/deanopara"}
              link={"https://www.paypal.com/paypalme/deanopara"}
              icon={iconPaypal}
            ></Reference>
          </div>
        </div>
      </Layout>
    </>
  );
}
