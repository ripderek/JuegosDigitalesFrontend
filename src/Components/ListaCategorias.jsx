"use client";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function ListaCategorias({ closeDrawer, open }) {
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      className="p-4 bg-gray-100"
      placement="left"
      size={450}
    >
      <div className="mb-6 flex items-center justify-between ">
        <div className="text-center items-center mx-auto justify-center">
          <Typography variant="paragraph" color="black">
            Lista Categorias
          </Typography>
        </div>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          X
        </IconButton>
      </div>
      <div className="text-center items-center mx-auto justify-center">
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          No hay categorias
        </Typography>
      </div>
    </Drawer>
  );
}

export default ListaCategorias;
