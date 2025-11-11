'use client'
import Link from 'next/link';
import React from 'react'

interface props {
    path: string
    label: string
}
const HeaderButton = (prop:props) => {
  return (
    <Link
      className="text-center w-full text-base hover:bg-[#ceb69f] hover:text-white py-4 wobble lg:text-xl xl:text-2xl px-8 xl:px-10 headerButton transition-all duration-300"
      href={prop.path}
    >
      {prop.label}
    </Link>
  );
}

export default HeaderButton