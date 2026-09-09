import React from "react";
import Link from "next/link";
import "../styles/footer.css";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer>
      <div>Dean Opara</div>
      <div>
        {t.footer.feedback}
        <br></br>
        {t.footer.contactMe} <Link className="white" href="/contact">{lang === "de" ? "hier" : "here"}</Link>
      </div>
      <div>
        <Link className="white" href="/patchNotes">
          {t.footer.version}
        </Link>
      </div>
    </footer>
  );
}
