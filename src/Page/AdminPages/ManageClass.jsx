import { useState, useEffect } from "react";
import { getAllClasses } from "../../api/classes";
import { Fade } from "react-awesome-reveal";
import toast, { Toaster } from 'react-hot-toast';

const ManageClass = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = () => {
    getAllClasses()
      .then(data => {
        setClasses(data);
      })
      .catch(err => console.log(err.message));
  };

  const handleApprove = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/approve/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success('Approved');
          fetchClasses();
        }
      });
  };

  const handleDeny = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/deny/${id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success('Denied');
          fetchClasses();
        }
      });
  };

  const openModal = (id) => {
    setSelectedClassId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFeedbackText('');
  };

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSendFeedback = () => {
    fetch(`${import.meta.env.VITE_API_URL}/classes/feedback/${selectedClassId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback: feedbackText }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Feedback sent');
          closeModal();
          fetchClasses();
        } else {
          toast.error('Failed to send feedback');
        }
      })
      .catch((error) => {
        toast.error('Failed to send feedback');
        console.log(error);
      });
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl bg-gray-50' overflow-x-auto">
      <Fade>
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
            {classes.map(singleClass => (
              <tr key={singleClass._id}>
                <td className="px-4 py-2 w-28">
                  <img src={singleClass.image} alt="" className="w-28 h-20 rounded-br-full border-8 border-t-0 border-l-0 border-fuchsia-950 border-double" />
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
                <td>{singleClass.status}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleApprove(singleClass._id)}
                      className="btn bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg"
                      disabled={singleClass.status === 'approved' || singleClass.status === 'denied'}
                    >
                      Approve
                    </button>
                    <Toaster />
                    <button
                      onClick={() => handleDeny(singleClass._id)}
                      className="btn bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg"
                      disabled={singleClass.status === 'approved' || singleClass.status === 'denied'}
                    >
                      Deny
                    </button>
                    <button
                      className="bg-fuchsia-950 text-white font-semibold px-2 py-1 hover:bg-fuchsia-800 rounded-lg"
                      onClick={() => openModal(singleClass._id)}
                    >
                      Send feedback
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fade>

      <div className={`modal ${showModal ? 'modal-open' : ''}`}>
        <div className="modal-content">
          <textarea
            value={feedbackText}
            onChange={handleFeedbackTextChange}
            placeholder="Write your feedback..."
          ></textarea>
          <div className="modal-actions">
            <button onClick={handleSendFeedback} className="bg-green-500 px-2 rounded text-white">
              Send
            </button>
            <button onClick={closeModal} className="bg-red-500 px-2 rounded text-white">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClass;
