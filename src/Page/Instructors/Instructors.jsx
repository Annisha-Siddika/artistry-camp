import { useEffect } from "react";
import { useState } from "react";
import Instructor from "./Instructor";
import { Fade } from "react-awesome-reveal";
import Container from "../../shared/Container";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/users/instructors`)
        .then(res => res.json())
        .then(data => setInstructors(data))
        .catch(err => console.log(err.message))
    },[])
    return (
        <div className="bg-fuchsia-600 py-6">
            <div className="flex justify-center items-center border-y-4 py-6 relative bg-fuchsia-200" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 1)' }}>
            <img className="mask mask-star absolute w-40 left-2 lg:left-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <img className="mask mask-star absolute w-40 right-2 lg:right-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <span className="font-extrabold text-4xl -rotate-6 text-red-700">
                    Our
                </span>
                <span className="font-extrabold text-4xl rotate-6 px-2 text-indigo-800">
                    Instructors
                </span>
            </div>
        <Container>
        {
            instructors && instructors.length > 0 ? <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        
            <Fade>
                {
                    instructors.map(instructor => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </Fade>
            </div> : <div className="h-[70vh] flex justify-center items-center">
                <h2 className="text-xl font-medium text-white">No Instructors is Avilable Right Now! 
                </h2>
            </div>
        }
        </Container>
            
        </div>
    );
};

export default Instructors;