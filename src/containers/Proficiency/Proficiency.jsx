import RenderLottie from "../../components/RenderLottie/RenderLottie";
import ProficientLottie from "../../assets/lottie/Proficiency-lottie.json";
const Proficiency = () => {
    return (
        <div>
            <h1>
                Proficiency
            </h1>
            <ul>
                <li>FrontEnd Development</li>
                <li>Backend Development</li>
                <li>Springboot</li>
                <li>Data Structures and Algorithms</li>
            </ul>
            <RenderLottie animationJSON={ProficientLottie} />
        </div>
    );
}

export default Proficiency;