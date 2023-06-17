import PClasses from "../PClasses/PClasses";
import PInstructors from "../PInstructors/PInstructors";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PClasses/>
            <PInstructors/>
        </div>
    );
};

export default Home;