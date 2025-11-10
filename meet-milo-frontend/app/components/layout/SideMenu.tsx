import React from 'react'
 interface props {
   handleClick: () => void;
 }
const SideMenu = (prop:props) => {

  return (
    <div className="md:hidden left-0 top-0 bg-red-500 h-screen fixed z-1 w-50">
      SHOWN
      <button onClick={prop.handleClick}> click</button>
    </div>
  );
}

export default SideMenu