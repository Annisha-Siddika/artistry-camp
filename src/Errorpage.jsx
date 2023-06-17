import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center mt-20">
                <img src="https://i.ibb.co/K6KT17N/error404.png" className="w-[400px] mb-20" alt="" />
               <Link to='/'>
               <button className="btn
                bg-fuchsia-950 hover:bg-fuchsia-800 text-white">Back to Home</button>
               </Link>
            </div>
        </div>
    );
};

export default Errorpage;