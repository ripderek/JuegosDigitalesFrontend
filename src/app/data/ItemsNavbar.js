export const Items = [
  {
    id: 0,
    itenName: "PS3",
    isMenuOpen: false,
    //items que solo son botones con URL XD
    links: [
      {
        Title: "🎁Pack Deals🎁",
        Url: "/packDeals",
      },
      {
        Title: "🎯 OPINIONES",
        Url: "/opiniones",
      },
      {
        Title: "🏆 PREMIOS GAMER",
        Url: "/premios",
      },
    ],
    //cada item representa un nuevo div
    items: [
      {
        itemTitle: "PACKS DE JUEGOS PS3",
        itemIMG: "/images/Packs/ps3pack.jpg",
        itemIMGPosition: "left",
        items: [
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
      },
      {
        itemTitle: "JUEGOS",
        // itenIMG: "/images/Packs/ps3pack.jpg",
        items: [
          {
            title: "DIGITALES",
            // icon: SquaresPlusIcon,
          },
          {
            title: "FISICOS",
          },
          {
            title: "TODOS LOS JUEGOS",
          },
        ],
      },
    ],
  },
  //resto de elementos
  {
    id: 1,
    itenName: "PS4",
    isMenuOpen: false,
    items: [
      {
        itemTitle: "PACKS DE JUEGOS PS4",
        itemIMG: "/images/Packs/packps4.jpg",
        itemIMGPosition: "right",
        items: [
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
      },
      {
        itemTitle: "JUEGOS",
        // itenIMG: "/images/Packs/ps3pack.jpg",
        //itemIMGPosition: "left",
        items: [
          {
            title: "DIGITALES",
            // icon: SquaresPlusIcon,
          },
          {
            title: "FISICOS",
          },
          {
            title: "TODOS LOS JUEGOS",
          },
        ],
      },
      {
        itemTitle: "EXTRAS",
        itemIMG: "/images/Packs/ps4vr.jpg",
        itemIMGPosition: "bottom",
        items: [
          {
            title: "VR",
          },
          {
            title: "PREVENTA ",
          },
          {
            title: "ESTRENOS",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    itenName: "SPOTIFY",
    isMenuOpen: false,
    items: [
      {
        itemTitle: "GIFT CARDS SPOTIFY",
        itemIMG: "/images/Gift_Cards/spotify.png",
        itemIMGPosition: "bottom",
        items: [
          {
            title: "TODAS LAS PROMOS",
            // icon: SquaresPlusIcon,
          },
          {
            title: "$10",
          },
          {
            title: "$15",
          },
          {
            title: "$20",
          },
          {
            title: "$25",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    itenName: "PS4 CARDS",
    isMenuOpen: false,
    items: [
      {
        itemTitle: "GIFT CARDS PS4",
        itemIMG: "/images/Gift_Cards/ps.png",
        itemIMGPosition: "top",
        items: [
          {
            title: "TODAS LAS PROMOS",
            // icon: SquaresPlusIcon,
          },
          {
            title: "$10",
          },
          {
            title: "$15",
          },
          {
            title: "$20",
          },
          {
            title: "$25",
          },
        ],
      },
    ],
  },
];
