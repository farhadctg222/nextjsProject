
import Image from 'next/image';
import im1 from '../../../public/3.jpg'
import im2 from '../../../public/4.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full h-[250px]">
        
        <div id="slide2" className="carousel-item   relative w-full">
        <div className='text-bold absolute xs:none sm:top-0 text-center h-auto'>
            <h1 className='text-center md:mb-5 sm:text-green-500 sm:text-2xl md:text-6xl  flex justify-center mt-8 text-white'>Allah one of the best Providers</h1>
            <p className='flex mb-2 justify-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, veniam.</p>
            <button className='btn btn-primary'>Join Us</button>
          </div>
          <img src={im1} className="w-full" />
          
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn ">❮</a> 
            <a href="#slide1" className="btn ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className='text-bold absolute text-center'>
            <h1 className='text-center md:mb-5 sm:text-green-500 sm:text-2xl md:text-6xl  flex justify-center mt-8 text-white'>Allah one of the best Providers</h1>
            <p className='flex mb-2 justify-center text-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, veniam.</p>
            <button className='btn btn-primary'>Join Us</button>
          </div>
          <Image src={im2} className="w-full"></Image>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide3" className="btn ">❮</a> 
            <a href="#slide1" className="btn ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <div className='text-bold absolute text-center'>
            <h1 className='text-center md:mb-5 sm:text-green-500 sm:text-2xl md:text-6xl  flex justify-center mt-8 text-white'>Allah one of the best Providers</h1>
            <p className='flex mb-2 justify-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, veniam.</p>
            <button className='btn btn-primary'>Join Us</button>
          </div>
        <Image src={im2} className="w-full"></Image>
                  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide3" className="btn">❮</a> 
            <a href="#slide1" className="btn ">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;