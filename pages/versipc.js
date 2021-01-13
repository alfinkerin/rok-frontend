import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

function Versipc({ content }) {
  console.log(content);
  return (
    <div className="pt-28 px-2 md:px-16 mb-10">
      <h1 className="font-bold text-5xl uppercase text-center mb-6">
        {content.judul}
      </h1>
      <ReactMarkdown
        source={content.content}
        plugins={[gfm]}
        escapeHtml={false}
      />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchAPI("/pc-versions");

  return {
    props: { content: data[0] },
  };
}

export default Versipc;
