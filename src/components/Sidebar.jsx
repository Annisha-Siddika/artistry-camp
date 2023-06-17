import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import { AuthContext } from '../providers/AuthProvider'
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import { MdClass, MdOutlineClass } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { HiHome } from 'react-icons/hi'
import useAdmin from '../api/useAdmin';
import useInstructor from '../api/useInstructor';
const Sidebar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
console.log("isAdmin:", isAdmin);
    return (
        <>
            <div className='bg-gray-100 text-gray-800 flex justify-between'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <img src="https://i.ibb.co/wdv12Hc/brush.png" alt='logo' width='50' height='50' />
                    </div>
                </div>
            </div>
            <div
                className='z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform'
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex py-2 justify-center items-center bg-fuchsia-800 mx-auto'>
                            <Link to='/' className="text-white flex gap-2 justify-center items-center">
                                <img src="https://i.ibb.co/wdv12Hc/brush.png" alt='logo' width='40' height='40' />
                                <h2 className="text-lg font-bold hidden sm:block">Artistry Camp</h2>
                            </Link>

                        </div>

                        <div className='flex flex-col items-center mt-6 -mx-2'>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className='divider'></div>

                    <ul className='flex flex-col justify-between flex-1 mt-6'>
                    <Link to='/' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'><HiHome/> <span>Home</span></Link>
                    {
                        isAdmin ? (
                            <>
                                <Link to='/dashboard/manage-classes' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <VscSymbolClass className='w-5 h-5' /><span>Manage Classes</span></Link>
                                <Link to='/dashboard/allusers' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <AiOutlineUserSwitch className='w-5 h-5' /><span>Manage Users</span></Link>
                            </>
                        ):(
                            isInstructor ? (
                            <>
                                <Link to='/dashboard/add-class' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <HiViewGridAdd className='w-5 h-5' /><span>Add a Class</span></Link>
                                <Link className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <MdOutlineClass className='w-5 h-5' /><span>My Classes</span></Link>
                            </>
                            ):(
                            <>
                                <Link to='/dashboard/selected-class' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <MdClass className='w-5 h-5' /><span>My Selected Classes</span></Link>
                                <Link to='/dashboard/enrolled' className='flex items-center gap-4 hover:bg-gray-200 p-2 mb-2'> <BsBoxArrowInDownRight className='w-5 h-5' /><span>My Enrolled Classes</span></Link>
                            </>
                            )
                    )}
                   
                </ul>
                </div>

                <div>
                    <hr />

                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar