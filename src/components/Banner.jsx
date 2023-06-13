
const Banner = () => {
    return (
        <div className="flex justify-center items-center border-y-4 py-6 relative bg-fuchsia-200" style={{ textShadow: '3px 3px 4px rgba(0, 0, 0, 1)' }}>
                <img className="mask mask-star absolute w-40 left-2 lg:left-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <img className="mask mask-star absolute w-40 right-2 lg:right-80" src="https://i.ibb.co/ypdLf0z/abstract-vector-paint-color-design-260nw-793651678.jpg" />
                <span className="text-orange-600 text-3xl font-bold -rotate-6 px-2 ">Artistry</span>
                <span className="text-blue-700 text-3xl font-bold rotate-6 px-2">Summer</span>
                <span className="text-yellow-900 text-3xl font-bold -rotate-6 px-2">Camp</span>
                <span className="font-extrabold text-4xl -rotate-6 px-2 text-green-700">
                    2
                </span>
                <span className="font-extrabold text-4xl rotate-6 text-red-700">
                    0
                </span>
                <span className="font-extrabold text-4xl rotate-6 px-2 text-indigo-800">
                    2
                </span>
                <span className="font-extrabold text-4xl -rotate-12 text-yellow-500">
                    3
                </span>
            </div>
    );
};

export default Banner;