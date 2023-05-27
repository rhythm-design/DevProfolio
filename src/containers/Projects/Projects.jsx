import React from "react";
import GitRepoCard from "../../components/GitRepoCard/GitRepoCard";
import Button from "../../utils/Button/Button";
import { projectsGithubRepos } from "../../PortfolioData";
import "./Projects.scss";

const Projects = () => {
    return (
        <div id="projects" className="projects-parent-div">
            <h1 className="project-heading">
                {projectsGithubRepos.heading}
            </h1>
            <div className="repo-cards-div">
                {
                    projectsGithubRepos.repoNames.map((repo,index)=>
                        <GitRepoCard key={index} userName={projectsGithubRepos.username} repoName={repo} />
                    )
                }
            </div>
            <div className="button-div">
                <Button text={projectsGithubRepos.projectsButtonText} href={projectsGithubRepos.githubRepositoriesLink} newTab={true} />
            </div>
        </div>
    );
}

export default Projects;