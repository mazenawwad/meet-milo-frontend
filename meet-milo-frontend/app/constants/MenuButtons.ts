import { miloStickers } from '@/app/lib/images';

export type MenuButton = {
  label: string;
  path: string;
  image?: string;
};

export const MenuButtons: MenuButton[] = [
  
  {
    label: "BLOG",
    path: "/blog",
    image: miloStickers.MiloLaptop
  },
  {
    label: "STORE",
    path: "/store",
    image: miloStickers.MiloBag
  },
  {
    label: "ABOUT",
    path: "/about",
    image: miloStickers.MiloGlasses
  },
];