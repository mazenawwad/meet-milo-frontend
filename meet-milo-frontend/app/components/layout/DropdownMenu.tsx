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
      <div className="w-full h-20 bg-[#8b5a2b] headerTitle flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300">
        {" "}
        Milo Menu
      </div>
      {/* <Image src={miloImages.milo8} width={500} height={500} alt="milo8" /> */}
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
  );
}

export default DropdownMenu