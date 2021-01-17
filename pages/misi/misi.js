import React, { useState } from "react";
import { fetchAPI } from "../../lib/api";
import CardMisi from "../../components/cardMisi";
import CardMisiEn from "../../components/cardMisiEn";
import { NextSeo } from "next-seo";

function Misi({ data, dataEng }) {
  const [search, setSearch] = useState("all");
  const [leng, setLeng] = useState(true);

  const SEO = {
    title: "rise of kingdom indonesia | quest Page",
    description: "Kumpulan quest rise of kingdom indonesia ",
    openGraph: {
      title: "rise of kingdom indonesia | quest Page",
      description: "Kumpulan quest rise of kingdom indonesia ",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-24 px-2 md:px-16 pb-10 bg-gray-100">
        <p className="uppercase font-bold text-3xl text-black text-center">
          Cari jawaban dari quest rise of kingdom{" "}
        </p>
        <div className="w-full flex mt-8">
          <div className="w-full md:w-3/4 block">
            <div className=" w-full justify-between block md:flex">
              <input
                className="w-full md:w-3/4 h-12 my-4 px-4 border border-transparent border-light-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                type="text"
                placeholder="Search...."
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <div className=" w-auto justify-center mr-6 bg-dark rounded-md px-2 my-4 items-center flex">
                <p
                  className={
                    leng
                      ? "text-gold font-semibold w-full text-center cursor-pointer  text-3xl"
                      : "font-semibold cursor-pointer text-center w-full text-white text-3xl"
                  }
                  onClick={() => setLeng(true)}
                >
                  ID
                </p>
                <p className="font-semibold text-white mx-2 text-3xl"> |</p>

                <p
                  className={
                    leng
                      ? "font-semibold w-full  cursor-pointer text-center text-white text-3xl"
                      : "text-gold w-full font-semibold text-center cursor-pointer  text-3xl"
                  }
                  onClick={() => setLeng(false)}
                >
                  EN
                </p>
              </div>
            </div>
            <div className="overflow-auto rounded-lg bg-white h-70">
              {leng ? (
                <div>
                  {" "}
                  {data
                    .filter(
                      (val) =>
                        search === "all" ||
                        val.pertanyaan
                          .toLowerCase()
                          .includes(search.toLowerCase())
                    )
                    .map((misi, y) => {
                      return <CardMisi misi={misi} key={`misi${misi.slug}`} />;
                    })}
                </div>
              ) : (
                <div>
                  {dataEng
                    .filter(
                      (val) =>
                        search === "all" ||
                        val.quest.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((req, y) => {
                      return <CardMisiEn req={req} key={`req${req.slug}`} />;
                    })}
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:block mt-10">
            <img src="/samurai.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [data, dataEng] = await Promise.all([
    fetchAPI("/quests"),
    fetchAPI("/questens"),
  ]);

  return {
    props: { data, dataEng },
    revalidate: 1,
  };
}

export default Misi;
