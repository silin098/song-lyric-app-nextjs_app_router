import { Inter } from "next/font/google";
import "./globals.css";
import getSongMetadata from "@/utils/getSongData";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guitar Book",
  description: "A chord book where you can play song anywhere",
};

export default function RootLayout({ children }) {
  const songMedatda = getSongMetadata("content");

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-xl mx-auto`}>
        <Navigation songs={songMedatda} />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
