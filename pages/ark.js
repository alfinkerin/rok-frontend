import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";

function Ark({ data }) {
  const SEO = {
    title: `rise of kingdom indonesia | ${data.judul}`,
    description: `${data.deskripsi}`,
    openGraph: {
      title: `rise of kingdom indonesia | ${data.judul}`,
      description: `${data.deskripsi}`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2 md:px-16 mb-10">
        <h1 className="font-bold text-5xl uppercase text-center mb-6">
          {data.judul}
        </h1>
        <ReactMarkdown
          source={data.content}
          plugins={[gfm]}
          escapeHtml={false}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/arks");

  return {
    props: { data: data[0] },
  };
}

export default Ark;
