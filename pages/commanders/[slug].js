import React from "react";
import { fetchAPI } from "../../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

function Commanders({ commander }) {
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
        <p>{commander.nama}</p>

        <ReactMarkdown
          source={commander.content}
          plugins={[gfm]}
          escapeHtml={false}
        />
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
  const commanders = await fetchAPI(`/commanders?slug=${params.slug}`);

  return {
    props: { commander: commanders[0] },
    revalidate: 1,
  };
}

export default Commanders;
