import "../styles/globals.css";
import "../styles/index.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const MyApp = ({ Component, pageProps }) => {
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
