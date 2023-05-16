import React from "react";
import GitRepoCard from "../../components/GitRepoCard/GitRepoCard";

const Projects = () => {
    return (
        <div>
            <h1>
                What I have made
            </h1>
            <GitRepoCard userName="rhythm-design" repoName="navigatethebot" />
            <p>
                <ul>
                    <li>Project 1 details goes here</li>
                    <li>Proejct 2 details goes here</li>
                    <li>Proejct 3 details goes here</li>
                </ul>
            </p>
        </div>
    );
}

export default Projects;