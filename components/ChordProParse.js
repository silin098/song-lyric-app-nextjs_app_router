"use client";
import { useEffect, useState } from "react";
import { ChordProParser, HtmlTableFormatter } from "chordsheetjs";

const parser = new ChordProParser();
const formatter = new HtmlTableFormatter();

export default function ChordProParse({ songData }) {
  const [chordKey, setChordKey] = useState(0);
  const [formattedSong, setFormattedSong] = useState(null);

  const song = parser.parse(songData);

  useEffect(() => {
    const transposeSong = song.transpose(chordKey);
    const formattedLyrics = formatter.format(transposeSong);
    setFormattedSong(formattedLyrics);
  }, [chordKey, song]);

  function transposeUp() {
    setChordKey(chordKey + 1);
  }

  function transposeDown() {
    setChordKey(chordKey - 1);
  }
  return (
    <article>
      <div className="flex gap-2 p-4">
        <button
          onClick={transposeUp}
          className="bg-gray-200 p-2 rounded hover:bg-gray-300"
        >
          Transpose Up
        </button>
        <button
          onClick={transposeDown}
          className="bg-gray-200 p-2 rounded  hover:bg-gray-300"
        >
          Transpose Down
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: formattedSong }} />
    </article>
  );
}
