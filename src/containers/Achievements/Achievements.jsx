import React from "react";
import AchievementCard from "../../components/AchievementCard/AchievementCard";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import "./Achievements.scss";

const Achievements = () => {
    return (
        <Fade bottom duration="1000" >
            <div id="achievements" className="achievements-main-container">
                <h1 className="achievement-heading"> 
                    {emoji("Achievements and Certifications🏆")}
                </h1>
                <p className="achievement-subtitle">ACHIEVEMENTS AND CERTIFICATES OF SOME WORK DONE BY ME</p>

                <div className="achievement-cards">
                    <AchievementCard
                        title = "Leetcode Testcases"
                        description = "Added 4 missing test cases to Leetcode"
                        imageAlt = "Leetcode png"
                        imageSrc = "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png"
                        linkToCertificateOrAchievement = "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit"
                        hasAchievementLink = {true}
                        achievementTitle="Leetcode TestCases"
                    />

                    <AchievementCard
                        title = "AWS EC2 SSH key-pair"
                        description = "Corrected AWS command allowing millions users of AWS to seamlessly create key-pairs and SSH into their EC2 instances through CLI."
                        imageAlt = "AWS png"
                        imageSrc = "https://hackfest.ca/images/partenaires/aws.png"
                        linkToCertificateOrAchievement = "https://github.com/awsdocs/amazon-ec2-user-guide/pull/144"
                        hasAchievementLink = {true}
                        achievementTitle="AWS Github Merge"
                    />

                    <AchievementCard
                        title = "LeetCode Solutions"
                        description = "Contributed to Leetcode solutions which helped many users to understand concept and intuition in more accurate way."
                        imageAlt = "Leetcode png"
                        imageSrc = "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png"
                        linkToCertificateOrAchievement = "https://docs.google.com/document/d/10vYuOmOhiQVOh86IE_kXWbeIxw1_4-vEJoV8QcuOzWI/edit"
                        hasAchievementLink = {true}
                        achievementTitle="Leetcode Solutions"
                    />

                    <AchievementCard
                        title = "Global ranking for DSA"
                        description = "282 global rank in July Challenge 2021 and 554 global rank in April challenge 2021 on CodeChef."
                        imageAlt = "Leetcode png"
                        imageSrc = "https://avatars.githubusercontent.com/u/11960354?v=4"
                        linkToCertificateOrAchievement = "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit"
                        hasAchievementLink = {false}
                        achievementTitle="Leetcode Solutions"
                    />
                </div>
            </div>
        </Fade>
    );
}

export default Achievements;