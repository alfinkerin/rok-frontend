import React from "react";
import Carousel from "react-elastic-carousel";
import Garis from "../public/garis.svg";
import Link from "next/link";

function HomeCarousel({ commanders }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  return (
    <div className="relative mt-10 w-full">
      <Garis className="w-1/3 garis " />
      <p className="uppercase text-gold text-center pt-4 md:pt-10 text-3xl font-semibold">
        commanders
      </p>
      <div className="w-full my-24 ">
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
          pagination={false}
        >
          {commanders.map((item, g) => (
            <Link as={`/commanders/${item.slug}`} href="/commanders/[slug]">
              <img
                className="w-58 h-64 cursor-pointer  "
                key={g}
                alt={item.nama}
                src={"https://adminrokindo.online" + item?.media?.url}
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;
