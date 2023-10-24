import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { heroSliderData } from "./data";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Box, Image } from "@chakra-ui/react";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Box className="hero-slider">
      <Navbar />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {heroSliderData.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Image
              w="100%"
              h="100%"
              objectFit="cover"
              filter="brightness(0.8)"
              src={item.path}
              alt={item.altText}
            />
          </SwiperSlide>
        ))}

        <Box className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </Box>
      </Swiper>
    </Box>
  );
};

export default Slider;
