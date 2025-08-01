import Image from "next/image";
import { Header } from "./components/header/header";

import "@/app/styles/home.scss";
import { Experience } from "./components/experience/experience";

export default function Home() {
  return (
     <main className="container">
      <Header />
      <Experience />
    </main>
  );
}
