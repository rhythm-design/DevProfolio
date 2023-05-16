import React from "react";
import GitRepoCard from "../../components/GitRepoCard/GitRepoCard";
import "./Projects.scss";

const Projects = () => {
    return (
        <div className="projects-parent-div">
            <h1 className="project-heading">
                What I have made
            </h1>
            <div className="repo-cards-div">
                <GitRepoCard userName="rhythm-design" repoName="navigatethebot" />
                <GitRepoCard userName="rhythm-design" repoName="keepnotes" />
                <GitRepoCard userName="rhythm-design" repoName="rhythm-portfolio" />
                <GitRepoCard userName="rhythm-design" repoName="Bucket-List" />
                <GitRepoCard userName="rhythm-design" repoName="SecretKeeper" />
                <GitRepoCard userName="rhythm-design" repoName="Leetcode-Solutions-with-Explanation" />
            </div>
        </div>
    );
}

export default Projects;