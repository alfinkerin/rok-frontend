import React from "react";
import Discord from "../public/discord.svg";
import Facebook from "../public/facebook.svg";
import Link from "next/link";

function Side() {
  return (
    <div className="w-10 rounded-md mt-48 md:mt-0 z-30 md:mb-0 xl:mb-24 fixed mr-2 md:mr-6 py-2 px-2 bg-gray-700 top-1/4 md:top-1/2  right-0 self-center">
      <Link href="https://discord.gg/psrkEqjc">
        <Discord className="cursor-pointer" />
      </Link>

      <div className="border-t-2 my-2 border-white"></div>
      <Link href="https://www.facebook.com/groups/rokindonesia">
        <Facebook className="cursor-pointer" />
      </Link>
    </div>
  );
}

export default Side;
