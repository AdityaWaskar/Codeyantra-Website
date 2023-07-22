import React from "react";
import "./carousel.css";
import { c1, c2, poster } from "../../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const imageList = [c1, c2, poster];

const createSlide = (imgeUrl, id) => {
  return (
    <SwiperSlide key={id}>
      <img className="img" src={imgeUrl} alt="" />
    </SwiperSlide>
  );
};

const Carousel = () => {
  return (
    <div className="carouselContainer">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {imageList.map((img, id) => createSlide(img, id))}
      </Swiper>
    </div>
  );
};

export default Carousel;
