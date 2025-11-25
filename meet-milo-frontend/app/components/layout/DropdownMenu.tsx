import { miloImages, miloStickers } from '@/app/lib/images';
import Image from 'next/image';
import React from 'react'
import { MenuButtons } from '@/app/constants/MenuButtons';
import DropdownMenuButton from './DropdownMenuButton';
 interface props {
   handleClick: () => void;
   shown: boolean;
 }
const DropdownMenu = (prop:props) => {
  return (
    <div
      className={`md:hidden fixed h-screen left-0 top-0 -translate-y-[100vh] bg-[#E5F7FA] flex flex-col items-center justify-start w-screen z-100 transition-all duration-1000 ease-in-out ${
        prop.shown ? "translate-y-0" : ""
      }`}
    >
      <div className="relative w-full h-20 bg-[#8b5a2b] headerTitle flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300">
        {" "}
        Milo Menu
        <button
          onClick={prop.handleClick}
          className="-translate-x-1/2 top-2 right-2 size-14 bg-[#E5F7FA] cursor-pointer p-2 rounded-full group absolute"
        >
          <Image
            src={miloImages.milo9}
            width={700}
            height={700}
            alt="milo9"
            className="group-hover:hidden "
          />
          <Image
            src={miloImages.milo10}
            width={700}
            height={700}
            alt="milo10"
            className="hidden group-hover:block"
          />
        </button>
      </div>
        <Image src={miloStickers.MiloBag} alt='bag' width={100} height={100}/>
      <div className="flex flex-col items-center justify-start w-full">
        {MenuButtons.map((button,i)=>(
          <DropdownMenuButton key={i} label={button.label} path={button.path} icon={button.icon}/>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu