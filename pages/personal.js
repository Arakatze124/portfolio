import React from "react";
import Head from "next/head";
import Banner from "../components/banner";
import Card from "../components/card";
import Layout from "../components/layout";
import "../styles/default.css";
import Home4 from "../media/home4.jpg";
import media1 from "../media/media1.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Personal() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Head>
        <title>{t.meta.personal.title}</title>
        <meta name="description" content={t.meta.personal.description} />
      </Head>
      <Layout active={"personal"}>
        <div className="grid">
          <Banner title={t.personal.heroTitle} img={Home4}></Banner>

          <Card
            title={t.personal.title1}
            text={<p>{t.personal.text1}</p>}
            img={Home4}
            date={"09.09.2026"}
          ></Card>

          <Card
            title={t.personal.title2}
            position={"left"}
            text={<p>{t.personal.text2}</p>}
            img={media1}
            date={"09.09.2026"}
          ></Card>
        </div>
      </Layout>
    </>
  );
}
