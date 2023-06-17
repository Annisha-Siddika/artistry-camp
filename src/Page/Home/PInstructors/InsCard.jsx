
const InsCard = ({pInstructor}) => {
    const { name, photo, email} = pInstructor
    return (
        <div className="relative overflow-hidden group h-[400px] w-[350px] mx-auto">
        <img src={photo} alt="" className="w-full h-full rounded-lg group-hover:blur-sm" />
        <div className="bg-fuchsia-950 bg-opacity-70 absolute -top-full h-1/2 w-full group-hover:top-1/2 transition-transform translate-y-full group-hover:translate-y-0 duration-500 overflow-hidden rounded-b-lg">
            <div className="text-white text-2xl font-bold px-4 py-2">Instructor: {name}
            <br />
            Email: {email}
            </div>
        </div>
    </div>
    );
};

export default InsCard;