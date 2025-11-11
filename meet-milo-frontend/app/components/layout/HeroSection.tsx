import { miloImages } from '@/app/lib/images'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full bg-red-100'>
    <div className="relative flex flex-col items-center justify-start h-300">
        <div className="flex flex-col text-center w-full z-1 absolute top-0 size-20">
            <span className='text-3xl leading-20 xl:text-[100px] xl:leading-30 w-full text-center heroTitle h-fit'>did you just say</span>
            <span className='text-7xl leading-25 xl:text-[300px] xl:leading-70 w-full text-center heroTitle'>pspsps?</span>
        </div>
        <Image src={miloImages.milo7} alt='miloHero' className='absolute top-30 z-3 w-80 xl:w-125' width={2000} height={0}/>
    </div>

    </div>
  )
}

export default HeroSection