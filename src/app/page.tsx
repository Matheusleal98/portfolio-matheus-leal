import Image from "next/image";
import "@/app/styles/home.scss";

import { Header } from "./components/header/header";
import { Experience } from "./components/experience/experience";
import { Info } from "./components/infomation/information";
import { SocialBtns } from "./components/social-btns/social-btns";
import { EmailIcon } from "./components/icons/email-icon";

export default function Home() {
  return (
     <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
          <SocialBtns />
          <a className="btn-primary" href="mailto:matheussleal98@gmail.com">
            contact me
            <EmailIcon />
          </a>
        </div>
    </main>
  );
}
