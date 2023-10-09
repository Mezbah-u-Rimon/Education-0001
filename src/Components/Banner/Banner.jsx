import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



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

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom">
                                        The Impact of Technology on 21st Century</small>
                                    <h1 className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'
                                        data-aos="zoom-in-right">
                                        Education
                                    </h1>
                                    <button
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        className='btn bg-[#ffb303] hover:bg-[#fab411c6]'> Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/6281994/pexels-photo-6281994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.3)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    > Strategies for Effective Teaching and Student </small>
                                    <h1 data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                        className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Engagement
                                    </h1>
                                    <button
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                        className='btn bg-[#ffb303] hover:bg-[#fab411c6]'
                                    > Bay the Courses Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/3779630/pexels-photo-3779630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    > Lifelong Learning and Skill </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Development
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Bay the Courses Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                            className='w-full h-screen'>

                            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className='w-full h-full flex flex-col gap-5 justify-center'>

                                <div className='px-10 md:px-20 lg:px-[130px]'>
                                    <small className='text-xl font-bold'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                    > Preparing Students for Changing </small>
                                    <h1 data-aos="zoom-in-right" className='text-4xl md:text-7xl font-bold text-white pt-3 pb-7'>
                                        Careers
                                    </h1>
                                    <button className='btn bg-[#ffb303] hover:bg-[#fab411c6]'
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"
                                    > Bay the Courses Now</button>
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