import React from "react"
import Button from "./Button";



function Navbar() {


  return (
    <>
      <div className=" text-xs gap-0  py-5 px-9 pl-10 rounded mx-auto bg-black max-w-screen-xl flex text-wrap justify-between   ">
        <div className=" overflow-x-hidden flex ">
          <img className=" w-16 " src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="logo" />
          <div className=" py-2 text-zinc-50  gap-8 flex flex-wrap px-12 font-light text-xs ">
            <a href="#">Home</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <Button />
      </div>
    </>
  )
}

export default Navbar;
