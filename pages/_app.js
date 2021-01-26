import "../styles/globals.css";
import "../styles/index.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
