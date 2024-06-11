import { useState } from "react";
import Button from "./Button";


function Product({ val, mover, count }) {

  return (
    <div className="  h-[14rem] w-full  bg-black py-3 text-white">
      <div onMouseEnter={() => { mover(count) }} className={` hover:bg-gradient-to-r from-purple-500 to-fuchsia-900  hover:text-sm duration-75 hover:opacity-70 shadow-orange-800  cursor-pointer  hover:py-4 hover:font-bold bg-black rounded max-w-screen-xl mx-auto flex items-center  justify-between px-4`}>
        <h1 className=" text-6xl capitalize font-semibold ">{val.title}</h1>
        <div className=" dets w-1/3">
          <p className=" mb-10">{val.desc}</p>
          <div className=" flex justify-between text-center">
            {val.live && <Button title="Live website" />}
            {val.case && <Button title="Case Study" />}


          </div>


        </div>


      </div>
    </div>
  )
}

export default Product;
