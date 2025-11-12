import { miloImages } from '@/app/lib/images';
import Image from 'next/image';
import React from 'react'
 interface props {
   handleClick: () => void;
   shown: boolean;
 }
const DropdownMenu = (prop:props) => {
console.log(prop.shown);
  return (
    <div
      className={`md:hidden fixed h-screen left-0 top-0 -translate-y-[100vh] bg-[#E5F7FA] flex flex-col gap-2 items-center justify-start w-screen z-100 transition-all duration-1000 ease-in-out ${
        prop.shown ? "translate-y-0" : ""
      }`}
    >
      <div className="w-full"></div>
      <Image src={miloImages.milo8} width={500} height={500} alt="milo8" />
      <button
        onClick={prop.handleClick}
        className="top-0 right-0 size-10 bg-red-500 rounded-full  absolute -translate-x-1/2"
      >
        {" "}
        click
      </button>
    </div>
  );
}

export default DropdownMenu