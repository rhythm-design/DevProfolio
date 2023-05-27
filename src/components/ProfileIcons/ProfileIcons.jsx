import React from "react";
import "./ProfileIcons.scss";
import { profilesToShow } from "../../PortfolioData";

const ProfileIcons = () => {
    return(
        <div className="profile-icons-div">
            {
                profilesToShow.map((profile, index) => 
                    <a
                        key = {index}
                        href={profile.link}
                        className={`icon-button ${profile.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={profile.fontAwesomeIcon}></i>
                    </a>
                )
            }
        </div>
    );
}

export default ProfileIcons;