"use client";
import { useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
/* CONSTANTE PARA SIMULAR LOS DATOS QUE TIENE EL SELECT PARA PODER FILTRAR LO QUE SE BUSCA   */
import Image from "next/image";
import { Carrito } from "./Carrito";
const SelectOptions = [
  {
    name: "Todos",
  },
  {
    name: "XBOX",
  },
  {
    name: "PlayStation",
  },
  {
    name: "Nintendo",
  },
];
export function SearchBar() {
  const [value, setValue] = useState("Todos");
  const [openDraw, setOpenDraw] = useState(false);
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-2xl from-black/20 to-gray-900 px-24  rounded-none"
    >
      <Carrito open={openDraw} closeDrawer={() => setOpenDraw(false)} />
      <div className="p-2">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div>
            <Image
              src={"/images/logo.png"}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div className=" w-3/5 flex gap-1 md:mr-4  bg-transparent border-4 rounded-none">
            <Input
              variant="static"
              type="search"
              color="white"
              placeholder="Buscar ..."
              className="pr-20 "
              containerProps={{
                className: "min-w-[288px] bg-transparent ml-2",
              }}
            />

            <IconButton variant="text" color="black" className="mx-auto mt-1">
              <MagnifyingGlassIcon className="h-6 w-6  " color="white" />
            </IconButton>
          </div>
          <div className="w-auto flex-col cursor-pointer">
            <div>
              <IconButton
                variant="text"
                color="black"
                className="   text-white rounded-none "
                onClick={() => setOpenDraw(true)}
              >
                <ShoppingCartIcon className="h-8 w-8 " color="white" />
              </IconButton>
            </div>
            <div>Carrito</div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default SearchBar;
