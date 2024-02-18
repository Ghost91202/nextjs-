"use client";
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y } from 'swiper/modules';
import Card from './props/HoverSlider.js'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CiLaptop } from "react-icons/ci";

const Myslider = () => {

  const breakpoints = {
    480: {
      slidesPerView: 2, // 2 slides on phones
    },
    768: {
      slidesPerView: 3, // 5 slides on laptops
    },
    1200: {
      slidesPerView: 3, // 6 slides on monitors
    },
    1500: {
      slidesPerView: 3
    }
  };

  return (
    <div className="relative">
      <Swiper
        className='p-10 grid grid-flow-row grid-cols-1 lg:grid-cols-3 '
        // install Swiper modules
        modules={[ A11y ]}
        spaceBetween={50}
        slidesPerView={2}

        breakpoints={breakpoints}


        pagination={{ clickable: true }}

        onSwiper={( swiper ) => console.log( swiper )}
        onSlideChange={() => console.log( 'slide change' )}
      >
        <SwiperSlide>
          <Card
            title="E-Commerce Platforms"
            icon=<CiLaptop />
            desc="Local SEO is essential for businesses with physical locations or specific service areas. Our service focuses on optimising your online presence to dominate local search results, attracting nearby customers right to your doorstep."
          /></SwiperSlide>
        <SwiperSlide> <Card
          title="Keyword Research: Unlocking the Potential of Every Search"
          icon=<CiLaptop />
          desc="Leveraging cutting-edge tools and deep industry knowledge, our Keyword Research services uncover high-value keywords and search trends. We craft targeted strategies that not only enhance your organic visibility but also attract qualified traffic, elevating your search engine rankings." /></SwiperSlide>
        <SwiperSlide> <Card
          title="Backlink Analysis: Building a Robust Digital Foundation"
          icon=<CiLaptop />
          desc="Our Backlink Analysis services delve deep into the quality and quantity of your website&apos;s backlinks. We identify improvement opportunities and devise strategies to strengthen your domain authority, boost organic rankings and attract targeted traffic." /></SwiperSlide>
        <SwiperSlide>
          <Card title="Local SEO Service: Capturing Your Local Market"
          icon=<CiLaptop />
          desc="Local SEO is essential for businesses with physical locations or specific service areas. Our service focuses on optimising your online presence to dominate local search results. attracting nearby customers right to your doorstep." /></SwiperSlide>
        <SwiperSlide> <Card
          title="E-E-A-T: The Pillars of Credible Online Content"
          icon=<CiLaptop />
          desc="E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. This Google-originated concept is pivotal in determining the quality and credibility of web pages and we ensure your content embodies these crucial elements."  /></SwiperSlide>
        <SwiperSlide> <Card
          title="SEO Audit: A Comprehensive Health Check for Your Website"
          icon=<CiLaptop />
          desc="Our SEO audit services provide a thorough analysis of your website&apos;s performance. We identify optimisation opportunities and offer actionable recommendations to enhance your search engine visibility."

          /></SwiperSlide>



      </Swiper>
    </div>
  )
}

export default Myslider
