import Head from "next/head";
import Artikel from "../components/articles";
import { fetchAPI } from "../lib/api";
import HomeCarousel from "../components/homeCarousel";
import Side from "../components/side";

export default function Home({ articles, commanders }) {
  return (
    <div className=" mb-10">
      <Side />
      <div className=" relative  h-screen w-full ">
        <video
          className="  object-cover"
          style={{ height: "100vh", width: "100vw" }}
          src="op1.mp4"
          muted
          loop
          autoPlay
        ></video>
        <div className="w-full textbox  ">
          <p className="tracking-wide text-4xl xl:text-5xl text-white uppercase font-semibold">
            Rise of Kingdom
          </p>
          <p className="text-gray-200 text-lg my-2">
            Website ini adalah fansite rise of kingdom Indonesia
          </p>
          <p className="text-gray-200 text-lg my-2">
            Temukan petunjuk bermain, pertanyaan , dan strategi bermain di
            website ini
          </p>
          <div className="flex py-4 px-6 md:py-0 md:px-0 place-content-center">
            <button className=" w-32 mx-6 xl:w-40 bg-gradient-to-r from-anggur  via-pink-500 to-gold border-white uppercase mt-2  text-xs  text-white  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110  font-bold py-2 px-4 rounded-full">
              pc version
            </button>
            <button className=" w-32 mx-6 xl:w-40 bg-dark transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 border border-white uppercase mt-2  text-xs  text-white  mr-2 font-bold py-2 px-4 rounded-full">
              quest
            </button>
          </div>
        </div>
      </div>

      <div className=" px-2  md:px-16">
        <HomeCarousel commanders={commanders} />

        <Artikel articles={articles} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [articles, commanders] = await Promise.all([
    fetchAPI("/articles?status=published&_limit=4"),
    fetchAPI("/commanders"),
  ]);

  return {
    props: { articles, commanders },
    revalidate: 1,
  };
}
