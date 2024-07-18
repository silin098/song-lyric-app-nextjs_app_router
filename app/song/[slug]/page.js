import fs from "fs";
import matter from "gray-matter";
import getSongMetadata from "@/utils/getSongData";
import ChordProParse from "@/components/ChordProParse";

function getSongContent(slug) {
  const folder = "content/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const songs = getSongMetadata("content");
  return songs.map((song) => ({ slug: song.slug }));
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function SongPage(props) {
  const slug = props.params.slug;
  const rawSongData = getSongContent(slug);
  const { content } = rawSongData;

  return (
    <>
      <ChordProParse songData={content} />
    </>
  );
}
