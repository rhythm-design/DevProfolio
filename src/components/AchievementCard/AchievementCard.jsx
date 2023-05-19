import React from "react";
import "./AchievementCard.scss";

const AchievementCard = ({title,description,imageSrc,imageAlt,hasAchievementLink,linkToCertificateOrAchievement,achievementTitle}) => {
    const handleClick = () => {
        window.open(linkToCertificateOrAchievement, '_blank');
    };
    return(
        <div className="certificate-card">
            <div className="certificate-image-div">
                <img
                src={imageSrc}
                alt={imageAlt}
                className="card-image"
                ></img>
            </div>
            <div className="certificate-detail-div">
                <h5 className="card-title">
                {title}
                </h5>
                <p className="card-subtitle">
                {description}
                </p>
            </div>
            {
                hasAchievementLink?
                    <div className="certificate-card-footer">
                        <span className="certificate-tag" onClick={handleClick}> {achievementTitle}</span>
                    </div>
                :null
            }
    </div>
    );
}

export default AchievementCard;