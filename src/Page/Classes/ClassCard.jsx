import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../api/useAdmin";
import { Toaster, toast } from "react-hot-toast";
import {FcOk} from 'react-icons/fc';
import { Fade } from "react-awesome-reveal";
const ClassCard = ({ singleClass }) => {
    
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

  
  const handleSelect = (classInfo) => {
    const {image, className, price, seats, _id} = classInfo;
    console.log(classInfo)
    if (!user) {
        toast.error('Please log in to select the course.')
      return;
    }

    if (singleClass.seats === 0 || isAdmin) {
      return;
    }
    const selectedClassInfo ={classId: _id, className, image, price, seats, email: user.email}
    fetch(`${import.meta.env.VITE_API_URL}/selected`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectedClassInfo)

    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            toast.success('Class selected', {
                style: {
                  border: '1px solid #1dc818',
                  padding: '16px',
                  color: '#1dc818',
                },
                iconTheme: {
                  primary: '#1dc818',
                  secondary: 'white',
                },
              });
        }
    })

    
  };

  const cardStyle = {
    background: singleClass.seats === 0 ? 'red' : '',
  };

  return (
    <Fade>
        
        <div className="card card-compact shadow-xl w-3/4 md:w-full h-full mx-auto bg-fuchsia-950 relative text-white" style={cardStyle}>
      <img src={singleClass.image} alt="Class Image" className="h-[200px]"/>
      <div className="p-6">
      <h2 className="text-xl font-semibold ">{singleClass.className}</h2>
      <p>Instructor: {singleClass.instructor.name}</p>
      <p>Available Seats: {singleClass.seats}</p>
      <p>Price: ${singleClass.price}</p>
      </div>
      <button
        onClick={()=>handleSelect(singleClass)}
        disabled={singleClass.seats === 0 || isAdmin}
        className="absolute top-2 right-2 border-2 border-fuchsia-950 btn-circle text-4xl flex items-center justify-center"
      >
         <FcOk/>
      </button>
      <Toaster position="bottom-center"/>
      
    </div>
    </Fade>
  );
};

export default ClassCard;