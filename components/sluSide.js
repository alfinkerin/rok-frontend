import React from "react";
import Discord from "../public/discord.svg";
import Facebook from "../public/facebook.svg";
import Link from "next/link";

function SluSide({ articles }) {
  return (
    <div className="fixed ml-4">
      <div className="">
        <span className="font-bold uppercase text-xl">Ikutin kita</span>
        <Link href="https://discord.gg/psrkEqjc">
          <div className="bg-dark my-2 cursor-pointer rounded-md w-auto justify-center h-10 flex items-center">
            <Discord className="w-8 h-8" />{" "}
            <span className="text-white mx-4">|</span>
            <span className="text-white uppercase">Discord</span>
          </div>
        </Link>
        <Link href="https://www.facebook.com/groups/rokindonesia">
          <div className="bg-dark my-2 cursor-pointer rounded-md w-auto justify-center h-10 flex items-center">
            <Facebook className="w-8 h-8" />{" "}
            <span className="text-white mx-4">|</span>
            <span className="text-white uppercase">Facebook</span>
          </div>
        </Link>
      </div>
      <div className="mt-6">
        {articles.map((item, g) => (
          <ul>
            <span className="font-bold uppercase text-xl">Artikel Terkait</span>

            <Link as={`/articles/${item.slug}`} href="/articles/[slug]">
              <li
                key={g}
                className="text-xs my-2 hover:text-gold cursor-pointer"
              >
                {item.title}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default SluSide;
