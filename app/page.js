import getSongMetadata from "@/utils/getSongData";
import Main from "@/components/Main";

export default function Home() {
  const songMetadata = getSongMetadata("content");
  return (
    <>
      <h1 className="text-2xl ml-3 sm:text-left">Song Lists</h1>
      <div className="flex mt-5 gap-4 flex-wrap md:justify-start justify-center py-3">
        {songMetadata.map((song) => {
          return (
            <Main
              key={song.slug}
              title={song.title}
              artist={song.artist}
              slug={song.slug}
            />
          );
        })}
      </div>
    </>
  );
}
