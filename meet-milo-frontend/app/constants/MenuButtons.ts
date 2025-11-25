import { BadgeInfo, LucideIcon, NotebookPen, ShoppingBasket } from 'lucide-react';

export type MenuButton = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const MenuButtons: MenuButton[] = [
  
  {
    label: "BLOG",
    path: "/blog",
    icon: NotebookPen
  },
  {
    label: "STORE",
    path: "/store",
    icon: ShoppingBasket
  },
  {
    label: "ABOUT",
    path: "/about",
    icon: BadgeInfo
  },
];