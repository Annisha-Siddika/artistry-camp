
import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../shared/Container";
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
const SignUp = () => {
    const { createUser, updateUserProfile, googleSignIn, facebookSignIn, setLoading } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        const { email, password, image, name } = data; 
        const formData = new FormData()
        formData.append('image', image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                const imageUrl = data.data.display_url
                createUser(email, password)
                    .then(result => {
                        
                        console.log(result.user);
                        reset();
                        updateUserProfile(name, imageUrl)
                        .then(() => {
                            
                            toast.success('User created successfully')
                            saveUser(result.user)
                            navigate(from, { replace: true })
                        }).catch(error => {
                            console.log(error.message);
                            toast.error(error.message)
                            setLoading(false)
                        })
                    }).catch(error => {
                        console.log(error.message);
                        toast.error(error.message)
                        setLoading(false)
                    })
            }).catch(error => {
                console.log(error.message);
                toast.error(error.message)
                setLoading(false)
            })

    }

    const password = useRef({});
    password.current = watch('password', '');

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                saveUser(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
                toast.error(error.message)
            })
    }
    const handlefbSignIn = () => {
        facebookSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                saveUser(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
            })
    }

    return (
        <Container>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full mb-12 pt-10">
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl text-center text-fuchsia-950 font-bold mb-2">Create an Account</h2>
                    <img
                        src="https://i.ibb.co/q1gVB2m/11057.jpg"
                        alt="Logo"
                        className="mb-4"
                    />
                </div>
                <div className="w-full lg:w-1/2 bg-slate-300  p-6 rounded-lg">

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                {...register('name', { required: true })}
                                className="input focus:ring focus:border-fuchsia-500"
                            />
                            {errors.name && <span className="text-red-500">Name is required.</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: true })}
                                className="input focus:ring focus:border-fuchsia-500"
                            />
                            {errors.email && <span className="text-red-500">Email is required.</span>}
                        </div>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label htmlFor="password" className="block mb-2">
                                    Password:
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="password"
                                        {...register('password', {
                                            required: true,
                                            minLength: 6,
                                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                                        })}
                                        className="input focus:ring focus:border-fuchsia-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="ml-2 focus:outline-none"
                                    >
                                        {passwordVisible ? (
                                            <RxEyeOpen></RxEyeOpen>
                                        ) : (
                                            <RxEyeClosed></RxEyeClosed>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-red-500">
                                        Password must be at least 6 characters long and include at least one capital letter, one special character, and one digit.
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block mb-2">
                                    Confirm Password:
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => value === password.current || "The passwords don't match.",
                                    })}
                                    className="input focus:ring focus:border-fuchsia-500"
                                />
                                {errors.confirmPassword && (
                                    <span className="text-red-500">{errors.confirmPassword.message}</span>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="mb-4">
                                <label htmlFor="image" className="block mb-2">
                                    Photo URL:
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    accept='image/*'
                                    {...register('image', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">
                                    Gender:
                                </label>
                                <select {...register("gender")} className="input focus:ring focus:border-fuchsia-500">
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block mb-2">
                                    Phone Number:
                                </label>
                                <input
                                    type="number"
                                    id="phoneNumber"
                                    {...register('phoneNumber')}
                                    className="input focus:ring focus:border-fuchsia-500"
                                />
                            </div>
                        </div>
                        <div> 
                            <div className="mb-4">
                                <label htmlFor="address" className="block mb-2">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    {...register('address')}
                                    className="input focus:ring focus:border-fuchsia-500"
                                />
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-fuchsia-950 text-white py-3 font-bold hover:bg-fuchsia-900 transition-colors rounded-xl">
                        
                                 Continue
                            
                        </button>
                    </form>
                    <p className="pt-2">
                        Already have an account?{' '}
                        <Link to="/login" className="text-fuchsia-950 font-semibold">
                            Login
                        </Link>
                    </p>
                    <div>
                        <p className="text-center my-4">Or sign up with:</p>
                        <div className="flex justify-center items-center gap-4">
                            <span onClick={handleGoogleSignIn} className="flex items-center gap-2 text-lg cursor-pointer border-2 border-fuchsia-950 rounded-lg px-6 py-1"><FcGoogle className="" />Google</span>
                            <span onClick={handlefbSignIn} className="flex items-center gap-2 text-lg cursor-pointer border-2 border-fuchsia-950 rounded-lg px-6 py-1"><FaFacebook className="text-blue-700" />Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};
export default SignUp;

