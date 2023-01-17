import React from "react";
import { MiniLayout as DefaultLayout } from "../components/mini-layout";
import "../styles/globals.css";
import Head from "next/head";

const head = {
  title: "Tobi Oyeleye • Software engineer",
  description: "I build performant, modern and delightful web experiences.",
  url: "https://oluwatobi.vercel.app",
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <Layout>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
        <meta property="og:title" content={head.title} />
        <meta property="og:description" content={head.description} />
        <meta property="og:url" content={head.url} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
