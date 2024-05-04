import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SparkAd from './../assets/img/sparkAd.webp'
import Clab from './../assets/img/clab.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './../components/styles/App.css';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Adcaroucel = () => {
    
    return (
        <div className='px-4 lg:px-10 3xl:w-[1200px] mx-auto'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
            clickable: true,
        }}
        
        modules={[Pagination, Autoplay]}
        autoplay={{delay:2000}}
        className="mySwiper"
        >
        <SwiperSlide>
            <img src={SparkAd} className='object-cover rounded-3xl w-100px h-[150px] md:h-[220px] lg:h-[280px] xl:h-[350px] 3xl:h-[400px]' alt="spark" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Clab} className='object-cover w-100px 3xl:h-[400px] h-[150px] md:h-[220px] lg:h-[280px] xl:h-[350px] rounded-3xl' alt="clab" />
        </SwiperSlide>
       
        </Swiper>
        </div>
        )
    }
    
    export default Adcaroucel
    