import React from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard";
import { Fade } from "react-reveal";
import { achievementsAndCertifications } from "../../PortfolioData";
import "./Achievements.scss";

const Achievements = () => {
    return (
        <Fade bottom duration={1000} distance="20px">
            <div id="achievements" className="achievements-main-container">
                <h1 className="achievement-heading"> 
                    {achievementsAndCertifications.heading}
                </h1>
                <p className="achievement-subtitle">{achievementsAndCertifications.subHeading}</p>

                <div className="achievement-cards">
                    {
                        achievementsAndCertifications.achievementsOrCertificateDetails.map((detail,index)=>
                            <AchievementCard
                                key = {index}
                                title = {detail.title}
                                description = {detail.description}
                                imageAlt = {detail.imageAlt}
                                imageSrc = {detail.imageSrc}
                                linkToCertificateOrAchievement = {detail.linkToCertificateOrAchievement}
                                hasAchievementLink = {detail.hasLink}
                                achievementTitle={detail.achievementButtonText}
                            />
                        )
                    }
                </div>
            </div>
        </Fade>
    );
}

export default Achievements;