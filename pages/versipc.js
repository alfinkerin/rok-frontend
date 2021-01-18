import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";

function Versipc({ content }) {
  const SEO = {
    title: `rise of kingdom indonesia | ${content.judul}`,
    description: `${content.description}`,
    openGraph: {
      title: `rise of kingdom indonesia | ${content.judul}`,
      description: `${content.description}`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2 md:px-16 mb-10">
        <h1 className="font-bold text-4xl uppercase text-center mb-6">
          {content.judul}
        </h1>
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <ReactMarkdown
            source={content.content}
            plugins={[gfm]}
            escapeHtml={false}
          />
        </article>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/pc-versions");

  return {
    props: { content: data[0] },
  };
}

export default Versipc;
