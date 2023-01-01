import React from "react";
import { MiniLayout as DefaultLayout } from "../components/mini-layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
