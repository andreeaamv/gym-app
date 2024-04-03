import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import Img1 from "../assets/images/image1.png";
import Img2 from "../assets/images/image2.png";
import Img3 from "../assets/images/image3.png";
import Img4 from "../assets/images/image4.png";
import Img5 from "../assets/images/image5.png";
import Img6 from "../assets/images/image6.png";

const Class = () => {
    return (         
        <section id="classes" className="align-items-center p-5 mb-5 gy-5">        
            <div className="justify-content-center">
                <div className="justify-content-center align-items-center">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-10px h-10px "
                    >
                        <SwiperSlide 
                        className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img1} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide
                            className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img2} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide
                            className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img3} alt="" className='absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide
                            className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img4} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide
                            className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img5} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                        <SwiperSlide
                            className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                            <img src={Img6} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />
                            <span className="flex gy-4 flex-column opacity-50 position-absolute justify-content-center align-items-center bg-success">
                                <h1 className='fw-bold text-uppercase'>Weight training class</h1>
                                <p className='p-2 text-center'>stias architecto voluptas repellendus. Sint aliquam veritatis ipsam autem beatae error modi cumque.</p>
                            </span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="text-center justify-content-center">
                <h1 className='text-capitalize justify-content-center text-center fw-bold text-danger'>Our classes</h1>
                <p className="text-start text-light">We get lots of messages about the classes actually, with people regularly asking us things like:</p>  
                <p className='text-start my-5 text-capitalize text-danger fw-lighter text-center'>
                    "Why should we attend these classes? What classes are more useful for us? Will we get the desired result soon by participating in these classes?"
                </p>
                <h4 className="text-start text-light">
                    By hovering over each photo, you can read the details of each class and get answers to your questions.
                </h4>
            </div>              
        </section>       
    );
}
 
export default Class;