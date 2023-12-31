import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/3.jpg';
import img4 from '../../../assets/images/4.jpg';
import img5 from '../../../assets/images/5.jpg';
import img6 from '../../../assets/images/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide6" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6}className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='text-6xl font-bold'>Discover Bangladesh's Beauty.</h2>
                        <p>Uncover Bangladesh's hidden gems, from serene river cruises to vibrant markets, and create unforgettable memories with us.</p>
                        <div>
                            <button className="btn btn-wide btn-outline btn-info">Start Your Journey</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            
        </div>
    );
};

export default Banner;