import { JackInTheBox } from "react-awesome-reveal";
import { Toaster } from "react-hot-toast";
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaHandHoldingUsd } from 'react-icons/fa'
import useSelectedClass from "../../api/useSelectedClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const SelectedClasses = () => {
    const [selectedClass, refetch] = useSelectedClass();
    const total = selectedClass.reduce((sum, item) => sum + parseInt(item.price), 0);

    const handleDelete = sClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/selected/${sClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl overflow-x-auto">
            <div className="uppercase font-semibold  flex justify-evenly items-center mb-6">
                <h3 className="text-xl"><span className="text-fuchsia-900">Total Items:</span> {selectedClass.length}</h3>
                <h3 className="text-xl"><span className="text-fuchsia-900">Total Price:</span> ${total}</h3>
                <Link to={'/dashboard/pay'}>
                    <button className="btn border-2 border-green-500 text-green-500 font-bold text-2xl flex justify-center items-center w-full">
                        pay<FaHandHoldingUsd />
                    </button>
                </Link>
            </div>

            <JackInTheBox>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-fuchsia-950 text-white">
                            <th>Class</th>
                            <th>Student Email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {selectedClass.map(singleClass => (
                            <tr key={singleClass._id}>
                                <td className="px-4 py-2 w-28">
                                    <img src={singleClass.image} alt="" className="w-28 h-20 rounded-br-full border-8 border-t-0 border-l-0 border-fuchsia-950 border-double" />
                                    <span className="flex justify-end font-semibold text-gray-600">{singleClass.className}</span>
                                </td>
                                <td className="px-4 py-2">
                                    <span className="text-fuchsia-950 font-medium">{singleClass.email}</span>
                                </td>
                                <td>{singleClass.seats}</td>
                                <td>${singleClass.price}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(singleClass)}
                                        className="btn-circle text-red-500 font-bold text-2xl ">
                                        <RiDeleteBinLine />
                                    </button>
                                    <Toaster />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </JackInTheBox>
        </div>
    );
};

export default SelectedClasses;