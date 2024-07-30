"use client";

import SearchBar from "./SearchBar";
import Logo from "../public/logo.svg";
import Image from "next/image";
export default function Navigation({ songs }) {
  return (
    <nav className="flex  md:mb-3   items-center justify-between sticky top-0 z-10 bg-white">
      <div className="items-center hidden sm:block ">
        <a href="/" className="mx-10">
          <Image src={Logo} alt="guitarist-logo" height={40} />
        </a>
      </div>
      <div className="flex flex-1 items-center">
        <div className="sm:block p-3">
          <a href="/" className="font-semibold sm:hidden">
            <Image src={Logo} alt="guitarist-logo" height={40} />
          </a>
        </div>
        <SearchBar songs={songs} />
        {/* <IoMdMenu className="sm:hidden block text-3xl ml-3  cursor-pointer" /> */}

        {/* <div className="hidden sm:block">
          <ul className="flex ml-10">
            <li className="mr-5 hover:bg-gray-200 py-1 px-2 rounded">
              <a href="#">Tuner</a>
            </li>
            <li className=" hover:bg-gray-200 py-1 px-2 rounded">
              <a href="#">Chords</a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}
