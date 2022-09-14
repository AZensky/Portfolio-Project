import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/material";
import { Keyboard, Mousewheel, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "../Card/Card";
import { Ecom, social, Business } from "../../assets";
import "./Slider.css";

const SLIDER_OPTIONS = [
  {
    id: 0,
    title: "Cracking Leetcode",
    image: Ecom,
    liveLink: "https://cracking-leetcode.herokuapp.com/",
    githubLink: "https://github.com/AZensky/Cracking-Leetcode",
  },
  {
    id: 1,
    title: "Legendhood",
    image: social,
    liveLink: "https://robinhood-clone-project.herokuapp.com/",
    githubLink: "https://github.com/AZensky/Legendhood",
  },
  {
    id: 2,
    title: "BudgetBetter ",
    image: Business,
    liveLink: "https://budget-better-app.herokuapp.com/",
    githubLink: "https://github.com/jerichomata/BudgetBetter",
  },
  {
    id: 3,
    title: "HackUp",
    image: Ecom,
    liveLink: "https://api-meetup-clone.herokuapp.com/",
    githubLink: "https://github.com/AZensky/HackUp",
  },
  // {
  //   id: 4,
  //   title: "Social Media App Mobile",
  //   image: social,
  // },
  // {
  //   id: 5,
  //   title: "Business Website React Native",
  //   image: Business,
  // },
];
export default function SliderView({ sliderOptions }) {
  const [swiper, setSwiper] = useState();

  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper?.params) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);
  //
  return (
    <Box
      sx={{
        pl: 0,
        mt: 8,
        textAlign: { xs: "-webkit-center", md: "left" },
        "& .swiper-button-disabled": {
          "& svg": {
            fill: "#2a2929d6",
            width: { xs: 20, sm: 40 },
            height: 40,
          },
        },
        position: "relative",
        "& svg": {
          fill: "gray",
          width: { xs: 20, sm: 40 },
          height: 40,
        },
      }}
    >
      <Box
        sx={{
          mt: 2,
          height: "auto",
          float: "left",
          my: 22,
          width: { xs: 30, lg: 70 },
          cursor: "pointer",
        }}
        ref={prevRef}
      >
        <ArrowBackIosIcon />{" "}
      </Box>
      <Box
        sx={{
          mt: 2,
          height: "auto",
          float: "right",
          my: 22,
          width: { xs: 30, lg: 70 },
          textAlign: "right",
          cursor: "pointer",
        }}
        ref={nextRef}
      >
        <ArrowForwardIosIcon />
      </Box>
      <Box>
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          onSwiper={setSwiper}
          slidesPerView={3}
          spaceBetween={10}
          initialSlide={2}
          pagination={true}
          mousewheel={false}
          keyboard={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1020: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {SLIDER_OPTIONS?.map((card, idx) => {
            return (
              <Box key={idx}>
                <SwiperSlide>
                  <Card card={card} />
                </SwiperSlide>
              </Box>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
