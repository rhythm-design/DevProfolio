import React from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard";
import { Fade } from "react-reveal";

const Achievements = () => {
    return (
        <div>
            <h1> 
                Achievements and Certifications
            </h1>

            <div className="achievement-cards">
                <AchievementCard
                    title="This is title"
                    description = "This is description"
                    imageAlt = "This is alt"
                />
                
                <AchievementCard
                    title="This is title"
                    description = "This is description"
                    imageAlt = "This is alt"    
                />

                <AchievementCard
                    title="This is title"
                    description = "This is description"
                    imageAlt = "This is alt"    
                />

                <AchievementCard
                    title="This is title"
                    description = "This is description"
                    imageAlt = "This is alt"   
                />
            </div>
        </div>
    );
}

export default Achievements;