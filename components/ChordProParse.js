"use client";
import { useEffect, useState } from "react";
import { ChordProParser, HtmlTableFormatter } from "chordsheetjs";

const parser = new ChordProParser();
const formatter = new HtmlTableFormatter();

export default function ChordProParse({ songData, metadata }) {
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
      <div className="flex gap-2 py-2 text-sm">
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
      <div className="mb-5 flex gap-4">
        <div className="font-semibold mb-3">{metadata.title}</div>
        <div className="text-gray-400">- {metadata.artist}</div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: formattedSong }} />
    </article>
  );
}
