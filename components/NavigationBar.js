"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/default.css";
import "../styles/NavigationBar.css";
import logo from "../media/logo.png";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function NavigationBar({ active }) {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <div id="container">
      <nav className="sticky">
        <div id="logo">
          <Link href="/home">
            <Image width={50} src={logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li className={active === "home" ? "active" : ""}>
            <Link className="link" href="/home">
              {t.nav.home}
            </Link>
          </li>
          <li className={active === "portfolio" ? "active" : ""}>
            <Link className="link" href="/portfolio">
              {t.nav.portfolio}
            </Link>
          </li>
          <li className={active === "personal" ? "active" : ""}>
            <Link className="link" href="/personal">
              {t.nav.personal}
            </Link>
          </li>
          <li className={active === "services" ? "active" : ""}>
            <Link className="link" href="/services">
              {t.nav.services}
            </Link>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <Link className="link" href="/contact">
              {t.nav.contact}
            </Link>
          </li>
          <li className="lang-switcher">
            <span>{t.nav.language}:</span>
            <button onClick={() => setLang("de")} className={lang === "de" ? "lang-active" : ""}>
              DE
            </button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "lang-active" : ""}>
              EN
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
