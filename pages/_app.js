import App from "next/app";
import "../styles/globals.css";
import "../styles/index.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";

export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalContext.Provider value={global}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  const global = await fetchAPI("/global");

  return { ...appProps, pageProps: { global } };
};

export default MyApp;
