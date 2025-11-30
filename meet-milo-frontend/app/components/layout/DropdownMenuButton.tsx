'use client'
import Link from 'next/link';
import Image from 'next/image';

interface props {
  path: string;
  label: string;
  image?: string;
  handleClick: () => void
}
const DropdownMenuButton = (prop:props) => {
  const handeClick = () => {
    prop.handleClick();
  }
  return (
    <Link
      className="w-full h-fit py-5 hover:bg-[#8b5a2b]/70 transition-colors duration-300 hover:text-white cursor-pointer flex items-center justify-center text-center font-bold"
      href={prop.path}
      onClick={handeClick}
    >
      {prop.image && (
        <Image 
          src={prop.image} 
          alt={prop.label} 
          width={100} 
          height={60}
          className="object-contain h-18"
        />
      )}
      <p className="text-4xl sm:text-6xl dropdownMenuButton">{prop.label}</p>
    </Link>
  );
}

export default DropdownMenuButton