import { useContext, useState } from "react"

import AddClassForm from "../../../components/Forms/AddClassForm"
import { imageUpload } from "../../../api/imgUpload"
import { AuthContext } from "../../../providers/AuthProvider"
import { addClass } from "../../../api/classes"
import { toast } from "react-hot-toast"

const AddClass = () => {
    const [changeBtnText, setChangeBtnText] = useState('Upload Image')
    const {user} = useContext(AuthContext)
   const handleSubmit = event => {
    event.preventDefault()
    const className = event.target.className.value;
    const seats = event.target.seats.value;
    const price = event.target.price.value;
    const image = event.target.image.files[0]

    imageUpload(image).then(data =>{
        const classData = {
            image: data.data.display_url,
            className,
             seats,
              price,
              status: 'pending',
            instructor: {
                name: user?.displayName,
                image:user?.photoURL,
                email: user?.email,
            }
        }
        
        addClass(classData).then(data => {
            console.log(data)
            toast.success('New Class has been added successfully')
        })
        .catch(err => console.log(err.message))
        
    }).catch(err => console.log(err.message))
    console.log('hello')
   }

   const handleImageChange = image =>{
    setChangeBtnText(image.name)
   }
  return (
   <>
   <AddClassForm handleSubmit={handleSubmit} handleImageChange={handleImageChange} changeBtnText={changeBtnText}/>
   
   </>
  )
}

export default AddClass