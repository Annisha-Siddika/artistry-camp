import { Fade } from "react-awesome-reveal";
import Container from "../../../shared/Container";
import Banner from "../../../components/Banner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Loader from "../../../components/Loader";
import Card from "./Card";

const PClasses = () => {
    const [classes, setClasses] = useState([]);
    const {loading, setLoading} = useContext(AuthContext)

    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_API_URL}/classes/approve`)
        .then(res => res.json())
        .then(data => {
            setClasses(data);
            setLoading(false)
          })
          .catch(err => console.log(err.message));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    if (loading){
        return <Loader></Loader>
     }
     
    return (
        <Container>
            <Banner/>
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-fuchsia-950 italic py-4">Our Popular Classes</h2>
            </div>
            <Fade>
                {
                    classes && classes.length > 0? <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {
                        classes.map((pClass)=> <Card key={pClass._id}
                        pClass={pClass}
                        ></Card>)
                    }
                </div>: <div className='text-center'>
        <div className='text-2xl font-bold'>Currently No Classes is running</div>
        <div className='font-light text-neutral-500 mt-2'>Please Come Later!</div>
      </div>
                }
            </Fade>
        </Container>
    );
};

export default PClasses;