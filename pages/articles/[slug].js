import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Image from "../../components/image";
const gfm = require("remark-gfm");
import { NextSeo } from "next-seo";

const Article = ({ article }) => {
  const SEO = {
    title: `Rise of kingdom indonesia | ${article.title}`,
    description: `${article.description}`,
    openGraph: {
      title: `Rise of kingdom indonesia | ${article.title}`,
      description: `${article.description}`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="pt-28 px-2 md:px-16 mb-10">
        <h1 className="text-4xl uppercase font-bold ">{article.title}</h1>
        <div className="flex text-gray-400 text-sm">
          <Moment format="MMM DD YYYY">{article.published_at}</Moment>
          <span className="mx-2">by</span>
          <span>{article?.author?.name || "created by admin"}</span>
        </div>

        <div className="mt-10">
          <div className="w-full">
            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
              <ReactMarkdown
                source={article.content}
                plugins={[gfm]}
                escapeHtml={false}
              />
            </article>
            <hr className="mt-6" />
            <div className=" mt-6 flex items-center">
              <div>
                {article.author.picture && (
                  <Image
                    image={article.author.picture}
                    style={{
                      position: "static",
                      borderRadius: "50%",
                      height: "5rem",
                      width: "5rem",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <div className="ml-4">
                <p className="uk-margin-remove-bottom">
                  By {article.author.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MM DD YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );

  return {
    props: { article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
