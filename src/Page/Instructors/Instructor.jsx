
const Instructor = ({instructor}) => {
    const { name, photo, email} = instructor
    return (

        <div className="h-full bg-white rounded-lg shadow-xl mb-4 
            w-full 
            relative 
            overflow-hidden group">
            <img src={photo} alt="" className="object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition md:h-80 p-5 rounded"/>
            <div className="px-4">
            <h2 className="text-xl font-bold">Name: <span>{name}</span></h2>
            <div className="font-semibold">Email: {email}</div>
            <div className="pt-4"><button className="btn bg-fuchsia-950 text-white hover:bg-fuchsia-800">See Classes</button></div>
            </div>
        </div>
    );
};

export default Instructor;