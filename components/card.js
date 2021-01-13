import React from "react";
import Link from "next/link";
import Image from "./image";
import Moment from "react-moment";

const Card = ({ article }) => {
  return (
    <Link as={`/articles/${article.slug}`} href="/articles/[slug]">
      <a className="w-full">
        <div className="w-full block md:flex mt-10 ">
          <div className=" w-full md:w-1/2 mr-10">
            <Image image={article.image} />
          </div>
          <div className="w-full block mt-4">
            <p className="text-2xl font-semibold hover:text-gold ">
              {article.title}
            </p>
            <div className="flex text-gray-400 text-sm">
              <Moment format="MMM DD YYYY">{article.published_at}</Moment>
              <span className="mx-2">by</span>
              <span>{article?.author?.name || "created by admin"}</span>
            </div>
            <p className="text-gray-600 text-sm">{article.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
