import React, { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import Layout from "../components/layout";
import "../styles/default.css";
import sports1 from "../media/sports1.jpg";
import football1 from "../media/football1.jpg";
import home3 from "../media/home3.jpg";
import contact1 from "../media/contact1.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const photoOptions = [
  { id: "motif-1", img: sports1 },
  { id: "motif-2", img: football1 },
  { id: "motif-3", img: home3 },
  { id: "motif-4", img: contact1 },
];

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [selectedPhoto, setSelectedPhoto] = useState(photoOptions[0].id);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  const mailtoLink = useMemo(() => {
    const subject = lang === "de" ? "Autogrammkarte Bestellung" : "Autograph card order";
    const body = [
      `${lang === "de" ? "Motiv" : "Photo"}: ${selectedPhoto}`,
      `${t.services.quantity}: ${quantity}`,
      `${t.services.address}: ${address || "-"}`,
    ].join("\n");

    return `mailto:dean@opara.at?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [address, lang, quantity, selectedPhoto, t.services.address, t.services.quantity]);

  return (
    <>
      <Head>
        <title>{t.meta.services.title}</title>
        <meta name="description" content={t.meta.services.description} />
      </Head>
      <Layout active={"services"}>
        <div className="grid">
          <Banner title={t.services.heroTitle} img={contact1}></Banner>

          <Card
            title={t.services.title1}
            text={
              <div>
                <p>{t.services.intro}</p>
                <div className="services-grid">
                  {photoOptions.map((photo) => (
                    <button
                      type="button"
                      key={photo.id}
                      className={selectedPhoto === photo.id ? "services-photo active-photo" : "services-photo"}
                      onClick={() => setSelectedPhoto(photo.id)}
                    >
                      <Image src={photo.img} alt={photo.id} width={240} />
                    </button>
                  ))}
                </div>

                <div className="service-form">
                  <label>{t.services.choosePhoto}: {selectedPhoto}</label>
                  <label>
                    {t.services.quantity}
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                    />
                  </label>
                  <label>
                    {t.services.address}
                    <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3}></textarea>
                  </label>
                </div>

                <a className="service-cta" href={mailtoLink}>
                  {t.services.emailCta}
                </a>
              </div>
            }
            img={null}
            date={"09.09.2026"}
          ></Card>

          <Card
            title={t.services.paypalTitle}
            position={"left"}
            text={
              <p>
                {t.services.paypalText}
                <br></br>
                <br></br>
                <a href="https://www.paypal.com/paypalme/deanopara" target="_blank">
                  {t.services.paypalCta}
                </a>
                <br></br>
                <br></br>
                {t.services.note}
              </p>
            }
            img={null}
            date={"09.09.2026"}
          ></Card>
        </div>
      </Layout>
    </>
  );
}
