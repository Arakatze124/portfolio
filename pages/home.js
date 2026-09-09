import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Card from "../components/card";
import Banner from "../components/banner";
import Embed from "../components/embed";
import Layout from "../components/layout";
import "../styles/default.css";
import Home1 from "../media/home2.jpg";
import Home3 from "../media/home3.jpg";
import Home4 from "../media/home4.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Head>
        <title>{t.meta.home.title}</title>
        <meta name="description" content={t.meta.home.description} />
      </Head>
      <Analytics />
      <Layout active={"home"}>
        <Banner img={Home1} title={t.home.heroTitle}></Banner>

        <Card
          img={Home3}
          title={t.home.recruitingTitle}
          text={
            <p>
              {t.home.recruitingText1}
              <br></br>
              <br></br>
              {t.home.recruitingText2}
              <br></br>
              <br></br>
              <Link href="/contact">{t.home.ctaContact}</Link> | <Link href="/services">{t.home.ctaServices}</Link>
            </p>
          }
          date={"09.09.2026"}
        ></Card>

        <div className="title3 center gridi-center">{t.home.highlightsTitle}</div>
        <Embed url={"https://www.hudl.com/embed/video/3/20153906/6737285ad51e98451a07fd23"} />

        <Card
          img={null}
          position={"left"}
          title={t.home.statsTitle}
          text={
            <ul className="stats-list">
              {t.home.stats.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          }
          date={"09.09.2026"}
        ></Card>

        <Card
          img={Home4}
          position={"left"}
          title={t.home.personalTitle}
          text={
            <p>
              {t.home.personalText}
              <br></br>
              <br></br>
              <Link href="/personal">{t.home.personalCta}</Link>
            </p>
          }
          date={"09.09.2026"}
        ></Card>
      </Layout>
    </>
  );
}
