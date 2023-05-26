import React, {useState, useEffect} from "react";
import SplashScreen from "./SplashScreen/SplashScreen";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Proficiency from "./Proficiency/Proficiency";
import Achievements from "./Achievements/Achievements";
import ContactMe from "./ContactMe/ContactMe";
const Portfolio = () =>{
    const [showSplashScreen, setShowSplashScreen] = useState(true);

    useEffect(() => {
        const splashScreenTimer = setTimeout(
        () => setShowSplashScreen(false),
        3500
        );
        return () => {
            clearTimeout(splashScreenTimer);
        };
    },[]);
    return (
        <div>
            {
                showSplashScreen ?
                    <SplashScreen />
                :null
            }
            <Navbar />
            <Introduction />
            <Skills />
            <Proficiency />
            <Projects />
            <Achievements />
            <ContactMe />
        </div>
    );
}

export default Portfolio;