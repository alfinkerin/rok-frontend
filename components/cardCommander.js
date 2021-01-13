import React from "react";
import Link from "next/link";
import Image from "./image";

function CardCommander({ commander }) {
  return (
    <Link as={`/commanders/${commander.slug}`} href="/commanders/[slug]">
      <div className="text-center text-xs font-semibold text-dark">
        <Image
          image={commander.icon}
          style={{
            marginLeft: "2rem",
            marginRight: "2rem",
            marginTop: "2rem",
            position: "static",
            cursor: "pointer",
            height: "7rem",
            width: "7rem",
          }}
        />
        {commander.nama}
      </div>
    </Link>
  );
}

export default CardCommander;
