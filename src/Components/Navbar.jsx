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
import { Bars4Icon } from "@heroicons/react/24/solid";
import { ListaCategorias } from "@/Components/ListaCategorias";
import Image from "next/image";
//Importar los items que estan en formato JSON para un mejor manejo
import { Items } from "@/app/data/ItemsNavbar";
function NavListMenu() {
  //Nuevo estado con todo lo necesiario para los menus del navbar
  const [itemsMenus, SetItemMenus] = useState(Items);

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
    //funcion para hacer dinamico el posicionamiento de la imagen:
    const renderContent = (itemIMG, itemIMGPosition, items) => {
      const renderImage = () => (
        <div>
          <Image
            src={itemIMG}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      );

      const renderMenuItems = () => (
        <div>
          {items.map(({ title }, key) => (
            <a href="#" key={key}>
              <MenuItem className="flex items-center gap-3 border-none hover:bg-yellow-900 rounded-none">
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
      );

      switch (itemIMGPosition) {
        case "left":
          return (
            <div className="flex border-none">
              {itemIMG && renderImage()}
              {renderMenuItems()}
            </div>
          );
        case "right":
          return (
            <div className="flex border-none">
              {renderMenuItems()}
              {itemIMG && renderImage()}
            </div>
          );
        case "top":
          return (
            <div className="flex flex-col border-none">
              {itemIMG && renderImage()}
              {renderMenuItems()}
            </div>
          );
        case "bottom":
          return (
            <div className="flex flex-col border-none">
              {renderMenuItems()}
              {itemIMG && renderImage()}
            </div>
          );
        default:
          return <div className="flex border-none">{renderMenuItems()}</div>;
      }
    };
    return (
      <div className="flex border-none bg-opacity-20">
        {/* PREGUNTAR SI EL ARRAY SELECCIONADO CONTIENE ITEMS Y CREAR UN DIV POR CADA ARRAY DEL OBJETO */}
        {selectedMenu?.items && (
          <>
            {selectedMenu.items.map(
              ({ itemTitle, itemIMG, itemIMGPosition, items }, key) => (
                <div>
                  <div className="mx-auto items-center text-center mb-2 bg-opacity-20">
                    <Typography variant="h6" color="white">
                      {itemTitle}
                    </Typography>
                  </div>
                  {/* Usar renderContent para manejar la posición dinámica de la imagen */}
                  {renderContent(itemIMG, itemIMGPosition, items)}
                </div>
              )
            )}
          </>
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
    <List className="  p-0  lg:flex-row bg-opacity-20">
      <NavListMenu />

      {/* Recorre cada ítem en Items y luego sus links */}
      {Items.map((item, idx) =>
        item.links?.map(({ Title, Url }, index) => (
          <Typography
            as="a"
            href={Url}
            variant="small"
            color="white"
            className="flex items-center text-sm"
            key={`${idx}-${index}`}
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4 rounded-none hover:bg-transparent hover:text-yellow-800">
              {Title}
            </ListItem>
          </Typography>
        ))
      )}
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
    <div className="flex mx-auto max-w-screen-2xl sticky top-0 z-40 bg-opacity-85">
      <ListaCategorias
        open={openCategorias}
        closeDrawer={() => setOpenCategorias(false)}
      />
      <div
        className="bg-yellow-800 w-auto flex gap-1 mx-auto items-center cursor-pointer "
        onClick={() => setOpenCategorias(true)}
      >
        <Bars4Icon
          className="h-6 w-6 ml-1 mx-auto"
          strokeWidth={2}
          color="black"
        />
        <span className="text-black mr-2 mx-auto">Categorias</span>
      </div>
      <Navbar className="mx-auto  rounded-none bg-gray-900/90 border-none p-0  bg-opacity-20">
        <div className="flex  text-blue-gray-900 bg-opacity-20">
          <div className="hidden lg:block bg-opacity-20">
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
