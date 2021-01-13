import React from "react";
import Card from "./card";
import Garis from "../public/garis.svg";

const Articles = ({ articles }) => {
  return (
    <div className="relative w-full mt-10   ">
      <Garis className="w-1/3 garis " />
      <p className="uppercase text-gold text-center pt-4 md:pt-10 text-3xl font-semibold">
        artikel
      </p>

      <div className="pt-10">
        {articles.map((article, i) => {
          return <Card article={article} key={`article${article.slug}`} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
