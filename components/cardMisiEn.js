import React from "react";
import Link from "next/link";

function CardMisiEn({ req }) {
  return (
    <Link as={`/misi/quest/${req.slug}`} href="/misi/quest/[slug]">
      <p className="my-4 px-4 bg-gray-50 font-semibold text-gray-500 hover:text-gray-600 cursor-pointer">
        {req.quest}
      </p>
    </Link>
  );
}

export default CardMisiEn;
