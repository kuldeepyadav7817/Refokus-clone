function Stripe() {

    var Logos=[
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number:"15" },

        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number:"52" },

        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number:"2" },

        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number:"15" },

        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number:"52" },

        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number:"2" }
        

    ]

    return (
        <>
            <div className=" items-center justify-between flex max-w-screen-xl m-auto h-44 mt-0 bg-black">
            
             {Logos.map((elem,index)=>(

                <div key={index} className=" animate-pulse flex-wrap justify-around tracking-tight select-none border-white  border-2 border-l-4 h-12 w-[16.66%] flex ">
                    <img className=" text-xs w-28" src={elem.url} alt="logo" />
                    <h1 className=" text-xl mt-2 flex-col  text-white">{elem.number}</h1>
                </div>

             ))}


               

            </div>
        </>
    )
}

export default Stripe
