import Image from "next/image";
import { Header } from "./components/header/header";

import "@/app/styles/home.scss";

export default function Home() {
  return (
     <main className="container">
      <Header />
    </main>
  );
}
