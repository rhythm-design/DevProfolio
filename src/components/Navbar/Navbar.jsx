import "./Navbar.scss"

const Navbar = () => {
    return (
        <div id="navbar">
            <ul id="navbar-list">
                <li class="navbar-items"><a href="#">Contact Me</a></li>
                <li class="navbar-items"><a href="#">Achievements</a></li>
                <li class="navbar-items"><a href="#">Proficiency</a></li>
                <li class="navbar-items"><a href="#">Project</a></li>
                <li class="navbar-items"><a href="#">Skills</a></li>
                <li class="navbar-items"><a href="#">Introduction</a></li>   
            </ul>
        </div>
    );
}

export default Navbar;