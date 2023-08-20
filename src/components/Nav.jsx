import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag, BiUser, BiX} from "react-icons/bi"


function Nav() {
  const [searchDIsplay, setSearchDIsplay] = useState("hidden")
  const [xDIsplay, setXDIsplay] = useState("block")
  const [bg, setBg] = useState("transparent")
 function func(){ 
 
  if(  searchDIsplay == "hidden"){
    
    setSearchDIsplay("block")
    setBg("white")
    setXDIsplay("hidden")
  }

  else{
    setBg("transparent")
    setSearchDIsplay('hidden')
    setXDIsplay("block")
  }

  
 }
  return (
    <nav className=" disabled:bg-[#804600bb] z-50 h-[3rem] w-full justify-around sticky top-0  flex items-center">
   <div className="flex justify-around  max-sm:hidden w-full">
       <ul className="flex space-x-[6rem] max-xl:space-x-[3rem] max-md:space-x-[2rem] uppercase max-sm:text-[0.7rem]   ">
        <li className="   hover:border-b-[2px] text-center  active:border-none  border-white text-white ">cafe menu</li>
        <li className="   hover:border-b-[2px] text-center  active:border-none  border-white text-white ">order online</li>
        <li className="   hover:border-b-[2px] text-center  active:border-none  border-white text-white ">our cafes</li>
        <li className="   hover:border-b-[2px] text-center  active:border-none  border-white text-white ">about us</li>
      </ul>
      <ul className="flex uppercase space-x-[6rem] max-xl:space-x-[3rem] max-md:space-x-[2rem] text-white  ">
        <li className={`flex space-x-[0.4rem] bg-${bg}`}><BiSearch onClick={func} className={`text-2xl text-white ${xDIsplay}`}/> 
        <BiX className={`${searchDIsplay} text-black text-2xl `}onClick={func}/>
        <input placeholder="search..." type="text" className={`${searchDIsplay} text-black opacity-60  px-1 w-[12rem] outline-none rounded-lg`}/></li>
        
        <li><BiShoppingBag className="text-2xl"/></li>
        <li><BiUser className="text-2xl"/></li>
      </ul>
   </div>
    </nav>
  );
}

export default Nav;
