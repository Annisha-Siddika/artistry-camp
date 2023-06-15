import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from "../../api/useAxiosSecure";
const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeInstructor = user => {
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Instructor now!`)
                }
            })
    }
    const handleMakeAdmin = user => {
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} is an Admin now!`)
                }
            })
    }
    return (
        <div className="w-full min-h-[calc(100vh-40px)] md:pl-20 pr-5 py-10 text-gray-800 rounded-xl bg-gray-50' overflow-x-auto">
            <h2 className="text-xl font-semibold text-gray-600">Total Users: <span className="text-fuchsia-950">{users.length}</span></h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => handleMakeInstructor(user)} className={`bg-fuchsia-950 text-white font-semibold px-4 py-2 hover:bg-fuchsia-800 rounded-lg ${user.role === "admin" && 'disabled bg-slate-500 hover:bg-slate-500'}`}>Make Instructor</button>
                                        <Toaster
                                            position="top-center"
                                            reverseOrder={false}
                                        />
                                        <button onClick={() => handleMakeAdmin(user)} className={`bg-fuchsia-950 text-white font-semibold px-4 py-2 hover:bg-fuchsia-800 rounded-lg ${user.role === "admin" && 'disabled bg-slate-500 hover:bg-slate-500'}`}>Make Admin</button>
                                    </div>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;