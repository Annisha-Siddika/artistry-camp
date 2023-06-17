import { Fade } from "react-awesome-reveal";
import useMyClasses from "../../api/useMyClasses";

const MyClasses = () => {
    const [myclass] = useMyClasses();
    
    
    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl overflow-x-auto">
            <Fade>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-fuchsia-950 text-white">
              <th>Class</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Total Enrolled</th>
              <th>Status</th>
              <th>FeedBack</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {myclass.map(singleClass => (
              <tr key={singleClass._id}>
                <td className="px-4 py-2 w-28">
                  <img src={singleClass.image} alt="" className="w-28 h-20 rounded-br-full border-8 border-t-0 border-l-0 border-fuchsia-950 border-double" />
                  <span className="flex justify-end font-semibold text-gray-600">{singleClass.className}</span>
                </td>
                <td>{singleClass.seats}</td>
                <td>${singleClass.price}</td>
                <td>{singleClass.ecrolled? singleClass.enrolled : 0}</td>
                <td>{singleClass.status}</td>
                <td>{singleClass.feedback? singleClass.feedback : '---'}</td>
                <td>
                  <div className="flex items-center gap-2">
                    
                    <button
                      className="bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg"
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fade>
        </div>
    );
};

export default MyClasses;