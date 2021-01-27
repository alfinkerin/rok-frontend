import React from "react";
import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import SluSide from "../../components/sluSide";

function Commanders({ commander, articles }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const SEO = {
    title: `Rise of kingdom indonesia | ${commander.nama}`,
    description: commander.deskripsi,
    openGraph: {
      title: `Rise of kingdom indonesia | ${commander.nama}`,
      description: commander.deskripsi,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2 md:px-16 mb-10">
        <div className=" md:flex">
          <div className="w-full md:w-3/4">
            <h1 className="font-bold text-4xl uppercase  mb-6">
              {commander.nama}
            </h1>
            <article className="prose text-justify table-auto  prose-sm sm:prose lg:prose-lg xl:prose-xl">
              <ReactMarkdown
                source={commander.content}
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

export async function getStaticPaths() {
  const commander = await fetchAPI("/commanders");

  return {
    paths: commander.map((commander) => ({
      params: {
        slug: commander.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [commanders, articles] = await Promise.all([
    fetchAPI(`/commanders?slug=${params.slug}`),
    fetchAPI("/articles?status=published&_limit=4"),
  ]);

  return {
    props: { commander: commanders[0], articles },
    revalidate: 1,
  };
}

export default Commanders;
