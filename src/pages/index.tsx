import Image from "next/image";
import { Inter } from "next/font/google";
import HarryPage from "./harrypotter/page";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HarryPage />
    </>
  );
}
