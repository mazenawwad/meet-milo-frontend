'use client'
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface props {
  path: string;
  label: string;
  icon: LucideIcon;
}
const DropdownMenuButton = (prop:props) => {
  return (
    <Link
      className="w-full h-20 hover:bg-[#8b5a2b]/70 transition-colors duration-300 hover:text-white cursor-pointer flex items-center justify-center text-center font-bold gap-3"
      href={prop.path}
    >
      <prop.icon size={40} className="m-2" />
      <p className="text-4xl dropdownMenuButton">{prop.label}</p>
    </Link>
  );
}

export default DropdownMenuButton