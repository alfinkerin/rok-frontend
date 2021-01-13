import React from "react";
import { fetchAPI } from "../lib/api";
import ReactMarkdown from "react-markdown";
const gfm = require("remark-gfm");

function Beginer({ data }) {
  return (
    <div className="pt-28 px-2 md:px-16 mb-10">
      <h1 className="font-bold text-5xl uppercase text-center mb-6">
        {data.judul}
      </h1>
      <ReactMarkdown source={data.content} plugins={[gfm]} escapeHtml={false} />
    </div>
  );
}
export async function getStaticProps() {
  const data = await fetchAPI("/beginers");

  return {
    props: { data: data[0] },
  };
}
export default Beginer;
