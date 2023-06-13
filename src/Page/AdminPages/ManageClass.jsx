import { useState } from "react";
import { getAllClasses } from "../../api/classes";
import { useEffect } from "react";

const ManageClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        getAllClasses()
        .then(data => {
            setClasses(data)
        })
        .catch(err => console.log(err.message))
    },[])

    

    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl bg-gray-50' overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr className="bg-fuchsia-950 text-white">
        <th>Class</th>
        <th className="text-center">Instructor</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Status</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
     
        {
            classes.map(singleClass => <tr
                key={singleClass._id}
            >
                <td className="px-4 py-2 w-28">
                    <img src={singleClass.image} alt="" className="w-28 h-20 rounded-br-full border-8 border-t-0 border-l-0 border-fuchsia-950 border-double"/>
                    <span className="flex justify-end font-semibold text-gray-600">{singleClass.className}</span>
                </td>
                <td className="px-4 py-2">
                    <div className="flex flex-col">
                    <span className="text-fuchsia-950 font-medium">{singleClass.instructor.name}</span>
                    <span>Email: {singleClass.instructor.email}</span>
                    </div>
                </td>
                <td>{singleClass.seats}</td>
                <td>${singleClass.price}</td>
                <td>panding</td>
                <td>
                <div className="flex items-center gap-2">
                <button className="bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg">Approve</button><button className="bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg">Deny</button><button className="bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg">Send feedback</button>
                </div>
                </td>
              </tr>)
        }
    </tbody>
    
  </table>
</div>
    );
};

export default ManageClass;