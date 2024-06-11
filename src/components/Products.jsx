import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";


function Products() {
  var products = [
    {
      title: "arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false

    },
    {
      title: "cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false
    },
    {
      title: "TTR",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false
    },
    {
      title: "maniv",
      desc: "lWe've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true
    },
    {
      title: "layout land",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false
    },
    {
      title: "singularity",
      desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: true
    },

  ]
  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 14)
  }


  return (
    <div className=" mt-32  relative">
      {products.map((val, index) => <Product key={index} val={val} mover={mover} count={index} />)}
      <div className="  absolute w-full h-full top-0 pointer-events-none ">

        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }}
          className="  window absolute w-[25rem] h-[14rem] bg-slate-50 left-[44%]  overflow-hidden ">

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-200  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f15978b05dc7f2ae554_14-p-500.webp" alt="" />
          </motion.div>

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-300  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41324914b470b20ec7d03_Frame%203-p-500.png" alt="" />
          </motion.div>

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-400  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ecc885579ba1b4ffc97_10-p-800.jpg" alt="" />
          </motion.div>

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-500  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b2cab86e8df24e528c4441_Frame%201-p-800.png" alt="" />
          </motion.div>

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-600  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f1160e50447ddfb490fb59_portfolioCard_cc-02%20(1).webp" alt="" />
          </motion.div>

          <motion.div transition={{ ease: [0.45, 0, 0.55, 1], duration: .5 }} animate={{ y: -pos + `rem` }} className="  w-full h-full bg-blue-700  ">
            <img src="https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b41bfccf2d0e77e130b210_Like%20Magic%20-%20mobile-p-1080.png" alt="" />
          </motion.div>




        </motion.div>

      </div>


    </div>
  )
}

export default Products;
