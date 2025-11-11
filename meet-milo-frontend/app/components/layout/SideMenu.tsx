import React from 'react'
 interface props {
   handleClick: () => void;
   shown: boolean;
 }
const SideMenu = (prop:props) => {
console.log(prop.shown);
  return (
    <div
      className={`md:hidden left-0 top-0 bg-[#E5F7FA] w-screen fixed z-100 transition-all duration-1000 ease-in-out ${
        prop.shown ? "h-screen opacity-100" : "h-0 opacity-0"
      }`}
    >
      SHOWN
      <button onClick={prop.handleClick}> click</button>
    </div>
  );
}

export default SideMenu