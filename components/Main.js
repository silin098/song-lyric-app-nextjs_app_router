import Link from "next/link";
export default function Main({ title, artist, slug }) {
  return (
    <div className="w-full max-w-72	  bg-white rounded-lg overflow-hidden border">
      <div className="p-4">
        <h2 className="text-xl">{title}</h2>
        <p className="text-gray-600 my-2 text-sm">{artist}</p>
        <div className="flex items-center">
          <Link
            href={`/song/${slug}`}
            className="bg-gray-200 hover:bg-gray-300  py-2 px-4 rounded text-sm"
          >
            View Lyric
          </Link>
        </div>
      </div>
    </div>
  );
}
