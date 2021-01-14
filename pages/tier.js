import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";

function Tier({ tier }) {
  const SEO = {
    title: `rise of kingdom indonesia | ${tier.judul}`,
    description: `${tier.deskripsi}`,
    openGraph: {
      title: `rise of kingdom indonesia | ${tier.judul}`,
      description: `${tier.deskripsi}`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2 md:px-16 mb-10">
        <h1 className="font-bold text-5xl uppercase text-center mb-6">
          {tier.judul}
        </h1>
        <ReactMarkdown
          source={tier.content}
          plugins={[gfm]}
          escapeHtml={false}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/tiers");

  return {
    props: { tier: data[0] },
  };
}

export default Tier;
