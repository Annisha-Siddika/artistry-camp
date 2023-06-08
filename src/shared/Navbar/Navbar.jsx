
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const userName = user?.displayName;
    const userPic = user?.photoURL;
    console.log(userName, userPic);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.error(error) });
    }
    return (
        <nav className="bg-fuchsia-950">
            <Container>
                <div className="flex items-center justify-between px-4 py-2">
                    <Link to='/' className="text-white flex flex-col justify-center items-center">
                        <img src="https://i.ibb.co/wdv12Hc/brush.png" alt='logo' width='50' height='50' />
                        <h2 className="text-2xl font-bold hidden sm:block">Artistry Camp</h2>
                    </Link>
                    <div className="flex items-center">
                        <ul className="space-x-4 text-white text-lg font-semibold flex">
                            <li>
                                <Link to="/" className="hover:text-fuchsia-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/instructors" className="hover:text-fuchsia-300">Instructors</Link>
                            </li>
                            <li>
                                <Link to="/classes" className="hover:text-fuchsia-300">Classes</Link>
                            </li>
                            <div onClick={() => setIsOpen(!isOpen)}>
                                <FaUserCircle className='text-3xl mr-2 text-white '></FaUserCircle>
                                {isOpen && (
                                    <div className='absolute rounded-xl shadow-md w-40 md:w-[20vw] bg-white overflow-hidden right-0 top-24 text-sm text-fuchsia-950 text-center'>
                                        <div className='flex flex-col cursor-pointer'>
                    {user ? (<>
                    
                        <Link className="py-1 px-2 rounded-lg bg-white text-fuchsia-950 font-bold mr-2" to='/dashboard'>Dashboard</Link>
                <Link onClick={handleLogOut} className="py-1 px-2 rounded-lg bg-white text-fuchsia-950 font-bold mr-2" to='/logout'>Log Out</Link>
                    
                    </>) : (
                <>
                <Link to='/login'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Login</Link>
                <Link to='/signup'
                 className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Sign Up</Link>
                  </>
                )}
                  </div>
                  </div>
                                )}
                            </div>
                        </ul>

                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
