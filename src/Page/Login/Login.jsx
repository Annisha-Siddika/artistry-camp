import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx'
import Container from '../../shared/Container';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    
    console.log('Logging in...', data);
  };

  return (
        <Container>
            <div  className="flex flex-col lg:flex-row justify-center items-center w-full h-[90vh] my-12">
            <div className='w-full lg:w-1/3 bg-fuchsia-950 relative h-[80vh] rounded-ss-full'>
        <img src='https://i.ibb.co/vqM8kr0/Pngtree-artist-3634313.png' alt="Logo" className="mb-4 max-h-full absolute right-2 md:-right-16 -bottom-10" />
        </div>
        <div className='w-full lg:w-1/2 bg-slate-300 h-[80vh] p-10 md:p-20 rounded-e-lg'>
        <h2 className="text-2xl text-fuchsia-950 font-bold mb-2">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-fuchsia-500"
          />
          {errors.email && <span className="text-red-500">Email is required.</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password:</label>
          <div className="flex items-center">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-fuchsia-500"
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
          {errors.password && <span  className="text-red-500">Password is required.</span>}
        </div>
        <button type="submit" className="w-full bg-fuchsia-950 text-white py-2 rounded-xl">Login</button>
      </form>
      <p className='pt-2'>
        Dont have an account? <Link to="/signup" className='text-fuchsia-950 font-semibold'>Sign Up</Link>
      </p>
      <div>
          <p className="text-center my-4">Or sign up with:</p>
          <div className="flex justify-center items-center gap-4">
          <span className="flex items-center gap-2 text-lg cursor-pointer border-2 border-fuchsia-950 rounded-lg px-6 py-1"><FcGoogle className=""/>Google</span>
          <span className="flex items-center gap-2 text-lg cursor-pointer border-2 border-fuchsia-950 rounded-lg px-6 py-1"><FaFacebook className="text-blue-700"/>Facebook</span>
          </div>
        </div>
        </div>
            </div>
        </Container>
  );
};

export default Login;
