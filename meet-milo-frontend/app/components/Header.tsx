import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="relative w-full h-30 bg-linear-to-tr from-[#4b3621] via-[#af7f4f] to-[#50381f]  flex items-center justify-center">
        <Link className="flex items-center justify-center text-5xl headerTitle cursor-pointer" href='/'>
            Meet Milo
        </Link>
        <div className='flex items-center absolute right-0 justify-between'>
            <Link className='text-center w-full text-2xl px-15 headerButton' href='/blog'>Blog</Link>
            <Link className='text-center w-full text-2xl px-15 headerButton' href='/store'>Store</Link>
            <Link className='text-center w-full text-2xl px-15 headerButton' href='/about'>About</Link>
        </div>
    </div>
  );
}   

export default Header