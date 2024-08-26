"use client";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const { songs } = props;

  useEffect(() => {
    if (searchTerm) {
      const results = songs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );

      setSearchResults(results);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, songs]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === "") {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  }

  function handleOnClick(result) {
    setSearchTerm(result.title);

    setShowSuggestions(false);
  }

  const handleClickOutside = (event) => {
    const clickedInside = searchRef.current?.contains(event.target);
    if (!clickedInside) {
      setShowSuggestions(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("mousedown", handleClickOutside);
  }

  return (
    <>
      <div className="w-5/6">
        <div
          className="flex items-center  px-2 py-1 border rounded-md shadow relative focus-within:outline outline-gray-500 outline-2"
          ref={searchRef}
        >
          <CiSearch size="1.3rem" />

          <input
            type="text"
            id="searchInput"
            placeholder="Search song here..."
            className="p-1 m-0 border-0 outline-0 w-full  focus:outline-none text-base relative"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
          />

          {showSuggestions && (
            <div
              className={`absolute top-12 left-0 w-full border border-gray-400 p-2 rounded-sm overflow-y-auto bg-white shadow  `}
            >
              {searchResults.length > 0 ? (
                searchResults.map((result) => {
                  return (
                    <Link
                      href={`/song/${result.slug}`}
                      key={result.slug}
                      className="flex justify-between text-sm mb-2 p-2 cursor-pointer  rounded-sm hover:bg-gray-200"
                      onClick={() => handleOnClick(result)}
                    >
                      <p>{result.title}</p>
                      <p className="text-gray-400">{result.artist}</p>
                    </Link>
                  );
                })
              ) : (
                <div className="flex justify-between text-sm mb-2 p-2  bg-gray-300 rounded-sm">
                  <p>No Search Found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
