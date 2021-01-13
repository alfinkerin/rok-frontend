import React from "react";
import Card from "../../components/card";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

const Artikel = ({ data, page, numberArticle }) => {
  const router = useRouter();

  const lastPage = Math.ceil(numberArticle / 3);
  return (
    <div className="w-full px-4 md:px-16 pt-28 mb-10">
      <div className="">
        <div>
          {data.map((article, i) => {
            return <Card article={article} key={`article${article.slug}`} />;
          })}
        </div>
        <div className="mt-4 text-center">
          <button
            className="w-24 h-auto py-2 px-2 bg-dark rounded-md mx-2 text-white hover:text-gold disabled:opacity-50 "
            onClick={() => router.push(`/articles/artikel?page=${page - 1}`)}
            disabled={page <= 1}
          >
            Previous
          </button>
          <button
            className="w-24 h-auto py-2 px-2 bg-dark rounded-md mx-2 text-white hover:text-gold"
            onClick={() => router.push(`/articles/artikel?page=${page + 1}`)}
            disabled={page >= lastPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 3;
  const data = await fetchAPI(
    `/articles?_sort=publishedAt:desc&status=published&_limit=3&_start=${start}`
  );

  const numberArticle = await fetchAPI("/articles/count");

  return {
    props: {
      data: data,
      page: +page,
      numberArticle,
    },
  };
}

export default Artikel;
