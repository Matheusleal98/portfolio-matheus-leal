import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://linkedin.com/in/matheusleal98/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Matheusleal98">
                <GitHubIcon/>
            </a>
        </div>
    )
}