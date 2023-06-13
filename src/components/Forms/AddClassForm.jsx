import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddClassForm = ({handleSubmit, handleImageChange, changeBtnText}) => {
    const {user} = useContext(AuthContext)
    return (
        <div className='w-full min-h-[calc(100vh-40px)] md:px-20 py-10 text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
      <div className='space-y-3'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='className' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-fuchsia-950 focus:outline-fuchsia-950 rounded-md '
                name='className'
                id='className'
                type='text'
                placeholder='Class Name'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      onChange={event=>{handleImageChange(event.target.files[0])}}
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      required
                      hidden
                    />
                    <div className='bg-fuchsia-950 py-1 px-2 text-white border border-gray-300 rounded font-semibold cursor-pointer hover:bg-fuchsia-950'>
                      {
                        changeBtnText
                      }
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='instructorName' className='block text-gray-600'>
                Instructor Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-fuchsia-950 focus:outline-fuchsia-950 rounded-md '
                name='instructorName'
                id='instructorName'
                type='text'
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='instructorEmail' className='block text-gray-600'>
                Instructor Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-fuchsia-950 focus:outline-fuchsia-950 rounded-md '
                name='instructorEmail'
                id='instructorEmail'
                type='email'
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm w-full'>
                <label htmlFor='seats' className='block text-gray-600'>
                Available Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-fuchsia-950 focus:outline-fuchsia-950 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Available Seats'
                  required
                />
              </div>
              <div className='space-y-1 text-sm w-full'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-fuchsia-950 focus:outline-fuchsia-950 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>  
          </div>
        
        </div>
        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-fuchsia-950'
        >Save & Continue
        </button>
      </form>
    </div>
    );
};

export default AddClassForm;