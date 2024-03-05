"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Card from "./props/HoverSlider.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CiLaptop } from "react-icons/ci";

const Myslider = (params) => {
  const breakpoints = {
    380: {
      slidesPerView: 1, // 2 slides on phones
    },
    768: {
      slidesPerView: 2, // 5 slides on laptops
    },
    1200: {
      slidesPerView: 3, // 6 slides on monitors
    },
    1500: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="relative">
      <Swiper
        className="p-10 grid grid-flow-row grid-cols-1 lg:grid-cols-3 "
        // install Swiper modules
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={2}
        breakpoints={breakpoints}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Card
            title={params.cardTitle1}
            icon=<CiLaptop />
            desc={params.desc1}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            title={params.cardTitle2}
            icon=<CiLaptop />
            desc={params.desc2}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            title={params.cardTitle3}
            icon=<CiLaptop />
            desc={params.desc3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title={params.cardTitle4}
            icon=<CiLaptop />
            desc={params.desc4}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            title={params.cardTitle5}
            icon=<CiLaptop />
            desc={params.desc5}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            title={params.cardTitle6}
            icon=<CiLaptop />
            desc={params.desc6}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Myslider;