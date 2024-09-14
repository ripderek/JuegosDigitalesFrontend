"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import { SocialIcon } from "react-custom-social-icons";
//constante que almacene todos los iconos y links skere

const Icons = [
  {
    IconName: "facebook",
    Link: "Todo",
  },
  {
    IconName: "twitter",
    Link: "Todo",
  },
  {
    IconName: "instagram",
    Link: "Todo",
  },
  {
    IconName: "whatsapp",
    Link: "Todo",
  },
  {
    IconName: "youtube",
    Link: "Todo",
  },
  {
    IconName: "pinterest",
    Link: "Todo",
  },
  {
    IconName: "telegram",
    Link: "Todo",
  },
  {
    IconName: "tiktok",
    Link: "Todo",
  },
  {
    IconName: "twitch",
    Link: "Todo",
  },
];

export function Navbar1() {
  return (
    <div className=" bg-transparent p-2 grid grid-cols-2  px-24">
      <div>
        <div className="text-xs">
          ¡REBAJAS! de invierno, 90 % Juegos PS4 Y PS5😲
          <Button className="bg-yellow-800 text-black p-1 ml-1 rounded-sm">
            VER MÁS
          </Button>
        </div>
      </div>
      <div className="flex justify-end  gap-1">
        {Icons.map(({ IconName, Link }, index) => (
          <div
            className=" bg-yellow-800 rounded-full hover:bg-blue-gray-800"
            key={index}
          >
            <SocialIcon
              network={IconName}
              color="transparent"
              size={30}
              shape={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar1;
