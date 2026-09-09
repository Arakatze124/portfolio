import React from "react";
import { LanguageProvider } from "../i18n/LanguageContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
