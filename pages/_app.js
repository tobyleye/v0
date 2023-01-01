import React from "react";
import { PageTransition } from "../components/page-transition";
import { MiniLayout } from "../components/mini-layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MiniLayout>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </MiniLayout>
  );
}

export default MyApp;
