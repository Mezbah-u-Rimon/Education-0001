import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const Banner = () => {
    return (
        <div className='text-white'>
            <div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/5537513/pexels-photo-5537513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-[130px]'>
                                    <small className='text-xl font-bold'>The Impact of Technology on 21st Century</small>
                                    <h1 className='text-7xl font-bold text-white pt-3 pb-7'>
                                        Education
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/6281994/pexels-photo-6281994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-[130px]'>
                                    <small className='text-xl font-bold'> Strategies for Effective Teaching and Student </small>
                                    <h1 data-aos="fade-left" className='text-7xl font-bold text-white pt-3 pb-7'>
                                        Engagement
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/3779630/pexels-photo-3779630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-[130px]'>
                                    <small className='text-xl font-bold'> Lifelong Learning and Skill </small>
                                    <h1 data-aos="fade-left" className='text-7xl font-bold text-white pt-3 pb-7'>
                                        Development
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-[130px]'>
                                    <small className='text-xl font-bold'> Preparing Students for Changing </small>
                                    <h1 data-aos="fade-left" className='text-7xl font-bold text-white pt-3 pb-7'>
                                        Careers
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
};

export default Banner;