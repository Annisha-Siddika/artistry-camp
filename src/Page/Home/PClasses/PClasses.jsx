import { Fade } from "react-awesome-reveal";
import Container from "../../../shared/Container";

const PClasses = () => {

    return (
        <Container>
            <div className="flex justify-center items-center border-y-4 py-6 relative bg-fuchsia-200" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 1)' }}>
            <img className="mask mask-star absolute w-40 left-2 lg:left-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg"/>
            <img className="mask mask-star absolute w-40 right-2 lg:right-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg"/>
    <span className="text-orange-600 text-3xl font-bold -rotate-6 px-2 ">Artistry</span> 
    <span className="text-blue-700 text-3xl font-bold rotate-6 px-2">Summer</span>
    <span className="text-yellow-900 text-3xl font-bold -rotate-6 px-2">Camp</span>
    <span className="font-extrabold text-4xl -rotate-6 px-2 text-green-700">
      2
    </span>
    <span className="font-extrabold text-4xl rotate-6 text-red-700">
      0
    </span>
    <span className="font-extrabold text-4xl rotate-6 px-2 text-indigo-800">
      2
    </span>
    <span className="font-extrabold text-4xl -rotate-12 text-yellow-500">
      3
    </span>
</div>
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-fuchsia-950 italic py-4">Our Popular Classes</h2>
            </div>
            <Fade> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="relative overflow-hidden group h-[400px] w-[350px] mx-auto">
                    <img src="https://i.ibb.co/Fx4CDKv/tim-mossholder-WGMu27-W0-Jl-U-unsplash.jpg" alt="" className="w-full h-full rounded-lg group-hover:blur-sm" />
                    <div className="bg-fuchsia-950 bg-opacity-70 absolute -top-full h-1/2 w-full group-hover:top-1/2 transition-transform translate-y-full group-hover:translate-y-0 duration-500 overflow-hidden rounded-b-lg">
                        <h2 className="text-white text-2xl font-bold px-4 pt-2">Drawing</h2>
                        <div className="text-white px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aperiam id nobis!</div>
                    </div>
                </div>
            </div>
        </Fade>
        </Container>
    );
};

export default PClasses;