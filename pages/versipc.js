import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";
import SluSide from "../components/sluSide";

function Versipc({ articles, content }) {
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
        <div className=" md:flex">
          <div className="w-full md:w-3/4">
            <h1 className="font-bold text-4xl uppercase  mb-6">
              {content.judul}
            </h1>
            <article className="prose prose-sm text-justify table-auto sm:prose lg:prose-lg xl:prose-xl">
              <ReactMarkdown
                source={content.content}
                plugins={[gfm]}
                escapeHtml={false}
              />
            </article>
          </div>
          <div className=" hidden md:block w-1/4">
            <SluSide articles={articles} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [articles, content] = await Promise.all([
    fetchAPI("/articles?status=published&_limit=4"),
    fetchAPI("/pc-versions"),
  ]);

  return {
    props: {
      articles,
      content: content[0],
    },
    revalidate: 1,
  };
}

export default Versipc;
