import emoji from "react-easy-emoji";


// Name that will appear on the splash Screen
const splashScreenName = {
    name : "Rhythm"
}

//Logo name in the navigation bar
const navBarIcon = {
    name : "Rhythm"
}

const introduction = {
    firstName : "Rhythm" ,
    
    lastName : "Varshney" ,
    
    introductionText : "A passionate Software Developer. I have built projects that showcase my skills. I have build applications with JavaScript, ReactJS, NodeJS, SpringBoot and some other cool libraries and frameworks. I can design efficient algorithms which can help in improving the performance of the application." ,

    resumeLink : "https://drive.google.com/file/d/163-8rfxj4b4wcB1kLY8wOi2C8oBfVpLl/view?usp=share_link",

    resumeButtonText : "SEE MY RESUME",

    contactButtonText : "CONTACT ME"
}

const profilesToShow = [
    {
        name : "github",
        link : "https://github.com/rhythm-design",
        fontAwesomeIcon : "fa fa-github",
    },

    {
        name : "leetcode",
        link : "https://leetcode.com/rhythm_varshney/",
        fontAwesomeIcon : "fas fa-code",
    },

    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/rhythmvarshney/",
        fontAwesomeIcon : "fab fa-linkedin-in"
    },
    
    {
        name : "mail",
        link : "mailto:rhythmrv3@gmail.com",
        fontAwesomeIcon : "fas fa-envelope"
    }
]

const skillsToShow = {
    
    skillTitle : "What I do",

    skillSubtitle : "FULL STACK DEVELOPER WHO WANT TO EXPLORE AND BECOME BEST IN EVERY TECH STACK",

    skillList : [
        emoji("⚡ Develop highly interactive FrontEnd / User Interface for you web and mobile applications."),
        emoji("⚡ Design time and space efficient algorithms to improve the application performance for best user Experience."),
        emoji("⚡ Integeration of third party services such as Firebase")
    ],

    softwareSkillsIcons : [
        {
            name : "HTML-5",
            fontAwesomeIcon : "fab fa-html5"
        },

        {
            name : "CSS3",
            fontAwesomeIcon : "fab fa-css3-alt"
        },

        {
            name : "sass",
            fontAwesomeIcon : "fab fa-sass"
        },

        {
            name : "Java",
            fontAwesomeIcon : "fab fa-java"
        },

        {
            name : "DSA",
            fontAwesomeIcon : "fas fa-code"
        },

        {
            name : "JavaScript",
            fontAwesomeIcon : "fab fa-js"
        },

        {
            name : "ReactJS",
            fontAwesomeIcon : "fab fa-react"
        },

        {
            name : "NodeJS",
            fontAwesomeIcon : "fab fa-node"
        },

        {
            name : "SpringBoot",
            fontAwesomeIcon : "fab fa-java"
        },

        {
            name : "Database",
            fontAwesomeIcon : "fas fa-database"
        },

        {
            name : "AWS (Basic)",
            fontAwesomeIcon : "fab fa-aws"
        },

        {
            name : "Unit Testing",
            fontAwesomeIcon : "fas fa-bug"
        }
    ]
}


/* 
    Enter the Tech Stack in which you are proficient in 
    and also enter how much percent you're proficient in it
*/
const proficiencyData = {
    heading : "Proficiency" ,
    skillsData : [
        {
            name : "Frontend",
            percent : "80%"
        },

        {
            name : "Backend",
            percent : "70%"
        },

        {
            name : "Java and SpringBoot",
            percent : "80%"
        },

        {
            name : "Programming and DSA",
            percent : "85%"
        }
    ]
}


/*
    Enter your github username. For example if your profile link is 
        • https://github.com/rhythm-design, then enter only "rhythm-design" as username
    
    Enter the repositories you want to show in the portfolio. For example if repo link is 
        • https://github.com/rhythm-design/NavigateTheBot, then enter only "NavigateTheBot" in repoNames array.
    Keep in mind that each repository name should be in `""` inverted commas and need to be seperated by `,`

    Enter github repositories tab link as "githubRepositoriesLink"

    You can also change button text by changing "projectsButtonText" 
*/
const projectsGithubRepos = {
    heading : "What I have made",
    username : "rhythm-design",
    repoNames : [
        "navigatethebot",
        "keepnotes",
        "rhythm-portfolio",
        "Bucket-List",
        "SecretKeeper",
        "Leetcode-Solutions-with-Explanation"
    ],
    githubRepositoriesLink : "https://github.com/rhythm-design?tab=repositories",
    projectsButtonText : "More Projects"
}


/*
    Customize your achievement and certificate area heading through this object.

    You can add your achievement or Certificate details in the "achievementsOrCertificateDetails" array.
    Play with care with variables in this array else things might not look as you want
*/
const achievementsAndCertifications = {
    heading: emoji("Achievements and Certifications🏆"),
    subHeading : "ACHIEVEMENTS AND CERTIFICATES OF SOME WORK DONE BY ME",
    
    achievementsOrCertificateDetails : [
        {
            title: "Leetcode Testcases",
            description: "Added 4 missing test cases to Leetcode",
            imageAlt: "Leetcode png",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: true,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode TestCases"
        },

        {
            title: "AWS EC2 SSH key-pair",
            description: "Corrected AWS command allowing millions users of AWS to seamlessly create key-pairs and SSH into their EC2 instances through CLI.",
            imageAlt: "AWS png",
            imageSrc: "https://hackfest.ca/images/partenaires/aws.png",
            hasLink: true,
            proofLink: "https://github.com/awsdocs/amazon-ec2-user-guide/pull/144",
            achievementButtonText: "AWS Github Merge"
        },

        {
            title: "LeetCode Solutions",
            description: "Contributed to Leetcode solutions which helped many users to understand concept and intuition in more accurate way.",
            imageAlt: "Leetcode png",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: true,
            proofLink: "https://docs.google.com/document/d/10vYuOmOhiQVOh86IE_kXWbeIxw1_4-vEJoV8QcuOzWI/edit",
            achievementButtonText: "Leetcode Solutions"
        },

        {
            title: "Global ranking for DSA",
            description: "282 global rank in July Challenge 2021 and 554 global rank in April challenge 2021 on CodeChef.",
            imageAlt: "Leetcode png",
            imageSrc: "https://avatars.githubusercontent.com/u/11960354?v=4",
            hasLink: false,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode Solutions"
        }
    ]
}

/*
    You can change your contact me area details here.
*/

const contactMe = {
    heading : "Reach Out to me!",
    subHeading : "DISCUSS INNOVATIVE IDEAS TO BUILD OR HIRE ME FOR BUILDING IMPACTFUL TECH SOLUTION",
    bioText : "Searching for SDE jobs | Proactive Software Engineer | Full Stack Developer | Leetcode 450+ | Delivering High-Quality Code",
    location : "India",
    openForOpportunities : "YES",
    profilePicture : require("./assets/images/ProfilePicture.jpg")   //You can change your picture by adding your photo in assets/images folder
}


export {
    splashScreenName,
    navBarIcon,
    introduction,
    profilesToShow,
    skillsToShow,
    proficiencyData,
    projectsGithubRepos,
    achievementsAndCertifications,
    contactMe
}