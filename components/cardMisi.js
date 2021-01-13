import React from "react";
import Link from "next/link";

export default function cardMisi({ misi }) {
  return (
    <Link as={`/misi/${misi.slug}`} href="/misi/[slug]">
      <p className="my-4 px-4 bg-gray-50 font-semibold text-gray-500 hover:text-gray-600 cursor-pointer">
        {misi.pertanyaan}
      </p>
    </Link>
  );
}
