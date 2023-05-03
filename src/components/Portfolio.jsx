import React from "react";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Proficiency from "./Proficiency/Proficiency";
import Achievements from "./Achievements/Achievements";
import ContactMe from "./ContactMe/ContactMe";
const Portfolio = () =>{
    return (
        <div>
            <Navbar />
            <Introduction />
            <Skills />
            <Projects />
            <Proficiency />
            <Achievements />
            <ContactMe />
        </div>
    );
}

export default Portfolio;