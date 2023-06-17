
import { useContext } from "react";
import useEnrolledClass from "../../api/useEnrolledClasses";
import { AuthContext } from "../../providers/AuthProvider";

const EnrolledClasses = () => {
    const [enrolledClasses] = useEnrolledClass()
    const {user} = useContext(AuthContext);
    console.log(enrolledClasses[0].date)

    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl overflow-x-auto">
            <div>
                <h2 className="text-2xl font-bold text-fuchsia-900">Hello {user.displayName}</h2>
                <p className="text-green-600">TransactionId: </p>
                <p>Enrolled Time: {enrolledClasses[0].date}</p>
                <div className="my-4">
                    {
                       enrolledClasses[0].classInfo.map(sClass => <div
                       key={sClass._id}
                       className="flex justify-start gap-6 items-center  bg-fuchsia-300 p-10 my-6 rounded-3xl"
                       >
                        <div className="w-1/2">
                        <img src={sClass.image} className="w-full rounded-3xl" alt="" />
                        </div>
                        <div className="">
                            <h2 className="text-xl font-bold ">Class Name: {sClass.className}</h2>
                            <p>Available Seats: {sClass.seats}</p>
                        </div>
                       </div>) 
                    }
                </div>
            </div>
            
        </div>
    );
};

export default EnrolledClasses;