import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Img1 from "../assets/images/image1.png";
import Img2 from "../assets/images/image2.png";
import Img3 from "../assets/images/image3.png";
import Img4 from "../assets/images/image4.png";
import Img5 from "../assets/images/image5.png";
import Img6 from "../assets/images/image6.png";

const Class = () => {
    return (         
        <Container>
            <Row id="classes" className=" justify-content-center align-items-center p-5 mb-5 mt-5 gy-5">
                <Col>
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
                                </SwiperSlide>
                                <SwiperSlide
                                    className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                                    <img src={Img2} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />                            
                                </SwiperSlide>
                                <SwiperSlide
                                    className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                                    <img src={Img3} alt="" className='absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />                            
                                </SwiperSlide>
                                <SwiperSlide
                                    className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                                    <img src={Img4} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />                           
                                </SwiperSlide>
                                <SwiperSlide
                                    className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                                    <img src={Img5} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />                            
                                </SwiperSlide>
                                <SwiperSlide
                                    className='flex align-items-center justify-content-center rounded-2 fw-bold text-white'>
                                    <img src={Img6} alt="" className='position-absolute w-5 h-5 object-fit-cover cursor-pointer mb-1 rounded-3' />                            
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="text-center justify-content-center">
                        <h1 className='text-capitalize justify-content-center text-center fw-bold text-dark'>Our classes</h1>
                        <p className="text-start text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt sed ante nec commodo. Curabitur egestas ipsum ipsum, eget pretium.</p>  
                        <p className='text-start my-5 text-capitalize text-danger fw-lighter text-center'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex ex, euismod id sem in."
                        </p>
                        <h4 className="text-start text-dark">Sed sollicitudin quam ipsum, et tincidunt enim laoreet at. Nam nec mi in mi vehicula finibus nec vel ligula. Maecenas.</h4>
                    </div>              
                </Col>
            </Row>
    </Container>
      
    );
}
 
export default Class;