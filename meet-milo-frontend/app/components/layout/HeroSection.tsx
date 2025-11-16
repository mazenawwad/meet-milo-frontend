import { miloImages } from '@/app/lib/images'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full bg-red-100">
      <div className="relative flex flex-col items-center justify-start h-300">
        <div className="flex flex-col mt-3 text-center w-full z-1 absolute top-0 size-20">
          <span className="text-3xl sm:text-[50px] md:text-[70px] lg:text-[90px] xl:text-[100px] xl:leading-30 w-full text-center heroTitle h-fit transition-all duration-300">
            did you just say
          </span>
          <span className="text-7xl leading-20 sm:text-[120px] sm:leading-30 md:text-[150px] md:leading-40 lg:text-[180px] lg:leading-50 xl:text-[250px] xl:leading-70 2xl:text-[300px] w-full text-center heroTitle transition-all duration-300">
            pspsps?
          </span>
        </div>
        <Image
          src={miloImages.milo7}
          alt="miloHero"
          className="absolute top-10 sm:top-15 md:top-25 lg:top-30 xl:top-32 z-3 w-80 sm:w-100 md:w-120 lg:w-120 xl:w-130 transition-all duration-300"
          width={2000}
          height={0}
        />
      </div>
    </div>
  );
}

export default HeroSection