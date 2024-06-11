import React from "react";
import { motion } from "framer-motion"
function Marquee({ imageUrl,direction }) {
    return (



        <div className=" w-full flex overflow-hidden bg-black ">
             <motion.div initial={{x: direction ==="left" ? "0" : "-100%"}} animate={{x:direction ==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration:30,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imageUrl.map(url => <img key={url} src={url} alt="marquee" />)}

            </motion.div>
            <motion.div initial={{x: direction ==="left" ? "0" : "-100%"}} animate={{x:direction ==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration:30,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imageUrl.map(url => <img key={url} src={url} alt="marquee" />)}

            </motion.div>
        </div>

    )

}
export default Marquee;