"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Carrusel({ data, Title }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
  };
  return (
    <div className="mt-5 bg-transparent mx-7 ">
      <Typography variant="h3" color="white" className="font-bold ml-4">
        {Title}
      </Typography>
      <div className="w-full  m-auto gap-5 p-4 ">
        <Slider {...settings}>
          {data.map(({ image, title, Url, platform, brandColor }, index) => {
            return (
              <div key={index} className="bg-transparent ">
                <div>
                  <div className="w-64 h-80 overflow-hidden">
                    <Image
                      src={image}
                      width={250}
                      height={250}
                      alt="Picture of the author"
                      className="h-80 w-64 z-40 top-1 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-64 p-6 bg-gray-200">
                    <p className="font-semibold text-black text-center">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Carrusel;
