export type CategoryId = "empanadas" | "tartas" | "ollas";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryId;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  id: CategoryId;
  name: string;
  short: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export const categories: MenuCategory[] = [
  {
    id: "empanadas",
    name: "Empanadas",
    short: "Empanadas",
    blurb:
      "Masa finita, relleno generoso y repulgue a mano. Salen del horno en tandas, todo el día.",
    image: "/images/hero-empanada.webp",
    imageAlt: "Empanada salteña abierta al medio con relleno de carne",
  },
  {
    id: "tartas",
    name: "Tartas",
    short: "Tartas",
    blurb:
      "Porciones individuales de masa quebrada, con rellenos de todos los días. Ideal para un almuerzo rápido.",
    image: "/images/tarta-choclo-calabaza.webp",
    imageAlt: "Porción de tarta de choclo y calabaza",
  },
  {
    id: "ollas",
    name: "Comida a la olla",
    short: "A la olla",
    blurb:
      "Humita en chala, hecha con choclo rallado, cebolla y queso. Locro y carbonada vuelven en temporada.",
    image: "/images/humita.webp",
    imageAlt: "Humita en chala abierta sobre un plato oscuro",
  },
];

export const menu: MenuItem[] = [
  {
    id: "emp-carne",
    name: "Carne cortada a cuchillo",
    description:
      "La salteña de siempre: roast beef cortado a cuchillo, papa, cebolla de verdeo y huevo.",
    price: 2400,
    category: "empanadas",
    image: "/images/hero-empanada.webp",
    tag: "La más pedida",
  },
  {
    id: "emp-pollo",
    name: "Pollo al verdeo",
    description:
      "Pollo desmenuzado, cebolla de verdeo y un toque de crema. Jugosa de verdad.",
    price: 2400,
    category: "empanadas",
    image: "/images/empanada-pollo.webp",
  },
  {
    id: "emp-jyq",
    name: "Jamón y queso",
    description:
      "Jamón cocido y mozzarella que se estira. Simple, tibia, imposible de parar.",
    price: 2400,
    category: "empanadas",
    image: "/images/empanada-jyq.webp",
  },
  {
    id: "emp-humita",
    name: "Humita",
    description:
      "Choclo rallado, cebolla y queso. Dulce y cremosa, como se come en el norte.",
    price: 2400,
    category: "empanadas",
    image: "/images/empanada-humita.webp",
  },
  {
    id: "emp-cebolla",
    name: "Cebolla y queso",
    description: "Cebolla caramelizada y queso. La opción de los que ya conocen la casa.",
    price: 2400,
    category: "empanadas",
    image: "/images/plato.jpg",
  },
  {
    id: "emp-roquefort",
    name: "Roquefort",
    description: "Queso azul bien generoso. Intensa, para paladares decididos.",
    price: 2400,
    category: "empanadas",
    image: "/images/corte.jpg",
  },
  {
    id: "emp-arabe",
    name: "Árabe",
    description: "Carne picada, cebolla, huevo, nuez moscada y una pizca de pimienta.",
    price: 2400,
    category: "empanadas",
    image: "/images/corte.jpg",
  },
  {
    id: "emp-caprese",
    name: "Caprese",
    description: "Mozzarella, tomate y albahaca fresca. Liviana, aromática, distinta.",
    price: 2400,
    category: "empanadas",
    image: "/images/plato.jpg",
  },
  {
    id: "emp-espinaca",
    name: "Espinaca",
    description: "Espinaca, cebolla y queso. Verde, jugosa y con el repulgue de siempre.",
    price: 2400,
    category: "empanadas",
    image: "/images/empanada-espinaca.webp",
  },
  {
    id: "emp-dulce",
    name: "Dulce",
    description: "carne picada, cebolla, zanahoria, huevo y cebolla de verdeo.",
    price: 2400,
    category: "empanadas",
    image: "/images/empanada-dulce.webp",
    tag: "Para el postre",
  },
  {
    id: "tar-choclo",
    name: "Choclo y calabaza",
    description:
      "Choclo cremoso y calabaza asada sobre masa quebrada. Dorada y abundante.",
    price: 7500,
    category: "tartas",
    image: "/images/tarta-choclo-calabaza.webp",
  },
  {
    id: "tar-puerro",
    name: "Puerro, cebolla y mozzarella",
    description: "Puerro y cebolla bien pochados con mozzarella gratinada arriba.",
    price: 7500,
    category: "tartas",
    image: "/images/tarta-puerro.webp",
  },
  {
    id: "tar-pollo",
    name: "Pollo y calabaza",
    description: "Pollo desmenuzado y calabaza asada. Dulzura justa, relleno abundante.",
    price: 7500,
    category: "tartas",
    image: "/images/tarta-pollo.webp",
  },
  {
    id: "tar-verdura",
    name: "Verduras mixtas",
    description: "Espinaca, zanahoria y cebolla. La tarta verde de la casa.",
    price: 7500,
    category: "tartas",
    image: "/images/tarta-verdura.webp",
  },
  {
    id: "olla-humita",
    name: "Humita en chala",
    description:
      "Choclo rallado, cebolla y queso, cocida en su chala. Cremosa, caliente, del norte.",
    price: 6500,
    category: "ollas",
    image: "/images/humita.webp",
    tag: "Del norte",
  },
];
