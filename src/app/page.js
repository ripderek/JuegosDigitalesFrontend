import Image from "next/image";
import { Offers } from "@/app/ComponentesPagu";
import { Carrusel } from "@/Components";
import { Recomendaciones } from "@/app/data/Recomendaciones";
export default function Home() {
  return (
    <>
      <Offers />
      <Carrusel data={Recomendaciones} Title={"Recomendados"} />
      <Carrusel data={Recomendaciones} Title={"Juegos PS4"} />
    </>
  );
}
