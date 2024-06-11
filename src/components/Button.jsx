
import { LuArrowUpRightFromCircle } from "react-icons/lu";

function Button({title="Get started"}) {
    return(
        <>
          <button class=" text-black items-center rounded-full px-4 py-2  flex gap-4 text-xs bg-slate-50 font-thin justify-centerrounded">
        {title}
        <LuArrowUpRightFromCircle />

        </button>
        </>
    )
    
}

export default Button;