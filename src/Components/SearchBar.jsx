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
import logoImagen from "../../public/images/logo.png";
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
      className="mx-auto max-w-screen-xl from-black/20 to-gray-900 px-24  rounded-none"
    >
      <Carrito open={openDraw} closeDrawer={() => setOpenDraw(false)} />
      <div className="p-2">
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Image src={logoImagen} width={200} alt="Picture of the author" />
          <div className="ml-auto flex gap-1 md:mr-4 bg-white  rounded-lg">
            <div className="relative flex w-full gap-2 md:w-max ml-4">
              <Input
                variant="static"
                type="search"
                color="black"
                placeholder="Buscar ..."
                className="pr-20 "
                containerProps={{
                  className: "min-w-[288px] ",
                }}
              />
            </div>
            <div className="w-72 text-black">
              <Select
                variant="standard"
                value={value}
                onChange={(val) => setValue(val)}
                className="text-gray-800"
              >
                {SelectOptions.map(({ name }, index) => (
                  <Option key={index} value={name}>
                    {name}
                  </Option>
                ))}
              </Select>
            </div>
            <IconButton variant="text" color="black" className="mx-auto mt-1">
              <MagnifyingGlassIcon className="h-4 w-4  " color="black " />
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
