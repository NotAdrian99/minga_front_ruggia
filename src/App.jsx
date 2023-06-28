import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <body className="overflow-hidden bg-[#ebebeb] flex flex-col justify-start gap-px relative w-full min-h-screen items-center pt-3 pb-10 px-12 sm:pt-0 ">
        <nav className="flex flex-row justify-between relative w-11/12 items-center  sm:absolute sm:top-0 sm:z-10 sm:w-11/12 ">
          <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <img src="https://file.rendit.io/n/Nh68DkJMYSU9Z6YbYsif.svg" className="min-h-0 min-w-0 relative w-16 shrink-0" alt="Menu Icon" />
          </button>
          <div className="relative flex flex-col justify-end w-20 shrink-0 items-center pt-12 pb-px px-8 ">
            <img src="Logo.png" className="w-20 h-20 min-h-0 min-w-0 absolute top-1 left-1" />
          </div>
        </nav>
        {isMenuVisible && (
          <div className="fixed inset-y-0 left-0 overflow-hidden bg-[linear-gradient(153deg,_#f9a8d4_-33%,#f472b6_76%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-start gap-5 w-2/6 sm:w-screen h-screen items-center py-6 rounded-lg z-10">
            <div className="flex flex-row justify-start mb-3 gap-3 relative w-5/6 items-center">
              <img src="https://file.rendit.io/n/16urEuO3MkhUjmxw2Ikw.png" className="min-h-0 min-w-0 relative w-12 shrink-0" />
              <div className="flex flex-col justify-start mr-8 relative w-2/3 items-center">
                <div className="font-['Poppins'] font-semibold tracking-[-0.16] leading-[24px] text-white relative w-full">User</div>
                <div className="text-sm font-['Poppins'] font-medium tracking-[-0.14] leading-[12px] text-white relative w-full">user@gmail.com</div>
              </div>
              <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <img src="https://file.rendit.io/n/phwrW2FEyDli7dECUaJt.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
              </button>
            </div>
            <div className="bg-white flex flex-col justify-center relative w-5/6 h-12 shrink-0 items-center rounded-lg">
              <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.15] leading-[24px] text-[#f68dc5] relative w-full">Home</div>
            </div>
            <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.15] leading-[24px] text-white mb-3 relative w-5/6">Mangas</div>
            <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.15] leading-[24px] text-white mb-3 relative w-5/6">My mangas</div>
            <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.15] leading-[24px] text-white mb-3 relative w-5/6">Favorites</div>
            <div className="text-center text-sm font-['Poppins'] font-semibold tracking-[-0.15] leading-[24px] text-white relative w-5/6">Logout</div>
          </div>
        )}
        {/* /////carousel */}
        <div className="relative flex flex-col justify-end pt-2 w-11/12 items-start sm:hidden md:w-full ">
          <div className="w-full h-64 bg-[linear-gradient(153deg,_#f9a8d4_-33%,#f472b6_76%)] bg-cover bg-blend-normal absolute top-10 left-0 flex flex-row justify-start gap-40 items-center pt-20 px-8 rounded  ">
            <div className=" bg-cover  bg-blend-normal relative flex flex-col justify-start  mr-[500px] w-6 shrink-0 items-center rounded-[50000px]">
              <div className="shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[linear-gradient(113deg,_rgba(255,_255,_255,_0.5)_8%,rgba(255,_255,_255,_0)_270%)] bg-cover  bg-blend-normal relative flex flex-col justify-start w-6 h-6 shrink-0 items-center py-2 bottom-10 rounded-[50000px] ">
                <img src="https://file.rendit.io/n/TllKkXLBAVQl4gXSjocn.svg" className="min-h-0 min-w-0 relative w-2" />
              </div>
            </div>
            <div className="self-start flex flex-col justify-start  gap-2 relative w-2/3 items-center lg:">
              <div className="text-2xl font-['Montserrat'] font-medium leading-[22.8px] text-white relative w-full md:mr-[1000px] lg:w-[250px] lg:mr-[800px] ">Shonen</div>
              <div className="text-sm font-sans leading-[13.3px] text-white relative w-full md:mr-[1000px] lg:w-[250px] lg:mr-[800px] 2xl:w-[400px] ">
                Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective
                or a combat team stands out.
              </div>
            </div>
            <div className=" bg-cover  bg-blend-normal relative flex flex-col justify-start w-6 shrink-0 items-center rounded-[50000px]">
              <div className="shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.1)] bg-[linear-gradient(113deg,_rgba(255,_255,_255,_0.5)_8%,rgba(255,_255,_255,_0)_270%)] bg-cover  bg-blend-normal relative flex flex-col justify-start w-6 h-6 shrink-0 items-center py-2 bottom-10 rounded-[50000px] ">
                <img src="https://file.rendit.io/n/EEg9UeYSY5vhqKOfUOps.svg" className="min-h-0 min-w-0 relative w-2" />
              </div>
            </div>
          </div>
          <img src="https://file.rendit.io/n/ooYbaEAaNZGADKPij5ir.png" className="w-[180px] h-[284px] min-h-0 min-w-0 absolute top-0 left-[378px]  lg:left-[230px] md:left-[90px]" />
          <img src="https://file.rendit.io/n/XVf7rhp04bzlWniGoaNP.png" className="min-h-0 min-w-0 bottom-[18px] relative md:invisible" />
        </div>
        {/* ///background */}
        <div className="bg-[url(https://file.rendit.io/n/EIEWXH81Z1DuGfuq3FGt.png)] bg-cover bg-center bg-blend-normal flex flex-col justify-end gap-4 relative w-11/12 h-[551px] shrink-0 items-start pl-[108px] py-32 md:w-screen  sm:h-screen sm:pl-[10px]  ">
          <div className=" text-6xl font-['Montserrat'] font-bold leading-[60.9px] text-white relative md:text-4xl lg:text-5xl sm:justify-center xs:text-2xl xs:w-[200px] ">
            Live the emotion of the manga
          </div>
          <div className=" text-2xl font-['Montserrat'] leading-[22.8px] text-white relative">Find the perfect manga for you</div>
          <div className=" font-['Montserrat'] font-semibold leading-[15.2px] text-white relative">#MingaForever 🔥</div>
          <button className="bg-[linear-gradient(153deg,_#f9a8d4_-33%,#f472b6_76%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center relative h-12 shrink-0 items-center rounded ">
            <div className=" text-2xl font-['Montserrat'] font-medium leading-[22.8px] text-white relative mx-20">Sign In!</div>
          </button>
        </div>

        {/* /// footer */}
        <div className="overflow-hidden flex flex-col justify-start relative w-full items-center md:w-screen ">
          <img src="https://file.rendit.io/n/4Q8ASYXxljzOdYeaXv9p.svg" className=" relative mt-[-16.5px] mb-12 w-11/12 md:w-screen sm:hidden" />
          <div className="flex flex-row justify-start gap-16 relative items-center sm:flex-col sm:gap-8">
            <div className="font-['Montserrat'] text-[#222222] relative">Home</div>
            <div className="font-['Montserrat'] text-[#222222] mr-64 relative sm:mr-[0px] md:mr-[0px]">Mangas</div>
            <div className="relative flex flex-col justify-end mr-[209px] w-20 shrink-0 items-center pt-12 pb-px px-8 sm:mr-[0px] md:mr-[0px]">
              <img src="Logo.png" className="  absolute sm:hidden " />
            </div>
            <div className="flex flex-col justify-start gap-5 relative w-56 shrink-0 items-center ">
              <div className="flex flex-row justify-between relative w-full items-center  ">
                <img src="https://file.rendit.io/n/urWBi3xhd5FqPrF102b4.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
                <img src="https://file.rendit.io/n/BepiqTakc2NIMJPC9pGM.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
                <img src="https://file.rendit.io/n/0oLeEfUcC4XRsuQ2muoo.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
                <img src="https://file.rendit.io/n/0urnMYkuPQxcaHYTPmK3.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
              </div>
              <div className="overflow-hidden bg-[linear-gradient(153deg,_#f9a8d4_-33%,#f472b6_76%)] bg-cover bg-blend-normal flex flex-row justify-center gap-4 relative w-full h-10 shrink-0 items-center rounded">
                <div className="font-['Montserrat'] leading-[15.2px] text-white relative">Donate</div>
                <img src="https://file.rendit.io/n/95k9UU69sjtLLPhOVshp.svg" className="min-h-0 min-w-0 relative w-6 shrink-0" />
              </div>
            </div>
          </div>
          <img src="https://file.rendit.io/n/tcc24ObV6xEeiBSCGumk.svg" className="min-h-0 min-w-0 relative" />
        </div>
      </body>
    </>
  );
}

export default App;
