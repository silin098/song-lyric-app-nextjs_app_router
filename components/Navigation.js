"use client";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navigation({ songs }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex my-3 items-center justify-between">
      <div className="items-center hidden sm:block ">
        <a href="/" className="mx-10">
          <h1 className="text-3xl">GuitarBook</h1>
        </a>
      </div>
      <div className="flex flex-1 items-center ml-10">
        <SearchBar songs={songs} />
        <IoMdMenu className="sm:hidden block text-4xl ml-5 cursor-pointer" />

        <div className="hidden sm:block">
          <ul className="flex ml-10">
            <li className="mr-5">
              <a href="">Tuner</a>
            </li>
            <li>
              <a href="">Chords</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
