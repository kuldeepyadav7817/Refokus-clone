import React, { useState } from 'react';

import { FaLongArrowAltRight } from "react-icons/fa";

function Card({ width, start, para, title, main, Hoverbg, p_Hover, contact_Hover }) {
    const [buttonText, setButtonText] = useState('Contact Us');
    return (
        <div className={` rounded-xl bg-zinc-700 p-5 ${width} ${Hoverbg}`}>
            <div className={`${p_Hover}  up heading flex justify-between text-neutral-300 font-light`}>
                <p className={`text-neutral-200`}>{title}</p>
                <span><FaLongArrowAltRight /></span>
            </div>
            <div className=" main heading">
                <h3 class={`${p_Hover} text-white font-medium text-4xl`}>{main}</h3>
            </div>

            <div className=" down mt-52">

                {start && (
                    <>
                        <h1 className=" text-8xl text-white ">Start a Project</h1>
                        <button
                            className={`${contact_Hover} border-zinc-50 px-4 py-2 mt-4  rounded-full border-[1px]`}>{buttonText }</button>
                        onMouseEnter={() => setButtonText('See More')}
                        onMouseLeave={() => setButtonText('Contact Us')}
                    </>
                )}

                {para && (

                    <p className={` text-xl text-slate-50`}>Explore what drives our team.</p>
                )}


            </div>
        </div >
    )

}
export default Card;
