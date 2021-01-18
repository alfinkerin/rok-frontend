import React from "react";
import { fetchAPI } from "../../lib/api";
import { NextSeo } from "next-seo";

function Quest({ misi }) {
  console.log(misi);
  const SEO = {
    title: `Rise of kingdom indonesia | ${misi.pertanyaan}`,
    description: `${misi.deskripsi}`,
    openGraph: {
      title: `Rise of kingdom indonesia | ${misi.pertanyaan}`,
      description: `${misi.deskripsi}`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2  md:px-16 mb-10">
        <div className="bg-gray-100 rounded-md p-4">
          <p className="font-bold uppercase text-3xl">pertanyaan : </p>
          <p className="font-semibold text-gray-700 text-3xl">
            {misi.pertanyaan}
          </p>
        </div>
        <div className="mt-8 p-4 rounded-md shadow-xl">
          <p className="font-bold uppercase text-3xl">jawaban :</p>
          <p className="font-semibold text-gray-700 text-3xl">{misi.jawaban}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI("/quests");

  return {
    paths: data.map((misi) => ({
      params: {
        slug: misi.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const datas = await fetchAPI(`/quests?slug=${params.slug}`);

  return {
    props: { misi: datas[0] },
    revalidate: 1,
  };
}

export default Quest;
