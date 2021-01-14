import React, { useState } from "react";
import Logo from "../public/logooo.svg";
import Menu from "../public/menu.svg";
import Link from "next/link";
import { menus } from "../lib/menu";
import { submenus } from "../lib/menu";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const [navbar, isNavbar] = useState(false);
  const [monavbar, setMonavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed z-30 px-6 md:px-16 py-2 item-center  justify-between shadow rounded bg-dark flex">
        <div className="flex">
          <Logo className="w-16" />
          <span className=" uppercase text-xs lg:text-sm text-white font-semibold self-center">
            Rise of kingdom indonesia
          </span>
        </div>

        <div className="hidden md:flex items-center">
          {menus.map((i, y) => (
            <li
              key={y}
              className="block mx-4 text-xs lg:text-sm font-bold cursor-pointer text-white hover:text-gold uppercase"
            >
              {i.nama === "guides" ? (
                <div
                  onMouseOver={() => isNavbar(true)}
                  onMouseLeave={() => isNavbar(false)}
                  className="relative "
                >
                  {i.nama}
                  <div
                    className={
                      navbar
                        ? "bg-gray-100 w-52 p-4 text-black top-4 absolute"
                        : "hidden"
                    }
                  >
                    <ul>
                      {submenus.map((i, y) => (
                        <Link href={i.url}>
                          <li key={y} className="my-2 hover:underline ">
                            {i.nama}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link href={i.url}>
                  <a className={router.pathname === i.url ? "active" : ""}>
                    {i.nama}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </div>
        <div className="w-10 self-center block md:hidden">
          <Menu onClick={() => setIsOpen(true)} />
        </div>
      </div>
      <div
        className={
          isOpen ? "w-screen block z-40 pt-64 fixed h-screen bg-dark" : "hidden"
        }
      >
        <p
          onClick={() => setIsOpen(false)}
          className="text-4xl text-white absolute top-0 right-0 mx-6 mt-6"
        >
          X
        </p>
        <ul>
          {menus.map((i, y) => (
            <li
              key={y}
              className="text-white text-2xl  my-4 text-center  uppercase"
            >
              <Link href={i.url}>
                <a
                  onClick={() =>
                    i.nama === "guides" ? setIsOpen(true) : setIsOpen(false)
                  }
                >
                  {i.nama === "guides" ? (
                    <div
                      onClick={() =>
                        monavbar ? setMonavbar(false) : setMonavbar(true)
                      }
                      className="relative "
                    >
                      {i.nama}
                      <div
                        className={
                          monavbar
                            ? "text-center text-white relative"
                            : "hidden"
                        }
                      >
                        <ul className="mt-2">
                          {submenus.map((i, y) => (
                            <Link href={i.url}>
                              <li key={y} className="my-2 hover:underline ">
                                <a onClick={() => setIsOpen(false)}>{i.nama}</a>
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link href={i.url}>
                      <a className={router.pathname === i.url ? "active" : ""}>
                        {i.nama}
                      </a>
                    </Link>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
