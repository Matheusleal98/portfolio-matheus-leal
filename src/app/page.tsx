import Image from "next/image";
import "@/app/styles/home.scss";

import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/infomation/information";

export default function Home() {
  return (
     <main className="container">
      <Header />
      <Experience />
      <Info />
    </main>
  );
}
