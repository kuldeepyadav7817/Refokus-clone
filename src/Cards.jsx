import React from "react";
import Card from "./Card";

function Cards() {
    return (
       
            <div className="  py-28  bg-black flex gap-3 max-w-screen-xl m-auto  ">
            <Card p_Hover={"hover:px-5"} Hoverbg={"hover:bg-zinc-500"} width={"basis-1/3"} title={"Up Next: News"} para={true} main={"Insights and behind the scenes"}/>
            <Card p_Hover={"hover:px-4"} Hoverbg={"hover:bg-violet-600"} width={"basis-2/3"} start={true}  title={"Get in Touch"} main={"Let’s get to it,"}  />


            </div>
        


    )

}
export default Cards;