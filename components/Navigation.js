"use client";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navigation({ songs }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex  md:mb-3 my-3  items-center justify-between sticky top-0 z-10 bg-white">
      <div className="items-center hidden sm:block ">
        <a href="/" className="mx-10">
          <h1 className="text-3xl">GuitarBook</h1>
        </a>
      </div>
      <div className="flex flex-1 items-center px-3">
        <div className="sm:block ">
          <a href="/" className="p-2 font-semibold sm:hidden">
            Guitar
          </a>
        </div>
        <SearchBar songs={songs} />
        <IoMdMenu className="sm:hidden block text-4xl ml-3  cursor-pointer" />

        <div className="hidden sm:block">
          <ul className="flex ml-10">
            <li className="mr-5 hover:bg-gray-200 py-1 px-2 rounded">
              <a href="#">Tuner</a>
            </li>
            <li className=" hover:bg-gray-200 py-1 px-2 rounded">
              <a href="#">Chords</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
