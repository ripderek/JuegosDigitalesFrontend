"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { ShoppingCartIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
export function Carrusel({ data, Title }) {
  let settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
  };
  return (
    <div className="mt-5 bg-transparent mx-7 ">
      <div className="flex flex-row justify-between items-center mx-6">
        <div>
          <Typography variant="h3" color="white" className="font-bold ml-4">
            {Title}
          </Typography>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button className="text-black flex items-center  p-2 text-base bg-orange-800">
            Ver todo
          </Button>
        </div>
      </div>

      <div className="w-full  m-auto  p-4 ">
        <Slider {...settings}>
          {data.map(
            (
              {
                image,
                title,
                Url,
                platform,
                brandColor,
                Id,
                Oferta,
                PorcentajeOferta,
                Precio,
                PrecioOferta,
                JuegoGratis,
              },
              index
            ) => {
              return (
                <div key={index} className="bg-transparent  ">
                  <div>
                    <div className="relative  overflow-hidden rounded-t-lg ">
                      {Oferta && (
                        <Button className="absolute bottom-0 left-0 z-40 rounded-full bg-red-700 m-2 pointer-events-none cursor-none text-lg p-2">
                          {PorcentajeOferta}
                        </Button>
                      )}
                      {JuegoGratis && (
                        <div className="absolute top-0 right-0 z-40 rounded-none bg-light-blue-900 text-white  pointer-events-none cursor-none text-sm font-bold p-1">
                          "+ Juego Gratis"
                        </div>
                      )}
                      <Image
                        src={image}
                        width={250}
                        height={250}
                        alt="Picture of the author"
                        className="h-80 w-64  cursor-pointer transform transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className=" p-1 bg-gray-200 rounded-b-lg">
                      {/* Si tiene una oferta entonces renderizar el precio anterior con rojo */}

                      <div
                        className={`mx-auto items-center text-center font-bold line-through mt-1 ${
                          Oferta ? "text-red-700" : "text-gray-200"
                        }`}
                      >
                        {Oferta ? Precio : "_"}
                      </div>

                      <div className="mx-auto items-center text-center text-black font-bold text-2xl   ">
                        {PrecioOferta}
                      </div>
                      <div className="mx-auto  flex gap-1 mt-1">
                        <Button
                          className="w-full text-black flex items-center gap-3 p-1"
                          color="orange"
                        >
                          <ShoppingCartIcon className="h-5 w-5" color="black" />
                          Comprar
                        </Button>
                        <Button className="w-full text-white flex items-center gap-3 p-1 bg-gray-800">
                          <PlusCircleIcon className="h-5 w-5" color="white" />
                          Añadir
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Carrusel;
