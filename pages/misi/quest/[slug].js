import React from "react";
import { fetchAPI } from "../../../lib/api";

function QuestEn({ quest }) {
  return (
    <div className="pt-28 px-2  md:px-16 mb-10">
      <div className="bg-gray-100 rounded-md p-4">
        <p className="font-bold uppercase text-3xl">question : </p>
        <p className="font-semibold text-gray-700 text-3xl">{quest.quest}</p>
      </div>
      <div className="mt-8 p-4 rounded-md shadow-xl">
        <p className="font-bold uppercase text-3xl">answer :</p>
        <p className="font-semibold text-gray-700 text-3xl">{quest.answer}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI("/questens");

  return {
    paths: data.map((quest) => ({
      params: {
        slug: quest.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const datas = await fetchAPI(`/questens?slug=${params.slug}`);

  return {
    props: { quest: datas[0] },
    revalidate: 1,
  };
}

export default QuestEn;
