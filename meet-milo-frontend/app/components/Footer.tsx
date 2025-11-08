import Image from 'next/image';
import React from 'react';
import { miloImages } from '@/app/lib/images';
import Link from 'next/link';
import { Link2 } from 'lucide-react';
const Footer = () => {
  return (
    <>
      <footer className="relative flex flex-col gap-4 items-center justify-center md:grid md:grid-cols-2 md:justify-items-center md:content-center w-full py-5 md:h-50 bg-linear-to-tr from-[#a38566] via-[#795c3f] to-[#50381f] transition-all duration-300">
        <div className="footerFont bg-white w-3/4 sm:w-1/3 py-3 px-4 rounded-2xl flex items-center justify-center gap-2 lg:ml-50 text-center">
          <p className="footerFont">Mazen Awwad</p>
          <Link href={"https://www.linkedin.com/in/mazenawwad/"}>
            <Link2 size={25} />
          </Link>
        </div>
        <div className="footerFont bg-white w-3/4 sm:w-1/3 py-3 px-3 rounded-2xl flex items-center justify-center gap-2 lg:mr-50 text-center">
          <p className="footerFont">Mohammad El Souki</p>
          <Link
            href={"https://www.linkedin.com/in/mohamad-el-souki-a79b54183/"}
          >
            <Link2 size={25} />
          </Link>
        </div>
        <Image
          src={miloImages.milo6}
          className="w-80 md:hidden "
          alt="Milo 6"
          width={500}
          height={500}
        />
        <Image
          src={miloImages.milo3}
          className="hidden md:block absolute top-0 left-20 w-25 "
          alt="Milo 3"
          width={500}
          height={500}
        />
        <Image
          src={miloImages.milo4}
          className="hidden md:block absolute -top-30 rotate-15 right-10 w-100 "
          alt="Milo 4"
          width={500}
          height={500}
        />
        <Image
          src={miloImages.milo5}
          className="hidden md:block absolute top-0 w-30 left-1/2 -translate-x-1/2 "
          alt="Milo 5"
          width={500}
          height={500}
        />
      </footer>
    </>
  );
}

export default Footer