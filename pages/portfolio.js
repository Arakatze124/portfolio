import React from "react";
import Head from "next/head";
import Link from "next/link";
import Banner from "../components/banner";
import Card from "../components/card";
import Layout from "../components/layout";
import "../styles/default.css";
import Career1 from "../media/career1.jpg";
import career7 from "../media/career7.png";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Portfolio() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <Head>
        <title>{t.meta.portfolio.title}</title>
        <meta name="description" content={t.meta.portfolio.description} />
      </Head>
      <Layout active={"portfolio"}>
        <div className="grid">
          <Banner title={t.portfolio.heroTitle} img={Career1}></Banner>

          <Card
            title={t.portfolio.title1}
            text={<p>{t.portfolio.text1}</p>}
            img={career7}
            date={"09.09.2026"}
          ></Card>

          <Card
            title={t.portfolio.title2}
            position={"left"}
            text={
              <p>
                {t.portfolio.text2}
                <br></br>
                <br></br>
                <Link target="_blank" href="https://zukunftsmusik.at">
                  {t.portfolio.linkLabel}
                </Link>
              </p>
            }
            img={null}
            date={"09.09.2026"}
          ></Card>

          <Card
            title={t.portfolio.title3}
            text={<p>{t.portfolio.text3}</p>}
            img={null}
            date={"09.09.2026"}
          ></Card>
        </div>
      </Layout>
    </>
  );
}
