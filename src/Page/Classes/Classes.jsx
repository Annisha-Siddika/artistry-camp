import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Container from "../../shared/Container";

const Classes = () => {
    const [classes, setClasses] = useState([]);
  
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/approve`)
        .then(res => res.json())
        .then(data => {
            setClasses(data);
          })
          .catch(err => console.log(err.message));

    }, []);
  
    return (
      <div className="pt-2">
        <div className="flex justify-center items-center border-y-4 py-6 relative bg-fuchsia-200" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 1)' }}>
            <img className="mask mask-star absolute w-40 left-2 lg:left-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <img className="mask mask-star absolute w-40 right-2 lg:right-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <span className="font-extrabold text-4xl rotate-6 text-orange-600">
                    Our
                </span>
                <span className="font-extrabold text-4xl -rotate-6 px-2 text-sky-800">
                    Classes
                </span>
            </div>
        <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {classes.map(singleClass => (
          <ClassCard key={singleClass._id} singleClass={singleClass} classes={classes} />
        ))}
        </div>
        </Container>
      </div>
    );
  };
  

export default Classes;