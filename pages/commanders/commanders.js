import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../lib/api";
import CardCommander from "../../components/cardCommander";
import { NextSeo } from "next-seo";

function Commanders({ data, category }) {
  const [selected, setSelected] = useState("all");

  const SEO = {
    title: "rise of kingdom indonesia | Commanders Page",
    description: "Kumpulan commanders rise of kingdom indonesia ",
    openGraph: {
      title: "rise of kingdom indonesia | Commanders Page",
      description: "Kumpulan commanders rise of kingdom indonesia ",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className=" w-full px-2 md:px-16  pt-28 mb-10">
        <div className="text-3xl text-center font-semibold">
          Commander Rise of Kingdom
        </div>
        <div className="mt-4 text-lg">
          Di dalam game Rise of Kingdom terdapat berbagai jenis commander, dan
          berbagai jenis tipe seperti legendary, epic, elit, dll. Setiap
          commander memiliki 4 jenis skill , untuk commander tipe epic dan
          legendary mempunyai special skill jadi totalnya ada 5 skill, untuk
          menaikan skill di butuhkan patung, dan untuk membuka skill di butuhkan
          level.
        </div>
        <div className="block md:flex md:flex-wrap mt-10  ">
          <div className=" w-full text-center md:text-left md:w-1/5">
            <span className="uppercase text-2xl font-bold ">Categories</span>
            <ul className="flex flex-wrap md:block">
              {category.map((cate, g) => (
                <li
                  onClick={() => setSelected(cate.type)}
                  className="text-sm mx-2 cursor-pointer bg-dark md:bg-transparent py-2 px-2 md:py-0 md:px-0 rounded-full hover:text-gold my-2 font-semibold text-white md:text-gray-500"
                  key={g}
                >
                  {cate.type}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-4/5 flex flex-wrap ">
            {data
              .filter(
                (x) =>
                  selected === "all" ||
                  x.category_commanders.map((x) => x.type).includes(selected)
              )
              .map((commander, g) => {
                return (
                  <CardCommander
                    commander={commander}
                    key={`commander${commander.slug}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [data, category] = await Promise.all([
    fetchAPI("/commanders"),
    fetchAPI("/category-commanders"),
  ]);

  return {
    props: { data, category },
  };
}
export default Commanders;
