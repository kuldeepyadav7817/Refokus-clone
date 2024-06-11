import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function Work() {

    const [images, setImages] = useState([
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "43%", left: "42%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "47%", left: "46%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "49%", left: "40%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "50%", left: "54%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "52%", left: "57%", isActive: false },
        { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "56%", left: "59%", isActive: false },

    ])

    // scroll  image animation

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) => {
        function imagesShow(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    arr.indexOf(index) === -1
                        ? { ...item, isActive: false }
                        : { ...item, isActive: true })
            )
        };

        switch (Math.floor(data * 100)) {
            case 0:
                imagesShow([])
                break;
            case 1:
                imagesShow([])
                break;

            case 2:
                imagesShow([0])
                break;

            case 3:
                imagesShow([0, 1])
                break;

            case 4:
                imagesShow([0, 1, 2])
                break;

            case 5:
                imagesShow([0, 1, 2, 3])
                break;

            case 6:
                imagesShow([0, 1, 2, 3, 4])
                break;
            case 7:
                imagesShow([0, 1, 2, 3, 5])
                break;




        }



    })


    return (


        <div className=" w-full h-[30rem] ">
            <div className=" relative justify-center bg-black max-w-screen-xl m-auto flex-wrap">
                <h1 className=" select-none flex-wrap  text-[22rem] font-medium tracking-tight leading-none text-white text-center ">
                    work
                </h1>
                <h1 className=" select-none text-center text-white">
                    Web Design, Webflow Development, Creative Development
                </h1>


                <div className=" w-full h-full top-0 absolute  ">

                    {images.map((elem, index) => (


                        elem.isActive && <img className=" rounded-md -translate-x-[50%] -translate-y-[50%] absolute w-52 h-44 " style={{ top: elem.top, left: elem.left }} key={index} src={elem.url} alt="image" />

                    ))}
                </div>
            </div>

        </div>

    )

}
export default Work;
