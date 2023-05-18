import React from "react";

const AchievementCard = ({title,description,imageSrc,imageAlt,link}) => {
    return(
        <div className="dark-mode certificate-card">
            <div className="certificate-image-div">
                <img
                src={imageSrc}
                alt={imageAlt}
                className="card-image"
                ></img>
            </div>
            <div className="certificate-detail-div">
                <h5 className="dark-mode card-title">
                {title}
                </h5>
                <p className="dark-mode card-subtitle">
                {description}
                </p>
            </div>
            <div className="certificate-card-footer">
                <span className="dark-mode certificate-tag"> This would be link to ach</span>
            </div>
    </div>
    );
}

export default AchievementCard;