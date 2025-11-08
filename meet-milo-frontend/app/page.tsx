import React from 'react'
import { miloImages } from './lib/images'
import Image from 'next/image'
const LandingPage = () => {
  return (
    <div className="h-300">
      <Image src={miloImages.milo7} alt="Milo 7" width={600} height={300}/>
    </div>
  );
}

export default LandingPage