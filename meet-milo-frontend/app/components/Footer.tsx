import Image from 'next/image';
import React from 'react';
import { miloImages } from '@/app/lib/images';
const Footer = () => {
  return (
    <>
      <footer className="relative grid grid-cols-2 justify-items-center content-center w-full h-20 lg:h-50 bg-linear-to-tr from-[#a38566] via-[#795c3f] to-[#50381f] transition-all duration-300">
        <div className="footerFont bg-white w-1/3 py-3 rounded-2xl flex flex-col gap-2 ml-50 text-center">
          <p>Mazen Awwad</p>
        </div>
        <div className="footerFont bg-white w-1/3 py-3 rounded-2xl flex flex-col gap-2 mr-50 text-center">
          <p>Mazen Awwad</p>
        </div>
        <Image
          src={miloImages.milo3}
          className="absolute top-0 left-20 w-25 "
          alt="Milo 4"
          width={500}
          height={500}
        />
        <Image
          src={miloImages.milo4}
          className="absolute -top-30 rotate-15 right-10 w-100 "
          alt="Milo 4"
          width={500}
          height={500}
        />
        <Image
          src={miloImages.milo5}
          className="absolute top-0 w-30 left-1/2 -translate-x-1/2 "
          alt="Milo 4"
          width={500}
          height={500}
        />
      </footer>
    </>
  );
}

export default Footer