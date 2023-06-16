import { JackInTheBox } from "react-awesome-reveal";
import { Toaster } from "react-hot-toast";
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaHandHoldingUsd } from 'react-icons/fa'
import useSelectedClass from "../../api/useSelectedClass";
import Swal from "sweetalert2";
const SelectedClasses = () => {
    const [selectedClass, refetch] = useSelectedClass()

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
    const handlePay = id => {
        console.log(id)

    }
    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl bg-gray-50' overflow-x-auto">
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
              <th>Pay</th>
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
                      <RiDeleteBinLine/>
                    </button>
                    <Toaster />
                </td>
                <td>
                <button
                      onClick={() => handlePay(singleClass)}
                      className="btn-circle text-green-500 font-bold text-2xl ">
                      <FaHandHoldingUsd/>
                    </button>
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