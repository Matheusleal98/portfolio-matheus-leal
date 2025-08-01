import Image from "next/image"
import "./experience.scss"

import { SectionTitle } from "@/app/components/sectionTitle/section-title";
import { Skill } from "@/app/components/skill/skill";



export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>3 years of experience as a Software Developer, providing services for Luz Tecnologia.</p>
          <div className="experience-time">
            <Skill image="/java.png" measure={3} years="3 year"/>
            <Skill image="/react.png" measure={2} years="2 years"/>
            <Skill image="/ts.png" measure={2} years="2 years"/>
            <Skill image="/js.png" measure={2} years="2 years"/>
          </div>
        </div>
    )
}