"use client";
import { useEffect, useState } from "react";
import { ChordProParser, HtmlTableFormatter } from "chordsheetjs";
import ChordChart from "./ChordChart";
const parser = new ChordProParser();
const formatter = new HtmlTableFormatter();

export default function ChordProParse({ songData, metadata }) {
  const [chordKey, setChordKey] = useState(0);
  const [formattedSong, setFormattedSong] = useState(null);

  const song = parser.parse(songData);
  const chords = song.lines
    .map((line) => line.currentChordLyricsPair.chords)
    .flat() //
    .filter((chord) => chord);

  const filteredChord = chords.filter(
    (item, index) => chords.indexOf(item) === index
  );

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
    <div className="px-4 md:p-0 ">
      <div className="flex gap-2 py-2 text-sm justify-center  sm:justify-start">
        <button
          onClick={transposeUp}
          className="bg-gray-200 p-3 rounded hover:bg-gray-300"
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
      <div className="my-4 flex flex-col">
        <div className="text-lg">{metadata.title.toUpperCase()}</div>
        <div className="text-gray-500 text-sm">{metadata.artist}</div>
      </div>
      <div className="flex flex-row ">
        <div
          className="overflow-hidden min-w-80"
          dangerouslySetInnerHTML={{ __html: formattedSong }}
        />
        <div className="sm:flex sm:max-w-lg sm:flex-wrap hidden ">
          {filteredChord.map((chord, index) => {
            return (
              <div key={index} className="w-40">
                <p className="text-center">{chord}</p>
                <ChordChart chordText={chord} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
