"use client";
import Image from "next/image";
import OferHeader from "../../../public/images/Offers/1725411073_home-otherweb.png";
import Off1 from "../../../public/images/Offers/1725408693_ecuador-banner_web.png";
import Off2 from "../../../public/images/Offers/1718811387_1717461609_1234.png";
import Off3 from "../../../public/images/Offers/1718811397_1713914911_ps4.png";

const Ofertas = [
  {
    imagen: Off1,
  },
  {
    imagen: Off2,
  },
  {
    imagen: Off3,
  },
];
export function Offers() {
  return (
    <div className="mt-4 rounded-sm  p-2">
      <div className="mx-auto w-full relative group transform transition-transform duration-300 hover:scale-105">
        <Image
          src={OferHeader}
          width={1900}
          alt="Picture of the author"
          className="rounded-lg cursor-pointer hover:shadow-lg hover:shadow-yellow-500 "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {Ofertas.map(({ imagen }, index) => (
          <div
            className="mx-auto w-full relative group transform transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <Image
              src={imagen}
              width={1900}
              alt="Picture of the author"
              className="rounded-lg cursor-pointer hover:shadow-lg hover:shadow-yellow-900"
            />
            {/* Reflejo animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20   transition duration-500 ease-in-out rounded-lg pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
