// components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import Swiper styles

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
