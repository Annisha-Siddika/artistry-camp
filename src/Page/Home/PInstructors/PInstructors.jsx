import { useEffect, useState } from "react";
import Container from "../../../shared/Container";
import { Fade } from "react-awesome-reveal";
import InsCard from "./InsCard";

const PInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/users/instructors`)
        .then(res => res.json())
        .then(data => setInstructors(data))
        .catch(err => console.log(err.message))
    },[])
    return (
        <div>
             <Container>
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-fuchsia-950 italic py-4">Our Popular Instructors</h2>
            </div>
            <Fade>
                {
                    instructors && instructors.length > 0? <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {
                        instructors.map((pInstructor)=> <InsCard key={pInstructor._id}
                        pInstructor={pInstructor}
                        ></InsCard>)
                    }
                </div>: <div className='text-center'>
        <div className='text-2xl font-bold'>Currently there is No Instuctors</div>
        <div className='font-light text-neutral-500 mt-2'>Please Come Later!</div>
      </div>
                }
            </Fade>
        </Container>
            
        </div>
    );
};

export default PInstructors;