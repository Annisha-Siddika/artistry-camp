import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { FaArrowRight } from 'react-icons/fa'
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div>
            <AutoplaySlider
            style={{height: "60vh", marginBottom:"50px"}}
            
                play={true}
                cancelOnInteraction={true} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://i.ibb.co/hKq2sDQ/andrian-valeanu-yj-Xlyr-KIz2-A-unsplash.jpg" >
                    <div className='absolute top-0 left-0 bg-slate-800 bg-opacity-60 h-full w-full z-10'>
                    <h2 className='text-4xl  text-white font-bold pl-6 lg:pl-24 py-10'>Get ready for a summer of artistic adventures! </h2>
                    <p className='text-white pl-6 lg:pl-24 pb-6 w-2/3 lg:w-1/3'> Our Artistry Camp provides a platform for budding artists to learn new techniques, express themselves, and develop their artistic skills.</p>
                    <button className='btn bg-fuchsia-950 text-white font-bold hover:bg-fuchsia-800 ml-6 lg:ml-24'>Get Start <FaArrowRight/></button>
                    </div>
                </div>
                <div data-src="https://i.ibb.co/6msYmZG/matthieu-comoy-koo-v-Yrl-U-U-unsplash.jpg" >
                <div className='absolute top-0 left-0 bg-slate-800 bg-opacity-60 h-full w-full z-10'>
                    <h2 className='text-4xl  text-white font-bold pl-6 lg:pl-24 py-10'>Ignite Your Creative Spark at Our Artistry Camp!</h2>
                    <p className='text-white pl-6 lg:pl-24 pb-6 w-2/3 lg:w-1/3'> Explore your artistic potential at our Artistry Camp. From painting and drawing to sculpture and mixed media, there is something for everyone!</p>
                    <button className='btn bg-fuchsia-950 text-white font-bold hover:bg-fuchsia-800 ml-6 lg:ml-24'>Get Start <FaArrowRight/></button>
                    </div>
                </div>
                <div data-src="https://i.ibb.co/Fx4CDKv/tim-mossholder-WGMu27-W0-Jl-U-unsplash.jpg" >
                <div className='absolute top-0 left-0 bg-slate-800 bg-opacity-60 h-full w-full z-10'>
                    <h2 className='text-4xl  text-white font-bold pl-6 lg:pl-24 py-10'>Discover the magic of art this summer at our Artistry Camp! </h2>
                    <p className='text-white pl-6 lg:pl-24 pb-6 w-2/3 lg:w-1/3'> Dive into a world of colors, shapes, and textures, and let your imagination soar.</p>
                    <button className='btn bg-fuchsia-950 text-white font-bold hover:bg-fuchsia-800 ml-6 lg:ml-24'>Get Start <FaArrowRight/></button>
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Slider;