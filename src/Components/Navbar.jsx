"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ListaCategorias } from "@/Components/ListaCategorias";
import Image from "next/image";
function NavListMenu() {
  //Nuevo estado con todo lo necesiario para los menus del navbar
  const [itemsMenus, SetItemMenus] = useState([
    {
      id: 0,
      itenName: "PS3",
      isMenuOpen: false,
      //aqui para ver si tiene packs disponibles esa plataforma
      imgPack: "/images/Packs/ps3pack.jpg",
      pack: [
        {
          title: "TODOS LOS PACKS",
          // icon: SquaresPlusIcon,
        },
        {
          title: "3 JUEGOS EN 1",
        },
        {
          title: "4 JUEGOS EN 1",
        },
        {
          title: "5 JUEGOS EN 1",
        },
        {
          title: "6 JUEGOS EN 1",
        },
      ],
      tiposJuegos: [
        {
          TitleTipe: "FÍSICOS",
        },
        {
          TitleTipe: "DIGITALES",
        },
      ],
    },
    {
      id: 1,
      itenName: "PS4",
      isMenuOpen: false,
      //aqui para ver si tiene packs disponibles esa plataforma
      imgPack: "/images/Packs/packps4.jpg",
      pack: [
        {
          title: "TODOS LOS PACKS",
        },
        {
          title: "3 JUEGOS EN 1",
        },
        {
          title: "4 JUEGOS EN 1",
        },
        {
          title: "5 JUEGOS EN 1",
        },
        {
          title: "6 JUEGOS EN 1",
        },
      ],
      tiposJuegos: [
        {
          TitleTipe: "FÍSICOS",
        },
        {
          TitleTipe: "DIGITALES",
        },
      ],
      extras: [
        {
          title: "VR",
          imgExtra: "/images/Packs/ps3pack.jpg",
        },
        {
          title: "PREVENTA ",
          imgExtra: "/images/Packs/ps3pack.jpg",
        },
        {
          title: "ESTRENOS",
          imgExtra: "/images/Packs/ps3pack.jpg",
        },
      ],
    },
  ]);

  // Función para manejar el cambio de estado de los menús
  const handleMenuToggle = (id) => {
    SetItemMenus((prevState) =>
      prevState.map(
        (item) =>
          item.id === id
            ? { ...item, isMenuOpen: !item.isMenuOpen } // Cambia el estado del menú seleccionado
            : { ...item, isMenuOpen: false } // Cierra todos los demás menús
      )
    );
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = (id) => {
    const selectedMenu = itemsMenus.find((menu) => menu.id === id); // Encuentra el menú correspondiente por id

    return (
      <div className="flex border-none ">
        {/* PACK DE JUEGOS */}
        <div>
          <div className="mx-auto items-center text-center mb-2">
            <Typography variant="h6" color="white">
              PACKS DE JUEGOS
            </Typography>
          </div>
          {/* DIVIDIR EN DOS PARTES UN DIV PARA QUE LOS PACKS SALGAN EN LA IZQUIERDA Y EL RESTO A LA DERECHA */}
          <div className=" flex border-none">
            {/*IMAGEN PACK */}
            <div>
              <Image
                src={selectedMenu.imgPack}
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            {/* RECORRER LOS PACKS */}
            <div>
              {selectedMenu?.pack.map(
                ({ icon: Icon, title, description }, key) => (
                  <a href="#" key={key}>
                    <MenuItem className="flex items-center gap-3 border-none hover:bg-yellow-900 rounded-none">
                      {/* 
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                  <UserGroupIcon className="h-5 w-5 text-blue-gray-700" />
                </div>
                */}
                      <div>
                        <Typography
                          variant="h6"
                          color="white"
                          className="flex items-center text-sm font-bold"
                        >
                          {title}
                        </Typography>
                        {/* <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {description}
                  </Typography> */}
                      </div>
                    </MenuItem>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        {/* TIPOS  DE JUEGOS */}
        <div>
          <div>
            <div className="mx-auto items-center text-center mb-2">
              <Typography variant="h6" color="white">
                JUEGOS
              </Typography>
            </div>
            <div>
              {selectedMenu?.tiposJuegos.map(({ TitleTipe }, key) => (
                <a href="#" key={key}>
                  <MenuItem className="flex items-center gap-3  border-none hover:bg-yellow-900 rounded-none  ">
                    {/* 
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                  <UserGroupIcon className="h-5 w-5 text-blue-gray-700" />
                </div>
                */}
                    <div>
                      <Typography
                        variant="h6"
                        color="white"
                        className="flex items-center text-sm font-bold"
                      >
                        {TitleTipe}
                      </Typography>
                      {/* <Typography
                    variant="paragraph"
                    className="text-xs !font-medium text-blue-gray-500"
                  >
                    {description}
                  </Typography> */}
                    </div>
                  </MenuItem>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* ADICIONALES */}
        {selectedMenu?.extras && (
          <div>
            <div>
              <div className="mx-auto items-center text-center mb-2">
                <Typography variant="h6" color="white">
                  EXTRAS
                </Typography>
              </div>
              <div>
                {selectedMenu.extras.map(({ title, imgExtra }, key) => (
                  <a href="#" key={key}>
                    <MenuItem className="flex items-center gap-3  border-none hover:bg-yellow-900 rounded-none">
                      <div>
                        <Typography
                          variant="h6"
                          color="white"
                          className="flex items-center text-sm font-bold"
                        >
                          {title}
                        </Typography>
                      </div>
                    </MenuItem>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      {/* RECORRER LOS ITEMS DEL OBJETO PARA RENDERIZAR LOS MENUS DE MANERA DINAMICA  */}
      {itemsMenus.map(({ id, itenName, isMenuOpen }, index) => (
        <Menu
          open={isMenuOpen}
          handler={() => handleMenuToggle(id)}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
          key={id}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2  rounded-none font-medium text-white hover:bg-transparent hover:text-yellow-800 hover:font-bold"
                //selected={isMenuOpen || isMobileMenuOpen}
                //onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {itenName}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block border-none bg-black bg-opacity-85 ml-2">
            {renderItems(id)}
          </MenuList>
        </Menu>
      ))}
    </>
  );
}

function NavList() {
  return (
    <List className="  p-0  lg:flex-row ">
      <NavListMenu />
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>*/}
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const [openCategorias, setOpenCategorias] = useState(false);

  return (
    <div className="flex mx-auto max-w-screen-2xl  ">
      <ListaCategorias
        open={openCategorias}
        closeDrawer={() => setOpenCategorias(false)}
      />
      <div
        className="bg-yellow-800 w-auto flex gap-1 mx-auto items-center cursor-pointer"
        onClick={() => setOpenCategorias(true)}
      >
        <Bars4Icon
          className="h-6 w-6 ml-1 mx-auto"
          strokeWidth={2}
          color="black"
        />
        <span className="text-black mr-2 mx-auto">Categorias</span>
      </div>
      <Navbar className="mx-auto  rounded-none bg-gray-900/90 border-none p-0">
        <div className="flex  text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarWithMegaMenu;
