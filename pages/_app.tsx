import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import Navigation from "@components/Navigation";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
